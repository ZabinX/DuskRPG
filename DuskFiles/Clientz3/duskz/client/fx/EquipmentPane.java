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

import duskz.client.Equipment;
import duskz.protocol.Wearing;
import java.util.ArrayList;
import java.util.List;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.geometry.Pos;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Priority;
import javafx.scene.layout.VBox;
import jfxtras.scene.control.ListSpinner;

/**
 * Pane for a list of equipment with detail area and controls.
 *
 * @author notzed
 */
public class EquipmentPane extends HBox {

	ListView<ItemInfo> list;
	Label detail;
	ListSpinner quantity;
	Button wear, unwear, drop;
	Equipment worn;

	public EquipmentPane() {
		setId("equipment-pane");

		VBox right = new VBox();

		HBox.setHgrow(right, Priority.ALWAYS);

		right.setAlignment(Pos.TOP_RIGHT);
		right.setFillWidth(true);

		list = new ListView<>();
		detail = new Label();
		quantity = new ListSpinner(1, 100);

		HBox hb;

		hb = new HBox();
		hb.setFillHeight(true);
		VBox.setVgrow(hb, Priority.ALWAYS);
		hb.getChildren().add(detail);
		right.getChildren().add(hb);

		wear = new Button("Wear");
		unwear = new Button("Un-wear");
		drop = new Button("Drop");

		wear.setDisable(true);
		unwear.setDisable(true);
		drop.setDisable(true);

		hb = new HBox();
		hb.getChildren().addAll(wear, unwear, drop);
		hb.setAlignment(Pos.CENTER);
		right.getChildren().add(hb);

		HBox.setHgrow(list, Priority.NEVER);

		getChildren().addAll(list, right);

		list.setMinWidth(310);
		list.setMaxWidth(310);
		list.setEditable(false);

		list.getSelectionModel().selectedItemProperty().addListener(new ChangeListener<ItemInfo>() {
			@Override
			public void changed(ObservableValue<? extends ItemInfo> ov, ItemInfo t, ItemInfo t1) {
				if (t1 != null) {
					detail.setText(String.format("Item: %s\n\n ... some description or shit ...\n",
							t1));

					wear.setDisable(t1.wornAt != -1 || worn.canWearAt(t1.name) == -1);
					unwear.setDisable(t1.wornAt == -1);
					drop.setDisable(false);
				} else {
					detail.setText("");
					wear.setDisable(true);
					unwear.setDisable(true);
					drop.setDisable(true);
				}
			}
		});
	}

	public ItemInfo getItem() {
		return list.getSelectionModel().getSelectedItem();
	}

	static class ItemInfo {

		String name;
		int wornAt;

		public ItemInfo(String name, int wornAt) {
			this.name = name;
			this.wornAt = wornAt;
		}

		@Override
		public String toString() {
			return wornAt == -1 ? name : name + " [worn: " + Wearing.wornTitles[wornAt] + "]";
		}
	}

	public void setEquipment(Equipment worn) {
		this.worn = worn;

		List<ItemInfo> items = new ArrayList<>();

		for (int i = 0; i < worn.worn.length; i++) {
			String s = worn.worn[i];
			if (s != null && !s.equals("none"))
				items.add(new ItemInfo(s, i));
		}
		for (String s : worn.all) {
			items.add(new ItemInfo(s, -1));
		}

		list.getItems().setAll(items);
	}
}
