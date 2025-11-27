/**
 * TileZ is a tile editor.
 * Copyright (C) 2013 Michael Zucchi
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
package duskz.tool.fx;

import duskz.client.fx.DataManagerFX;
import duskz.map.TileMap;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map.Entry;
import java.util.jar.JarEntry;
import java.util.jar.JarInputStream;
import javafx.animation.Animation;
import javafx.application.Platform;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.collections.ObservableList;
import javafx.event.EventHandler;
import javafx.geometry.Orientation;
import javafx.scene.Node;
import javafx.scene.control.ScrollBar;
import javafx.scene.image.ImageView;
import javafx.scene.input.MouseButton;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.Pane;
import javafx.scene.layout.Region;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Text;
import javafx.util.Duration;

/**
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class MapView extends Region implements ChangeListener<Number> {

	String oldmap = "game-2.7.3";
	TileMap map;
	DataManagerFX data;
	// TODO: tilesize on DataManagerFX
	int tileSize = 32;
	double scale = 0.5;
	Pane graphics;
	Pane alias;
	StackPane stack;
	BorderPane overlay;
	ScrollBar vbar;
	ScrollBar hbar;
	MapSelectionModel selectionModel = new MapSelectionModel();

	public MapView() {
		graphics = new Pane();
		graphics.setManaged(false);
		graphics.setScaleX(scale);
		graphics.setScaleY(scale);

		alias = new Pane();
		alias.setManaged(false);
		alias.setScaleX(scale);
		alias.setScaleY(scale);

		stack = new StackPane();

		stack.getChildren().add(graphics);
		stack.getChildren().add(alias);
		overlay = new BorderPane();
		overlay.setCenter(stack);
		getChildren().add(overlay);

		vbar = new ScrollBar();
		vbar.setOrientation(Orientation.VERTICAL);
		hbar = new ScrollBar();

		overlay.setRight(vbar);
		overlay.setBottom(hbar);

		vbar.setUnitIncrement(32);
		hbar.setUnitIncrement(32);

		vbar.valueProperty().addListener(new ChangeListener<Number>() {
			public void changed(ObservableValue<? extends Number> ov, Number t, Number t1) {
				// blah blah update for position or some shit
			}
		});

		stack.addEventHandler(MouseEvent.ANY, new EventHandler<MouseEvent>() {
			double startx, starty;
			double hstart, vstart;
			boolean inpan = false;

			public void handle(MouseEvent t) {

				if (t.getEventType() == MouseEvent.MOUSE_PRESSED) {
					if (t.getButton() == MouseButton.MIDDLE) {
						startx = t.getX();
						starty = t.getY();
						hstart = hbar.getValue();
						vstart = vbar.getValue();
						inpan = true;
						t.consume();
					}
				} else if (t.getEventType() == MouseEvent.MOUSE_DRAGGED) {
					//if (t.getButton() == MouseButton.MIDDLE) {
					if (inpan) {
						double dx = t.getX() - startx;
						double dy = t.getY() - starty;

						// oh that's right, fx scrollbars are kind of fucked up, they don't reflect the range
						// the same way as every other toolkit in existance, ho hum.
						double fixh = (hbar.getMax() + hbar.getVisibleAmount()) / hbar.getMax();
						double fixv = (vbar.getMax() + vbar.getVisibleAmount()) / vbar.getMax();
						hbar.setValue(hstart - dx * fixh);
						vbar.setValue(vstart - dy * fixv);
						System.out.println("drag " + dx + "," + dy);
						t.consume();
						updateMapVisible();
					}
					//}
				} else if (t.getEventType() == MouseEvent.MOUSE_RELEASED) {
					if (inpan) {
						inpan = false;
						t.consume();
					}
				} else if (t.getEventType() == MouseEvent.MOUSE_CLICKED) {
					if (t.getButton() == MouseButton.PRIMARY) {
						int tx = (int)((getOriginX() + t.getX()) / tileSize / scale);
						int ty = (int)((getOriginY() + t.getY()) / tileSize / scale);

						System.out.printf("selecting %d,%d mouse %f,%f  origin %f,%f\n", tx, ty, t.getX(), t.getY(), getOriginX(), getOriginY());
						selectionModel.setSelected(tx, ty);
						// hack
						updateMapVisible();
					}
				}
			}
		});

	}
	double oldw, oldh;
	int vcols, vrows;
	HashMap<Integer, TileAnimator> animators = new HashMap<>();

	@Override
	protected void layoutChildren() {
		super.layoutChildren();

		//System.out.printf("layout children dimensions = %fx%f\n", getWidth(), getHeight());
		overlay.resize(getWidth(), getHeight());

		if (map != null) {
			//System.out.printf("visible total = %d max = %f visible %f\n",
			//		map.getRows() * tileSize,
			//		map.getRows() * tileSize - getHeight(),
			//		getHeight());

			//vbar.setMin(getHeight());
			//hbar.setMin(getWidth());
			vbar.setMax(map.getRows() * tileSize * scale);
			hbar.setMax(map.getCols() * tileSize * scale);
			vbar.setVisibleAmount(getHeight());
			hbar.setVisibleAmount(getWidth());

			vcols = (int)(getWidth() / (tileSize * scale)) + 1;
			vrows = (int)(getHeight() / (tileSize * scale)) + 1;

			//System.out.printf("visible %f total %f\n", vbar.getVisibleAmount(), vbar.getMax());
			// create imageview objects to cover screen
			if (oldw != getWidth() || oldh != getHeight() || graphics.getChildren().size() != vcols * vrows * map.getLayerCount()) {
				oldw = getWidth();
				oldh = getHeight();
				ObservableList<Node> c = graphics.getChildren();
				c.clear();

				for (int l = 0; l < map.getLayerCount(); l++) {
					for (int y = 0; y < vrows; y++) {
						for (int x = 0; x < vcols; x++) {
							ImageView iv = new ImageView();

							iv.relocate(x * tileSize, y * tileSize);
							c.add(iv);
						}
					}
				}

			}

			updateMapVisible();
			//updateThread();
		}
	}

	@Override
	public void changed(ObservableValue<? extends Number> ov, Number t, Number t1) {
		System.out.println("trnaslate changed");
	}

	public InputStream getInputStream(String jar, String path) throws IOException {
		JarInputStream jis = null;
		try {
			jis = new JarInputStream(new FileInputStream(jar));
			JarEntry je;

			while ((je = jis.getNextJarEntry()) != null) {
				System.out.println("je = " + je.getName());
				if (je.getName().equals(path))
					return jis;
			}
			jis.close();
			throw new FileNotFoundException(path);
		} catch (IOException ex) {
			if (jis != null)
				jis.close();
			throw ex;
		}
	}

	public void loadMap(DataManagerFX data, String name) throws IOException {
		this.data = data;

		try (InputStream is = getInputStream(data.getSource() + ".jar", "maps/" + name)) {
			setMap(TileMap.loadLayeredMap(is, name));
		}
	}

	public void loadExternalMap(DataManagerFX data, String path) throws IOException {
		this.data = data;

		//	map = TileMap.loadMap(new File(path), TileMap.FORMAT_SHORT);
		setMap(TileMap.loadLayered(new File(path)));
	}

	public MapSelectionModel getSelectionModel() {
		return selectionModel;
	}

	public TileMap getMap() {
		return map;
	}

	public void setMap(TileMap map) {
		this.map = map;
		//updateMap();
		vbar.setValue(0);
		hbar.setValue(0);
		requestLayout();
	}

	@Override
	protected double computePrefHeight(double d) {
		//if (map == null)
		return super.computePrefHeight(d);
		//return map.getRows() * 32;
	}

	@Override
	protected double computePrefWidth(double d) {
		//if (map == null)
		return super.computePrefWidth(d);
		//return map.getCols() * 32;
	}
	int oldx0 = -1;
	int oldy0 = -1;
	int oldvcols = -1;
	int oldvrows = -1;

	double getOriginX() {
		double v = hbar.getValue() * (hbar.getMax() + tileSize * scale - getWidth()) / hbar.getMax();

		v -= Math.IEEEremainder(v, 32);
		return v;
	}

	double getOriginY() {
		double v = vbar.getValue() * (vbar.getMax() + tileSize * scale - getHeight()) / vbar.getMax();
		v -= Math.IEEEremainder(v, 32);
		return v;
	}

	public int getTileX() {
		return (int)(getOriginX() / tileSize / scale);
	}

	public int getTileY() {
		return (int)(getOriginY() / tileSize / scale);
	}

	void updateMapVisible() {
		final ArrayList<Node> children = new ArrayList<>();
		final ArrayList<Node> upper = new ArrayList<>();
		int levelCount = map.getLayerCount();

		System.out.println("update visible map");

		// Animated tiles hack test
		//	final Rectangle2D[] anims = new Rectangle2D[2];
		//	anims[0] = data.createTile(305, 0, 0, tileSize, tileSize).getViewport();
		//	anims[1] = data.createTile(304, 0, 0, tileSize, tileSize).getViewport();
		//	final List<ImageView> animated = new ArrayList<>();
		int x0 = getTileX();
		int y0 = getTileY();

		//	y0 = Math.min(y0, map.getRows());
		//	y1 = Math.min(y1, map.getRows());
		//graphics.setTranslateX(-((long) getOriginX() & (tileSize - 1)) * scale);
		//graphics.setTranslateY(-((long) getOriginY() & (tileSize - 1)) * scale);
		// TODO: set position pixel or some shit
		//if (oldx0 == x0 && oldy0 == y0 && oldvcols == vcols && oldvrows == vrows)
		//	return;
		oldx0 = x0;
		oldy0 = y0;
		oldvcols = vcols;
		oldvrows = vrows;

		final HashMap<Integer, List<ImageView>> animated = new HashMap<>();

		for (int l = 0; l < map.getLayerCount(); l++) {
			for (int y = 0; y < vrows; y++) {
				int ty = y + y0;
				for (int x = 0; x < vcols; x++) {
					int tx = x + x0;
					ImageView iv = (ImageView)graphics.getChildren().get(x + y * vcols + l * vcols * vrows);

					int tileid = map.getTile(l, tx, ty);
					if (tileid != 0) {
						data.updateTile(iv, tileid, tileSize, tileSize);

						// FIXME: put in some animation controller code
						if (data.isAnimRoot(tileid)) {
							List<ImageView> list = animated.get(tileid);
							if (list == null) {
								list = new ArrayList<>();
								animated.put(tileid, list);
							}
							list.add(iv);
						}

						iv.setVisible(true);
					} else {
						iv.setVisible(false);
					}
				}
			}
		}

		// Check for meta data on map region
		List<Node> nodes = new ArrayList<Node>();

		boolean overlayOld = false;

		// HACK: check for old map shit
		if (overlayOld) {
			for (int y = 0; y < vrows; y++) {
				int ty = y + y0;
				for (int x = 0; x < vcols; x++) {
					int tx = x + x0;
					File f = new File(String.format("%s/defMoveActions/%d_%d", oldmap, tx, ty));

					if (f.exists()) {
						Rectangle r = new Rectangle(tileSize - 4, tileSize - 4);
						r.setFill(null);
						r.setStroke(Color.BLUE);
						r.setStrokeWidth(4);

						r.relocate(x * tileSize + 2, y * tileSize + 2);
						nodes.add(r);
					}
				}
			}
		}

		// highlight any location with stuff
		for (int y = 0; y < vrows; y++) {
			int ty = y + y0;
			for (int x = 0; x < vcols; x++) {
				int tx = x + x0;
				String a = map.aliasForLocation(tx, ty);
				String j = map.jumpAlias(tx, ty);
				String able = map.locationAbleScript(tx, ty);
				String action = map.locationActionScript(tx, ty);
				String visible = map.locationVisibleScript(tx, ty);

				if (a != null
					|| j != null
					|| able != null
					|| action != null
					|| visible != null) {
					Rectangle r = new Rectangle(tileSize - 4, tileSize - 4);
					r.setFill(null);
					r.setStroke(Color.RED);
					r.setStrokeWidth(2);

					r.relocate(x * tileSize + 2, y * tileSize + 2);
					nodes.add(r);
				}
				if (a != null) {
					Text t = new Text(a);

					t.relocate(x * tileSize, y * tileSize);
					nodes.add(t);
				}
			}
		}
		MapSelectionModel.Bounds selected = selectionModel.getSelected();
		if (selected != null) {
			int left = selected.left - getTileX();
			int top = selected.top - getTileY();
			System.out.printf("adding selected %d %d  %d %d\n", selected.left, selected.right, selected.top, selected.bottom);
			Rectangle r = new Rectangle((selected.right - selected.left) * tileSize - 4, (selected.bottom - selected.top) * tileSize - 4);
			r.setFill(Color.color(1, 1, 0, 0.25));
			r.setStroke(Color.ORANGE);
			r.setStrokeWidth(2);

			r.relocate(left * tileSize + 2, top * tileSize + 2);
			nodes.add(r);
		}

		alias.getChildren().setAll(nodes);

		// Load animation stuff
		for (Entry<Integer, List<ImageView>> e: animated.entrySet()) {
			int root = e.getKey();
			TileAnimator animator = animators.get(root);
			DataManagerFX.AnimSetFX set = data.getAnimSet(root);
			if (animator == null) {
				animator = new TileAnimator(e.getValue(), Duration.millis(set.rate * set.tiles.length), set.tiles);
				animators.put(root, animator);
				animator.setCycleCount(Animation.INDEFINITE);
				animator.play();
				System.out.println("create animator for " + root);
			} else {
				animator.setNodes(e.getValue());
				System.out.println("update animator for " + root);
			}
		}
	}

	/*
	 Future f;

	 void updateThread() {
	 int y0 = (int) (vbar.getValue() / tileSize / scale);
	 int x0 = (int) (hbar.getValue() / tileSize / scale);

	 if (f != null) {
	 if (f.cancel(false)) {
	 System.out.println("pending cancelled");
	 }
	 }

	 f = TZ.single.submit(new Update(x0, y0, 1, vcols, vrows));
	 }*/
	class Update implements Runnable {

		int x0, y0, xstep;
		int vcols, vrows;

		public Update(int x0, int y0, int xstep, int vcols, int vrows) {
			this.x0 = x0;
			this.y0 = y0;
			this.xstep = xstep;
			this.vcols = vcols;
			this.vrows = vrows;
		}

		@Override
		public void run() {
			System.out.println("start update thread");
			final ArrayList<Node> children = new ArrayList<>();
			for (int y = 0; y < vrows; y++) {
				int ty = y + y0;
				for (int x = 0; x < vcols; x++) {
					int tx = x + x0;

					int tileid = map.getTile(0, tx, ty);
					if (tileid != 0) {
						ImageView iv = data.createTile(tileid, x, y, tileSize, tileSize);
						children.add(iv);
					}
				}
			}

			Platform.runLater(new Runnable() {
				@Override
				public void run() {
					System.out.println("update ui");
					graphics.getChildren().setAll(children);
				}
			});

		}
	}

	void updateMap() {
		final ArrayList<Node> children = new ArrayList<>();
		final ArrayList<Node> upper = new ArrayList<>();
		int levelCount = map.getLayerCount();

		// Animated tiles hack test
		//	final Rectangle2D[] anims = new Rectangle2D[2];
		//	anims[0] = data.createTile(305, 0, 0, tileSize, tileSize).getViewport();
		//	anims[1] = data.createTile(304, 0, 0, tileSize, tileSize).getViewport();
		//	final List<ImageView> animated = new ArrayList<>();
		// Build whole map
		for (int l = 0; l < levelCount; l++) {
			for (int y = 0; y < map.getRows(); y++) {
				// Draw tiles first for whole row
				for (int x = 0; x < map.getCols(); x++) {
					int tileid = map.getTile(l, x, y);
					if (tileid != 0) {
						ImageView iv = data.createTile(tileid, x, y, tileSize, tileSize);
						children.add(iv);

						//			if (tileid == 305)
						//				animated.add(iv);
					}
				}

				if (children.size() > 16)
					break;

				// Now check for entities over this layer row
				/*
				 if (l == map.getGroundLevel()) {
				 for (int x = 0; x < map.cols; x++) {
				 Collection<Entity> ents = map.getEntities(x + map.offx, y + map.offy);
				 if (ents != null) {
				 for (Entity e : ents) {
				 drawEntity(e, map.offx, map.offy, children, upper);
				 }
				 }
				 }
				 }*/
			}
		}

		// Build sprites
		//for (Entity e : map.getEntities()) {
		//	drawEntity(map.offx, map.offy, children, e);
		//}
		Platform.runLater(new Runnable() {
			@Override
			public void run() {
				graphics.getChildren().setAll(children);
				graphics.getChildren().addAll(upper);

				//	System.out.println("animated node count = " + animated.size());
				//	if (animator == null) {
				//		animator = new TileAnimator(animated, Duration.seconds(0.25), anims);
				//		animator.setCycleCount(Animation.INDEFINITE);
				//		animator.play();
				//	} else
				//		animator.setNodes(animated);
			}
		});
	}
}
