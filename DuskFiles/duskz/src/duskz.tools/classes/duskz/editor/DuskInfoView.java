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

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.scene.control.TextArea;
import javafx.scene.control.TitledPane;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.VBox;

/**
 * Displays the old dusk format information
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class DuskInfoView extends BorderPane {

	String oldmap = "game-2.7.3";
	TextArea action;
	TextArea able;

	public DuskInfoView() {
		VBox vbox = new VBox();

		action = new TextArea();
		able = new TextArea();

		action.setEditable(false);
		able.setEditable(false);

		action.setPrefColumnCount(60);
		able.setPrefColumnCount(60);

		TitledPane move = new TitledPane("defMoveActions", action);
		TitledPane canMove = new TitledPane("defCanMoveScripts", able);
		vbox.getChildren().addAll(move, canMove);
		move.setAnimated(false);
		canMove.setAnimated(false);

		setCenter(vbox);
	}

	void set(TextArea text, File path) {
		if (path.exists()) {
			try {
				byte[] data = Files.readAllBytes(path.toPath());
				String string = new String(data, Charset.defaultCharset()).trim();

				if (!string.equals(""))
					text.setText(string);
				else
					text.setText("<empty file>");
			} catch (IOException ex) {
				Logger.getLogger(DuskInfoView.class.getName()).log(Level.SEVERE, null, ex);
			}
		} else {
			text.setText("<nothing to see here>");
		}
	}

	public void setLocation(int tx, int ty) {
		set(action, new File(String.format("%s/defMoveActions/%d_%d", oldmap, tx, ty)));
		set(able, new File(String.format("%s/defCanMoveScripts/%d_%d", oldmap, tx, ty)));
	}
}
