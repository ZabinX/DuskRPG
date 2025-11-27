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

import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.nio.file.StandardOpenOption;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.TextArea;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;

/**
 * Very basic text editor window.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class TextEditor extends Stage {

	TextArea text;
	Path path;

	public TextEditor() {
		HBox buttons = new HBox();
		BorderPane root = new BorderPane();
		text = new TextArea();
		text.setPrefRowCount(30);
		Button save, cancel;
		buttons.getChildren().addAll(cancel = new Button("Cancel"),
				save = new Button("Save"));

		save.setOnAction(new EventHandler<ActionEvent>() {
			@Override
			public void handle(ActionEvent t) {
				try {
					save();
				} catch (IOException ex) {
					// TODO: show error somewhere
					Logger.getLogger(TextEditor.class.getName()).log(Level.SEVERE, null, ex);
				}
			}
		});

		cancel.setOnAction(new EventHandler<ActionEvent>() {
			@Override
			public void handle(ActionEvent t) {
				close();
			}
		});

		root.setCenter(text);
		root.setTop(buttons);
		Scene scene = new Scene(root);

		setScene(scene);
	}

	public void setPath(Path path) throws IOException {
		byte[] bytes = Files.readAllBytes(path);
		String string = new String(bytes, Charset.defaultCharset());

		this.path = path;
		text.setText(string);
	}

	public void save() throws IOException {
		Path tmp = path.resolveSibling(path.getFileName().toString() + "~");
		Files.write(tmp, text.getText().getBytes(), StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);
		Files.move(tmp, path, StandardCopyOption.ATOMIC_MOVE);
	}
}
