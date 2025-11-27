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
package duskz.editor;

import duskz.map.TileMap;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.beans.property.IntegerProperty;
import javafx.beans.property.SimpleIntegerProperty;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.control.Button;
import javafx.scene.control.TextArea;
import javafx.scene.control.TextField;
import javafx.scene.control.TitledPane;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;

/**
 * Edit various shit at a location.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class LocationEditor extends BorderPane implements ChangeListener<Number> {

	String game = "game";
	int tx, ty;
	TileMap map;
	TextField alias;
	TextField jumpto;
	TextField able;
	TextField action;
	TextField visible;
	TextArea ableScript;
	TextArea actionScript;
	TextArea visibleScript;
	IntegerProperty tileX = new SimpleIntegerProperty();
	IntegerProperty tileY = new SimpleIntegerProperty();

	public LocationEditor() {
		GridPane main = new GridPane();

		alias = new TextField();
		jumpto = new TextField();
		able = new TextField();
		action = new TextField();
		visible = new TextField();

		ableScript = new TextArea();
		actionScript = new TextArea();
		visibleScript = new TextArea();

		ableScript.setPrefColumnCount(60);
		actionScript.setPrefColumnCount(60);
		visibleScript.setPrefColumnCount(60);

		Button aliasb, gotob, ableb, visibleb, actionb;
		int r = 0;

		TextField location;
		TitledPane tp;
		main.add(new Button("Location"), 0, r);
		main.add(location = new TextField(), 1, r++);
		main.add(aliasb = new Button("Alias"), 0, r);
		main.add(alias, 1, r++);
		main.add(gotob = new Button("Goto"), 0, r);
		main.add(jumpto, 1, r++);
		main.add(actionb = new Button("Action"), 0, r);
		main.add(action, 1, r++);
		main.add(tp = new TitledPane("Action Script", actionScript), 0, r++, 2, 1);
		tp.setAnimated(false);
		main.add(ableb = new Button("Able"), 0, r);
		main.add(able, 1, r++);
		main.add(tp = new TitledPane("Able Script", ableScript), 0, r++, 2, 1);
		tp.setAnimated(false);
		main.add(visibleb = new Button("Visible"), 0, r);
		main.add(visible, 1, r++);
		main.add(tp = new TitledPane("Visible Script", visibleScript), 0, r++, 2, 1);
		tp.setAnimated(false);

		location.textProperty().bind(tileX.asString().concat(", ").concat(tileY.asString()));

		aliasb.setOnAction(new EventHandler<ActionEvent>() {
			public void handle(ActionEvent t) {
				// save the alias
				String s = alias.getText();

				if (s == null || (s = s.trim()).equals("")) {
					// Clear it
					map.setJumpAlias(tx, ty, null);
				} else {
					map.setJumpAlias(tx, ty, s);
				}
			}
		});
		gotob.setOnAction(new EventHandler<ActionEvent>() {
			public void handle(ActionEvent t) {
				// save the alias
				String s = jumpto.getText();

				if (s == null || (s = s.trim()).equals("")) {
					// Clear it
					map.setAlias(tx, ty, null);
				} else {
					map.setAlias(tx, ty, s);
				}
			}
		});
		ableb.setOnAction(new EventHandler<ActionEvent>() {
			@Override
			public void handle(ActionEvent t) {
				editScript("onLocationAble", able.getText());
			}
		});
		visibleb.setOnAction(new EventHandler<ActionEvent>() {
			@Override
			public void handle(ActionEvent t) {
				editScript("onLocationVisible", visible.getText());
			}
		});
		actionb.setOnAction(new EventHandler<ActionEvent>() {
			@Override
			public void handle(ActionEvent t) {
				editScript("onLocationAction", action.getText());
			}
		});

		setCenter(main);

		tileX.addListener(this);
		tileY.addListener(this);
	}

	void editScript(String type, String name) {
		if (name == null)
			return;

		name = name.trim();
		if (name.equals(""))
			return;

		try {
			TextEditor te = new TextEditor();
			te.setPath(Paths.get(game, type, name));
			te.show();
		} catch (IOException ex) {
			Logger.getLogger(LocationEditor.class.getName()).log(Level.SEVERE, null, ex);
		}
		/*
		 final Stage win = new Stage();
		 HBox buttons = new HBox();
		 BorderPane root = new BorderPane();
		 TextArea text = new TextArea();
		 text.setPrefRowCount(30);
		 try {
		 byte[] bytes = Files.readAllBytes(Paths.get("/home/notzed/dusk/game", type, name));
		 String string = new String(bytes, Charset.defaultCharset());

		 text.setText(string);
		 } catch (IOException ex) {
		 Logger.getLogger(LocationEditor.class.getName()).log(Level.SEVERE, null, ex);
		 }

		 Button save, cancel;
		 buttons.getChildren().addAll(cancel = new Button("Cancel"),
		 save = new Button("Save"));

		 save.setOnAction(new EventHandler<ActionEvent>() {
		 @Override
		 public void handle(ActionEvent t) {
		 }
		 });

		 cancel.setOnAction(new EventHandler<ActionEvent>() {
		 @Override
		 public void handle(ActionEvent t) {
		 win.close();
		 }
		 });

		 root.setCenter(text);
		 root.setTop(buttons);
		 Scene scene = new Scene(root);

		 win.setScene(scene);

		 win.show();
		 * */
	}

	public void setMap(TileMap map) {
		this.map = map;
	}

	public int getTileX() {
		return tileX.get();
	}

	public int getTileY() {
		return tileY.get();
	}

	public void setTileX(int tx) {
		this.tx = tx;
		tileX.set(tx);
	}

	public void setTileY(int ty) {
		this.ty = ty;
		tileY.set(ty);
	}

	public IntegerProperty tileXProperty() {
		return tileX;
	}

	public IntegerProperty tileYProperty() {
		return tileY;
	}

	@Override
	public void changed(ObservableValue<? extends Number> ov, Number t, Number t1) {
		updateLocation();
	}

	void setContent(TextArea text, String type, String name) {
		if (name == null) {
			text.setText(null);
			return;
		}
		Path path = Paths.get(game, type, name);
		if (path.toFile().exists()) {
			try {
				text.setText(new String(Files.readAllBytes(path), Charset.defaultCharset()));
			} catch (IOException ex) {
				Logger.getLogger(LocationEditor.class.getName()).log(Level.SEVERE, null, ex);
			}
		} else {
			text.setText(null);
		}
	}

	void updateLocation() {
		int tx = getTileX();
		int ty = getTileY();

		System.out.printf("updating editor for : %d,%d '%s'\n", tx, ty, map.aliasForLocation(tx, ty));

		alias.setText(map.aliasForLocation(tx, ty));
		jumpto.setText(map.jumpAlias(tx, ty));
		able.setText(map.locationAbleScript(tx, ty));
		action.setText(map.locationActionScript(tx, ty));
		visible.setText(map.locationVisibleScript(tx, ty));

		setContent(visibleScript, "onLocationVisible", visible.getText());
		setContent(actionScript, "onLocationAction", action.getText());
		setContent(ableScript, "onLocationAble", able.getText());

	}
}
