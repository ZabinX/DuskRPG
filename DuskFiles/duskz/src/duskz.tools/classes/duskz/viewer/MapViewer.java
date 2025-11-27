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
package duskz.viewer;

import duskz.tool.fx.MapView;
import duskz.client.fx.DataManagerFX;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.BorderPane;
import javafx.stage.Stage;

/**
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class MapViewer extends Application {

	MapView mapView;
	DataManagerFX data;
	static final String tag = "mapviewer";

	@Override
	public void start(Stage stage) {
				BorderPane root = new BorderPane();

						root.setCenter(mapView = new MapView());

		Scene scene = new Scene(root, 768, 512);

		stage.setTitle("TileZ");
		stage.setScene(scene);
		stage.show();

		String datapath = "somedusk";
		String mappath = "game-2.7.3/shortmap";

		try {
			data = new DataManagerFX(datapath);
			data.load();
			//mapView.loadMap(data, mappath);
			mapView.loadExternalMap(data, mappath);
		//	locationEditor.setMap(mapView.map);

			/*
			mapView.selectionModel.boundsProperty.addListener(new ChangeListener<MapSelectionModel.Bounds>() {
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
			});*/
		} catch (IOException ex) {
			Logger.getLogger(tag).log(Level.SEVERE, null, ex);
		}
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
