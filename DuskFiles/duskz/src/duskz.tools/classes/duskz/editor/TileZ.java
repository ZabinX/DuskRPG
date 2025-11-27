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

import duskz.client.fx.DataManagerFX;
import duskz.map.TileMap;
import duskz.tool.fx.MapSelectionModel;
import duskz.tool.fx.MapView;
import java.io.DataInputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.zip.GZIPInputStream;
import javafx.application.Application;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.scene.Scene;
import javafx.scene.control.ChoiceBox;
import javafx.scene.control.ToolBar;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

/**
 * Tool to view duskz maps, maybe more?
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class TileZ extends Application {

	MapView mapView;
	LocationEditor locationEditor;
	DuskInfoView oldInfo;
	DataManagerFX data;
	Path game = Path.of("game");
	String rcName = "nowhere";

	@Override
	public void start(Stage stage) throws IOException {
		BorderPane root = new BorderPane();

		VBox left = new VBox();
		ToolBar toolbar = new ToolBar();

		left.getChildren().addAll(
			locationEditor = new LocationEditor(),
			oldInfo = new DuskInfoView());

		ChoiceBox<Path> maps = new ChoiceBox<>(findMaps(game));

		toolbar.getItems().add(maps);

		root.setTop(toolbar);
		root.setCenter(mapView = new MapView());
		root.setLeft(left);

		Scene scene = new Scene(root, 1280, 768);

		scene.getStylesheets().add(TileZ.class.getResource("style.css").toString());
		stage.setTitle("TileZ");
		stage.setScene(scene);
		stage.show();

		maps.getSelectionModel().selectedItemProperty().addListener((ObservableValue<? extends Path> o, Path ov, Path nv) -> {
			loadMap(nv);
		});

		mapView.getSelectionModel().boundsProperty().addListener(new ChangeListener<MapSelectionModel.Bounds>() {
			@Override
			public void changed(ObservableValue<? extends MapSelectionModel.Bounds> ov, MapSelectionModel.Bounds t, MapSelectionModel.Bounds t1) {
				if (t1 != null) {
					locationEditor.setTileX(t1.left);
					locationEditor.setTileY(t1.top);
					oldInfo.setLocation(t1.left, t1.top);
				} else {
					locationEditor.setTileX(-1);
					locationEditor.setTileY(-1);
				}
			}
		});

		try {
			data = new DataManagerFX(rcName);
			data.load();
			maps.getSelectionModel().select(0);
		} catch (IOException ex) {
			Logger.getLogger(TileZ.class.getName()).log(Level.SEVERE, null, ex);
		}
	}

	@Override
	public void stop() throws Exception {
		super.stop();
		TZ.shutdown();
	}

	void loadMap(Path map) {
		try {
			if (map != null) {
				mapView.loadExternalMap(data, map.toString());
				locationEditor.setMap(mapView.getMap());
			} else {
				TileMap tm = new TileMap("empty", 0, 0);
				mapView.setMap(tm);
				locationEditor.setMap(tm);
			}
		} catch (IOException ex) {
			ex.printStackTrace();
		}
	}

	ObservableList<Path> findMaps(Path game) throws IOException {
		return FXCollections.observableArrayList(
			Files.list(game.resolve("defMaps"))
				.filter(p -> {
					// TODO: check if gzip, etc.
					try (DataInputStream dis = new DataInputStream(new GZIPInputStream(new FileInputStream(p.toFile())))) {
						int magic = dis.readInt();
						int version = dis.readInt();
						System.out.printf("magic: %08x\n", magic);

						return magic == TileMap.MAGIC_LAYERED;
					} catch (IOException x) {
						return false;
					}
				})
				.toList());
	}

	/**
	 * The main() method is ignored in correctly deployed JavaFX
	 * application. main() serves only as fallback in case the
	 * application can not be launched through deployment artifacts,
	 * e.g., in IDEs with limited FX support. NetBeans ignores main().
	 *
	 * @param args the command line arguments
	 */
	public static void main(String[] args) {
		launch(args);
	}
}
