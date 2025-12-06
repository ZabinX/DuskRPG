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
package duskz.client.fx;

import java.util.List;
import javafx.animation.Transition;
import javafx.geometry.Rectangle2D;
import javafx.scene.image.ImageView;
import javafx.util.Duration;

/**
 * Animates a set of tiles by switching the viewport on the texture.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class TileAnimator extends Transition {

	Rectangle2D[] viewports;
	List<ImageView> nodes;

	public TileAnimator(List<ImageView> nodes, Duration duration, Rectangle2D[] images) {
		setCycleDuration(duration);
		this.viewports = images;
		this.nodes = nodes;
	}

	public void setNodes(List<ImageView> nodes) {
		this.nodes = nodes;
	}

	@Override
	protected void interpolate(double d) {
		int index = Math.min(viewports.length - 1, (int) (d * viewports.length));

		for (ImageView node : nodes)
			node.setViewport(viewports[index]);
	}
}
