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

import javafx.geometry.Orientation;
import javafx.scene.control.ListView;
import javafx.scene.control.ScrollBar;
import javafx.scene.control.cell.ComboBoxListCell;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.Pane;
import javafx.util.Callback;

/**
 * Layer of a map.  i.e. a set of tiles.
 *
 * Hmm, should this virtualise it's view?
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class MapLayer extends BorderPane {
	int[] mapArray;
	ScrollBar hscroll, vscroll;

	public MapLayer() {
		hscroll = new ScrollBar();
		vscroll = new ScrollBar();
		vscroll.setOrientation(Orientation.VERTICAL);

		setBottom(hscroll);
		setRight(vscroll);
	}


	void main() {
		ListView lv = null;
		lv.setCellFactory(new Callback() {

			@Override
			public Object call(Object p) {
				throw new UnsupportedOperationException("Not supported yet.");
			}
		});

	}

	class MapView extends Pane {
		// track/update visible portion?
	}


}
