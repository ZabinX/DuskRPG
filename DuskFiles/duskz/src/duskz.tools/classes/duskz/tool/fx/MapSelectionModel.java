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

import javafx.beans.property.ObjectProperty;
import javafx.beans.property.SimpleObjectProperty;

/**
 * Region selection
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class MapSelectionModel {

	ObjectProperty<Bounds> boundsProperty = new SimpleObjectProperty<>();

	// TODO: move this to where TileMap lives
	public static class Bounds {

		public int left, right, top, bottom;

		public Bounds() {
		}

		public Bounds(int left, int right, int top, int bottom) {
			this.left = left;
			this.right = right;
			this.top = top;
			this.bottom = bottom;
		}

		public int getLeft() {
			return left;
		}

		public int getRight() {
			return right;
		}

		public int getTop() {
			return top;
		}

		public int getBottom() {
			return bottom;
		}
	}

	public MapSelectionModel() {
	}

	public void setSelected(int tx, int ty) {
		boundsProperty.set(new Bounds(tx, tx + 1, ty, ty + 1));
	}

	public Bounds getSelected() {
		return boundsProperty.get();
	}

	public ObjectProperty<Bounds> boundsProperty() {
		return boundsProperty;
	}
}
