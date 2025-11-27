/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2000 Tom Weingarten <captaint@home.com>
 * Copyright (C) 2013 Michael Zucchi <notzed@gmail.com>
 *
 * DuskZ is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * DuskZ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with DuskZ; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
package duskz.client.fx;

import duskz.client.Bookmarks;
import duskz.client.ClientMap;
import duskz.client.Direction;
import duskz.client.Dusk;
import duskz.client.Entity;
import duskz.client.Equipment;
import duskz.client.GUI;
import duskz.client.Status;
import duskz.protocol.TransactionItem;
import duskz.protocol.Wearing;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.animation.Animation;
import javafx.animation.FadeTransition;
import javafx.animation.Interpolator;
import javafx.animation.ParallelTransition;
import javafx.animation.Transition;
import javafx.animation.TranslateTransition;
import javafx.application.Platform;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.HPos;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.geometry.Rectangle2D;
import javafx.geometry.VPos;
import javafx.scene.Node;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.control.MenuButton;
import javafx.scene.control.MenuItem;
import javafx.scene.control.PasswordField;
import javafx.scene.control.Separator;
import javafx.scene.control.Tab;
import javafx.scene.control.TabPane;
import javafx.scene.control.TextArea;
import javafx.scene.control.TextField;
import javafx.scene.effect.BoxBlur;
import javafx.scene.effect.DropShadow;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.input.KeyCode;
import static javafx.scene.input.KeyCode.DOWN;
import static javafx.scene.input.KeyCode.LEFT;
import static javafx.scene.input.KeyCode.RIGHT;
import static javafx.scene.input.KeyCode.UP;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Pane;
import javafx.scene.layout.Priority;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Text;
import javafx.util.Duration;

/**
 * This is the main JavaFX window.
 * <p>
 * It handles all the GUI related operations.
 * <p>
 * Prototype code herein, it needs to be split out into functional windows to
 * make it more manageable
 */
public class MainFrameFX extends StackPane implements GUI {

	Dusk game;
	//
	BorderPane main;
	StackPane layers;
	Pane graphics;
	Pane battle;
	BorderPane panel;
	VBox buttons;
	TextArea stats;
	TextArea log;
	TextField cmdLine;
	Label info;
	// just clone interface to start with
	MenuButton attack, action, look, get, drop;
	//
	Button connect, merchant, equipment, quit;
	/**
	 * **************
	 * Behaviour state
	 */
	/**
	 * "!command" allows one to execute a fixed operation after every move.
	 */
	private String postMove;

	public void setGame(Dusk game) {
		this.game = game;
	}

	public MainFrameFX() {
		layers = new StackPane();

		getChildren().add(main = new BorderPane());

		layers.getChildren().addAll(graphics = new Pane(), battle = new Pane());

		layers.setPrefSize(416, 416);
		main.setCenter(layers);

		//layers.setScaleX(2);
		//layers.setScaleY(2);
		panel = new BorderPane();
		panel.setMaxWidth(320);
		main.setRight(panel);

		buttons = new VBox();
		stats = new TextArea();
		panel.setTop(info = new Label());
		panel.setLeft(buttons);
		panel.setCenter(stats);

		buttons.getChildren().addAll(
			attack = new MenuButton("Attack"),
			action = new MenuButton("Action"),
			look = new MenuButton("Look"),
			get = new MenuButton("Get"),
			drop = new MenuButton("Drop"),
			connect = new Button("Connect"),
			merchant = new Button("Merchant"),
			equipment = new Button("Equipment"),
			quit = new Button("Quit"));

		attack.setMaxWidth(Double.MAX_VALUE);
		action.setMaxWidth(Double.MAX_VALUE);
		look.setMaxWidth(Double.MAX_VALUE);
		get.setMaxWidth(Double.MAX_VALUE);
		drop.setMaxWidth(Double.MAX_VALUE);
		connect.setMaxWidth(Double.MAX_VALUE);
		merchant.setMaxWidth(Double.MAX_VALUE);
		equipment.setMaxWidth(Double.MAX_VALUE);
		quit.setMaxWidth(Double.MAX_VALUE);

		BorderPane lower = new BorderPane();
		main.setBottom(lower);

		lower.setTop(cmdLine = new TextField());
		lower.setBottom(log = new TextArea());

		// Events
		cmdLine.setOnKeyPressed(keyPressed);
		layers.setOnKeyPressed(keyPressed);
		layers.setOnMouseClicked(mouseClicked);

		merchant.setOnAction(new EventHandler<javafx.event.ActionEvent>() {
			public void handle(javafx.event.ActionEvent t) {
				game.merchant();
			}
		});
		quit.setOnAction(new EventHandler<javafx.event.ActionEvent>() {
			public void handle(javafx.event.ActionEvent t) {
				game.quit();
			}
		});
		equipment.setOnAction(new EventHandler<javafx.event.ActionEvent>() {
			public void handle(javafx.event.ActionEvent t) {
				game.equipment();
			}
		});
		connect.setOnAction(new EventHandler<javafx.event.ActionEvent>() {
			public void handle(javafx.event.ActionEvent t) {
				//userconnect();
			}
		});
	}
	Random rand = new Random();

	public void damageEntity(Entity e, double direction, double x, double y, int delta, String what) {
		final Label node = new Label(String.format("%s %+d", what, delta));

		if (delta <= 0) {
			node.setId("damage-bubble");
		} else {
			node.setId("health-bubble");
		}
		node.relocate(x, y);

		Duration dur = Duration.millis(1500);
		// Fade out
		FadeTransition fade = new FadeTransition(dur, node);
		fade.setInterpolator(Interpolator.EASE_IN);
		fade.setFromValue(1);
		fade.setToValue(0);
		fade.setOnFinished(new EventHandler<ActionEvent>() {
			@Override
			public void handle(ActionEvent t) {
				battle.getChildren().remove(node);
			}
		});

		// animate randomly away from centre
		double a = rand.nextDouble() * Math.PI * 0.75 + direction - Math.PI * 0.375;

		//a = direction;
		double radius = 32;
		double sx = Math.cos(a) * radius / 2;
		double sy = Math.sin(a) * radius / 2;
		double ex = Math.cos(a) * radius + sx;
		double ey = Math.sin(a) * radius + sy;

		TranslateTransition move = new TranslateTransition(dur, node);
		move.setInterpolator(Interpolator.EASE_OUT);
		move.setFromX(sx);
		move.setFromY(sy);
		move.setToX(ex);
		move.setToY(ey);

		final Transition t = new ParallelTransition(fade, move);

		// Quick and dirty 'damage' popup
		Platform.runLater(new Runnable() {
			@Override
			public void run() {
				battle.getChildren().add(node);

				t.play();
			}
		});
	}
	Bookmarks bm;
	GridPane loginPane;
	ListView<Bookmarks.Bookmark> marks;
	TextField host;
	TextField port;
	TextField user;
	TextField pass;

	public void showLogin() {
		if (loginPane != null) {
			return;
		}

		loginPane = new GridPane();
		loginPane.setId("login-window");
		loginPane.setPrefSize(320, 200);
		loginPane.setMaxSize(500, 300);
		StackPane.setAlignment(loginPane, Pos.CENTER);

		bm = new Bookmarks();
		try {
			bm.load("bookmarks");
		} catch (FileNotFoundException x) {
		} catch (IOException ex) {
			Logger.getLogger(MainFrameFX.class.getName()).log(Level.SEVERE, null, ex);
		}

		marks = new ListView<>();

		marks.getItems().setAll(bm.getBookmarks());
		Label l;
		Insets li = new Insets(4, 8, 4, 8);
		loginPane.add(marks, 0, 0, 1, 7);

		loginPane.add(l = new Label("Host"), 1, 0);
		GridPane.setMargin(l, li);
		loginPane.add(host = new TextField("localhost"), 2, 0);
		loginPane.add(l = new Label("Port"), 1, 1);
		GridPane.setMargin(l, li);
		loginPane.add(port = new TextField("7474"), 2, 1);

		GridPane.setHgrow(host, Priority.ALWAYS);
		GridPane.setHgrow(port, Priority.ALWAYS);

		Separator empty = new Separator();
		GridPane.setVgrow(empty, Priority.ALWAYS);
		loginPane.add(empty, 1, 2, 2, 1);

		HBox hbox;
		loginPane.add(hbox = new HBox(), 1, 3, 2, 1);
		hbox.setAlignment(Pos.CENTER);
		//GridPane.setHalignment(hbox, HPos.CENTER);
		Button add = new Button("Add");
		Button remove = new Button("Remove");

		hbox.getChildren().addAll(add, remove);

		loginPane.add(l = new Label("User"), 1, 4);
		GridPane.setMargin(l, li);
		loginPane.add(user = new TextField(), 2, 4);
		loginPane.add(l = new Label("Pass"), 1, 5);
		GridPane.setMargin(l, li);
		loginPane.add(pass = new PasswordField(), 2, 5);

		Button login = new Button("Connect");

		GridPane.setValignment(login, VPos.BOTTOM);
		GridPane.setHalignment(login, HPos.CENTER);
		loginPane.add(login, 1, 6, 2, 1);

		GridPane.setVgrow(hbox, Priority.NEVER);
		GridPane.setVgrow(login, Priority.NEVER);

		bm.setBookmarks(marks.getItems());

		marks.getSelectionModel().selectedItemProperty().addListener(new ChangeListener<Bookmarks.Bookmark>() {
			public void changed(ObservableValue<? extends Bookmarks.Bookmark> ov, Bookmarks.Bookmark t, Bookmarks.Bookmark t1) {
				host.setText(t1.host);
				port.setText(Integer.toString(t1.port));
			}
		});

		add.setOnAction(new EventHandler<ActionEvent>() {
			public void handle(ActionEvent t) {
				try {
					marks.getItems().add(new Bookmarks.Bookmark(host.getText(), Integer.valueOf(port.getText())));
					bm.save("bookmarks");
				} catch (NumberFormatException x) {
				} catch (IOException x) {
				}
			}
		});

		remove.setOnAction(new EventHandler<ActionEvent>() {
			public void handle(ActionEvent t) {
				int i = marks.getSelectionModel().getSelectedIndex();
				try {

					if (i != -1) {
						marks.getItems().remove(i);
						bm.save("bookmarks");
					}
				} catch (IOException ex) {
					Logger.getLogger(MainFrameFX.class.getName()).log(Level.SEVERE, null, ex);
				}
			}
		});

		login.setOnAction(new EventHandler<ActionEvent>() {
			public void handle(ActionEvent t) {
				System.out.println("logging in!");
				game.connect(host.getText(), Integer.valueOf(port.getText()), user.getText(), pass.getText());
			}
		});

		loginPane.setOpacity(0);
		getChildren().add(loginPane);

		FadeTransition anim = new FadeTransition(Duration.millis(250), loginPane);
		anim.setFromValue(0);
		anim.setToValue(1);
		anim.play();
	}

	public void loginFailed() {
		// display somewhere?
	}

	public void loginOk() {
		if (loginPane != null) {
			closeWindow(loginPane);
			loginPane = null;
		}
	}

	void closeWindow(final Pane window) {
		Platform.runLater(new Runnable() {
			public void run() {
				main.setEffect(null);
				if (true) {
					final FadeTransition anim = new FadeTransition(Duration.millis(250), window);

					anim.setFromValue(1);
					anim.setToValue(0);
					anim.setOnFinished(new EventHandler<ActionEvent>() {
						public void handle(ActionEvent t) {
							getChildren().remove(anim.getNode());
						}
					});
					anim.play();
				} else {
					getChildren().remove(window);
				}
			}
		});
	}
	GridPane racePane;
	ListView<String> raceList;

	public void chooseRace(String prompt, List<String> races) {
		if (racePane != null) {
			return;
		}

		racePane = new GridPane();
		racePane.setId("race-window");
		racePane.setMaxSize(500, 300);
		StackPane.setAlignment(racePane, Pos.CENTER);

		raceList = new ListView<>();
		raceList.getItems().setAll(races);

		racePane.add(new Label(prompt), 0, 0);

		racePane.add(raceList, 0, 1);

		Button ok = new Button("Ok");

		racePane.add(ok, 0, 2);

		ok.setOnAction(new EventHandler<ActionEvent>() {
			public void handle(ActionEvent t) {
				String item = raceList.getSelectionModel().getSelectedItem();
				if (item != null) {
					getChildren().remove(racePane);
					racePane = null;
					game.chooseRace(item);
				}
			}
		});

		Platform.runLater(new Runnable() {
			public void run() {
				getChildren().add(racePane);
			}
		});

	}
	/**
	 * Need to know about merchant changes so track them here.
	 */
	VBox shopPane;
	TransactionPane buyPane;
	TransactionPane sellPane;

	public void setBuyList(final List<TransactionItem> buyList) {
		Platform.runLater(new Runnable() {
			public void run() {
				if (shopPane != null) {
					buyPane.setItems(buyList);
				}
				merchant.setDisable(false);
			}
		});
	}

	public void setSellList(final List<TransactionItem> sellList) {
		Platform.runLater(new Runnable() {
			public void run() {
				if (shopPane != null) {
					sellPane.setItems(sellList);
				}
				merchant.setDisable(false);
			}
		});
	}

	@Override
	public void exitShop() {
		merchant.setDisable(!false);
		if (shopPane != null) {
			closeWindow(shopPane);
			shopPane = null;
		}
	}

	@Override
	public void enterShop(String title, final List<TransactionItem> buyList, final List<TransactionItem> sellList) {
		if (shopPane != null) {
			// update items?
			Platform.runLater(new Runnable() {
				public void run() {
					buyPane.setItems(buyList);
					sellPane.setItems(sellList);
				}
			});

			return;
		}

		shopPane = new VBox();
		shopPane.setId("shop-window");
		shopPane.setMaxSize(600, 400);
		StackPane.setAlignment(shopPane, Pos.CENTER);

		TabPane tabs = new TabPane();

		Tab tab = new Tab("Buy");
		Button b;

		buyPane = new TransactionPane(b = new Button("Buy"));
		tab.setContent(buyPane);
		tab.setClosable(false);
		tabs.getTabs().add(tab);

		b.setOnAction(new EventHandler<ActionEvent>() {
			public void handle(ActionEvent t) {
				game.buy(buyPane.getItem(), buyPane.getQuantity());
			}
		});

		tab = new Tab("Sell");
		sellPane = new TransactionPane(b = new Button("Sell"));
		tab.setContent(sellPane);
		tab.setClosable(false);
		tabs.getTabs().add(tab);

		b.setOnAction(new EventHandler<ActionEvent>() {
			public void handle(ActionEvent t) {
				game.sell(sellPane.getItem(), sellPane.getQuantity());
			}
		});

		Label head = new Label(title);
		head.setId("window-title");
		head.setAlignment(Pos.BASELINE_LEFT);

		buyPane.setItems(buyList);
		sellPane.setItems(sellList);

		Button tail = new Button("Leave");

		tail.setOnAction(new EventHandler<ActionEvent>() {
			public void handle(ActionEvent t) {
				closeWindow(shopPane);
				shopPane = null;
			}
		});

		shopPane.setAlignment(Pos.CENTER);
		shopPane.getChildren().addAll(head, tabs, tail);

		Platform.runLater(new Runnable() {
			public void run() {
				main.setEffect(new BoxBlur(3, 3, 2));
				getChildren().add(shopPane);
			}
		});
	}
	VBox equipWindow;
	EquipmentPane equip;

	@Override
	public void manageEquipment(Equipment worn) {
		if (equipWindow != null) {
			equip.setEquipment(worn);
			return;
		}

		equipWindow = new VBox();
		equipWindow.setId("shop-window");
		equipWindow.setMaxSize(600, 400);
		StackPane.setAlignment(equipWindow, Pos.CENTER);

		equip = new EquipmentPane();

		Label head = new Label("Equipment");
		head.setId("window-title");
		head.setAlignment(Pos.BASELINE_LEFT);

		equip.setEquipment(worn);

		Button tail = new Button("Return");

		tail.setOnAction(new EventHandler<ActionEvent>() {
			public void handle(ActionEvent t) {
				closeWindow(equipWindow);
				equipWindow = null;
			}
		});

		equipWindow.setAlignment(Pos.CENTER);
		equipWindow.getChildren().addAll(head, equip, tail);

		equip.wear.setOnAction(new EventHandler<ActionEvent>() {
			public void handle(ActionEvent t) {
				game.wear(equip.getItem().name);
			}
		});
		equip.unwear.setOnAction(new EventHandler<ActionEvent>() {
			public void handle(ActionEvent t) {
				EquipmentPane.ItemInfo ii = equip.getItem();
				game.unwear(Wearing.wornNames[ii.wornAt]);
			}
		});
		equip.drop.setOnAction(new EventHandler<ActionEvent>() {
			public void handle(ActionEvent t) {
				game.drop(equip.getItem().name);
			}
		});

		Platform.runLater(new Runnable() {
			public void run() {
				main.setEffect(new BoxBlur(3, 3, 2));
				getChildren().add(equipWindow);
			}
		});

	}

	/**
	 * For closing poup windows that can be closed
	 */
	public void exitWindow() {
		if (shopPane != null) {
			closeWindow(shopPane);
			shopPane = null;
		}
	}

	@Override
	public void visitFile(String file, String text, boolean canSave) {
		throw new UnsupportedOperationException("Not supported yet.");
		// FIXME: implement edit text,
		// FIXME: sent using: appParent.outstream.writeBytes("submit "+name+"\n");
		//                    appParent.outstream.writeBytes(txtEdit.getText()+"\n--EOF--\n");
	}
	//Accept key input
	EventHandler<javafx.scene.input.KeyEvent> keyPressed = new EventHandler<javafx.scene.input.KeyEvent>() {
		@Override
		public void handle(javafx.scene.input.KeyEvent evt) {
			if (!game.isConnected()) {
				return;
			}

			KeyCode nkey = evt.getCode();
			if (nkey == KeyCode.ENTER) {
				String cmd = cmdLine.getText();
				//Thanks to Joe Alloway for this addition
				if (cmd.startsWith("!")) {
					if (cmd.length() == 1) {
						postMove = null;
					} else {
						postMove = cmd.substring(1);
					}
				} else {
					game.command(cmd);
				}
				//End contribution by Joe Alloway
				cmdLine.setText("");
			}
			if (game.isLoaded()) {
				Direction dir = null;
				switch (nkey) {
				case UP:
					dir = Direction.North;
					break;
				case DOWN:
					dir = Direction.South;
					break;
				case LEFT:
					dir = Direction.West;
					break;
				case RIGHT:
					dir = Direction.East;
					break;
				}
				if (dir != null) {
					game.move(dir);
					if (postMove != null)
						game.command(postMove);
				}
			}
		}
	};
	EventHandler<javafx.scene.input.MouseEvent> mouseClicked = new EventHandler<javafx.scene.input.MouseEvent>() {
		@Override
		public void handle(javafx.scene.input.MouseEvent evt) {
			System.out.println("Mouse clicked: " + evt);
			if (!game.isConnected() || !game.isLoaded()) {
				return;
			}

			/**
			 * Map coordinates to screen-relative tiles and pass to game.
			 */
			int x = (int)evt.getX();
			int y = (int)evt.getY();
			int destX = (x / game.getTileSize()) + game.getMapOffsetX();
			int destY = (y / game.getTileSize()) + game.getMapOffsetY();

			game.moveTo(destX, destY);
			cmdLine.requestFocus();
		}
	};
	EventHandler<ActionEvent> attackHandler = new EventHandler<ActionEvent>() {
		public void handle(ActionEvent t) {
			game.attack((Entity)((MenuItem)t.getSource()).getUserData());
		}
	};
	EventHandler<ActionEvent> lookHandler = new EventHandler<ActionEvent>() {
		public void handle(ActionEvent t) {
			game.look((Entity)((MenuItem)t.getSource()).getUserData());
		}
	};
	EventHandler<ActionEvent> actionHandler = new EventHandler<ActionEvent>() {
		public void handle(ActionEvent t) {
			MenuItem mi = (MenuItem)t.getSource();
			game.command(mi.getText());
		}
	};
	EventHandler<ActionEvent> getHandler = new EventHandler<ActionEvent>() {
		public void handle(ActionEvent t) {
			game.take((Entity)((MenuItem)t.getSource()).getUserData());
		}
	};
	EventHandler<ActionEvent> dropHandler = new EventHandler<ActionEvent>() {
		public void handle(ActionEvent t) {
			game.drop(((MenuItem)t.getSource()).getText());
		}
	};

	@Override
	public void logClear() {
		Platform.runLater(new Runnable() {
			public void run() {
				log.setText("");
			}
		});
	}

	@Override
	public GUI log(String txt, Object... args) {
		final String s = String.format(txt, args);

		Platform.runLater(new Runnable() {
			public void run() {

				// Truncate history
				if (log.textProperty().getValueSafe().length() > 8000) {
					log.deleteText(0, 4000);
				}

				log.appendText(s);
			}
		});
		return this;
	}

	void setStringMenu(final MenuButton menu, List<String> list, EventHandler<ActionEvent> handle) {
		final List<MenuItem> items = new ArrayList<>();

		for (String e: list) {
			MenuItem mi = new MenuItem(e);
			mi.setOnAction(handle);
			items.add(mi);
		}
		Platform.runLater(new Runnable() {
			@Override
			public void run() {
				menu.getItems().setAll(items);
			}
		});
	}

	void setEntityMenu(final MenuButton menu, List<Entity> list, EventHandler<ActionEvent> handle) {
		final List<MenuItem> items = new ArrayList<>();

		for (Entity e: list) {
			MenuItem mi = new MenuItem(e.getIndexedName());
			mi.setUserData(e);
			mi.setOnAction(handle);
			items.add(mi);
		}
		Platform.runLater(new Runnable() {
			public void run() {
				menu.getItems().setAll(items);
			}
		});
	}

	@Override
	public void setDropList(List<String> drops) {
		setStringMenu(drop, drops, dropHandler);
	}

	@Override
	public void setAttackList(List<Entity> list) {
		setEntityMenu(attack, list, attackHandler);
	}

	@Override
	public void setTakeList(List<Entity> list) {
		setEntityMenu(get, list, getHandler);
	}

	@Override
	public void setLookList(List<Entity> list) {
		setEntityMenu(look, list, lookHandler);
	}

	@Override
	public void setActionList(List<String> list) {
		setStringMenu(action, list, actionHandler);
	}

	@Override
	public void setStats(final String stats) {
		Platform.runLater(new Runnable() {
			public void run() {
				MainFrameFX.this.stats.setText(stats);
			}
		});
	}

	@Override
	public void setStatus(final Status status) {
		Platform.runLater(new Runnable() {
			public void run() {
				info.setText(status.toString());
			}
		});
	}

	@Override
	public void setEquipment(final Equipment worn) {
		Platform.runLater(new Runnable() {
			public void run() {
				if (equipWindow != null) {
					equip.setEquipment(worn);
				}
			}
		});
	}
	DataManagerFX data;
	int tileSize = 32;
	Image playerImage;
	int playerSize;
	Image spriteImage;
	int spriteSize;

	@Override
	public void setImages(String rc) {
		try {
			data = new DataManagerFX(rc);
			data.load();
		} catch (IOException ex) {
			Logger.getLogger(MainFrameFX.class.getName()).log(Level.SEVERE, null, ex);
		}
	}
	HashMap<Integer, TileAnimator> animators = new HashMap<>();

	@Override
	public void updateMap(ClientMap map) {
		// Note this has map synchronized already

		// Since we get a whole update for the map every time, there isn't much we
		// can practically do apart from simply build a whole new page to display.
		// However ... this is jused for every type of changed thing, and that
		// isn't neccessary.
		System.out.println("update map");
		if (data == null) {
			//if (tileImage == null) {
			System.out.println("Map not ready yet");
			return;
		}

		final ArrayList<Node> children = new ArrayList<>();
		final ArrayList<Node> upper = new ArrayList<>();
		int levelCount = map.getLevelCount();

		// Animated tiles stuff
		final HashMap<Integer, List<ImageView>> animated = new HashMap<>();

		// Build map
		for (int l = 0; l < levelCount; l++) {
			for (int y = 0; y < map.rows; y++) {
				// Draw tiles first for whole row
				for (int x = 0; x < map.cols; x++) {
					int tileid = map.getTile(l, x, y);
					if (tileid != 0) {
						ImageView iv = data.createTile(tileid, x, y, tileSize, tileSize);
						children.add(iv);

						if (data.isAnimRoot(tileid)) {
							List<ImageView> list = animated.get(tileid);
							if (list == null) {
								list = new ArrayList<>();
								animated.put(tileid, list);
							}
							list.add(iv);
						}
					}
				}

				// Now check for entities over this layer row
				if (l == map.getGroundLevel()) {
					for (int x = 0; x < map.cols; x++) {
						Collection<Entity> ents = map.getEntities(x + map.offx, y + map.offy);
						if (ents != null) {
							for (Entity e: ents) {
								drawEntity(e, map.offx, map.offy, children, upper);
							}
						}
					}
				}
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

				for (Map.Entry<Integer, List<ImageView>> e: animated.entrySet()) {
					int root = e.getKey();
					TileAnimator animator = animators.get(root);
					DataManagerFX.AnimSetFX set = data.getAnimSet(root);
					if (animator == null) {
						animator = new TileAnimator(e.getValue(), Duration.seconds(0.25), set.tiles);
						animators.put(root, animator);
						animator.setCycleCount(Animation.INDEFINITE);
						animator.play();
					} else {
						animator.setNodes(e.getValue());
					}
					System.out.printf("Set anim root %d\n", root);
				}
			}
		});
	}
	DropShadow textShadow = new DropShadow(3, 2, 2, Color.BLACK);

	// HACK: upper is used for 'upper layer', stuff drawn afterwards
	void drawEntity(Entity e, int offx, int offy, ArrayList<Node> children, ArrayList<Node> upper) {
		double x = e.locx - offx;
		double y = e.locy - offy;

		// TODO: just make it an entity node
		if (e.intStep == -1) {
			ImageView iv = data.createSprite("sprites", e.intImage, e.locx - offx, e.locy - offy, tileSize, tileSize);
			children.add(iv);

		} else {
			ImageView iv = data.createSprite("players", e.intImage * 8 + e.intStep,  e.locx - offx, e.locy - offy, tileSize, tileSize);
			children.add(iv);
		}
		// FIXME: intnum not used anymore
		if (e.intNum == 0) {
			Text t = new Text(e.getTitle());
			t.setId("entity-label");
			t.relocate((x * tileSize) + tileSize / 2 - t.getLayoutBounds().getWidth() / 2, ((y + 1) * tileSize));
			upper.add(t);
		} else {
			Text t = new Text(e.intNum + "." + e.name);
			t.setId("entity-label");
			t.relocate((x * tileSize) + tileSize / 2 - t.getLayoutBounds().getWidth() / 2, ((y + 1) * tileSize));
			upper.add(t);
		}
		//Draw flag
		if (e.flags != 0) {
			Rectangle r = new Rectangle(1, 1, tileSize - 2, tileSize - 2);
			if ((e.flags & 3) == 1) {
				r.setStroke(Color.GREEN);
			} else if ((e.flags & 3) == 2) {
				r.setStroke(Color.RED);
			}
			r.setStrokeWidth(2);
			r.setArcHeight(12);
			r.setArcWidth(12);
			r.setFill(null);
			r.relocate(x * tileSize, y * tileSize);
			upper.add(r);
		}
	}
}
