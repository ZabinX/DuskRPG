/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2013 Michael Zucchi <notzed@gmail.com>
 *
 * DuskZ is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DuskZ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with DuskZ.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Changes
 */
package duskz.client.fx;

import duskz.client.Dusk;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.input.KeyCode;
import javafx.scene.input.KeyCodeCombination;
import javafx.stage.Stage;

/**
 * Main application entry point for JavaFX frontend
 *
 * @author notzed
 */
public class DuskFX extends Application {

	MainFrameFX frame;
	Scene scene;
	Dusk game;

	@Override
	public void start(Stage stage) {
		try {
		frame = new MainFrameFX();
		game = new Dusk(frame);

		scene = new Scene(frame);
		stage.setScene(scene);

		scene.getAccelerators().put(new KeyCodeCombination(KeyCode.ESCAPE), new Runnable() {
			@Override
			public void run() {
				frame.exitWindow();
			}
		});

		stage.getScene().getStylesheets().add(DuskFX.class.getResource("style.css").toString());
		stage.setTitle("DuskZ JavaFX");
		stage.show();

		game.startUp();
		} catch (Throwable t) {
			t.printStackTrace();
			System.exit(1);
		}
	}

	@Override
	public void stop() throws Exception {
		game.quit();
		super.stop();
	}

	/**
	 * The main() method is ignored in correctly deployed JavaFX application.
	 *
	 * @param args the command line arguments
	 */
	public static void main(String[] args) {
		launch(args);
	}
}
