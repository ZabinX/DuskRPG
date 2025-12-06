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

import duskz.protocol.TransactionItem;
import java.util.List;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.geometry.Pos;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Priority;
import javafx.scene.layout.VBox;
import jfxtras.scene.control.ListSpinner;

/**
 *
 * @author notzed
 */
public class TransactionPane extends HBox {

	TableView<TransactionItem> table;
	Label detail;
	ListSpinner quantity;
	Button action;

	public TransactionPane(Button action) {
		this.action = action;

		setId("buy-pane");

		VBox right = new VBox();

		HBox.setHgrow(right, Priority.ALWAYS);

		right.setAlignment(Pos.TOP_RIGHT);
		right.setFillWidth(true);

		table = new TableView<>();
		detail = new Label();
		quantity = new ListSpinner(1, 100);

		HBox hb;

		hb = new HBox();
		hb.setFillHeight(true);
		VBox.setVgrow(hb, Priority.ALWAYS);
		hb.getChildren().add(detail);
		right.getChildren().add(hb);

		hb = new HBox();
		hb.getChildren().add(quantity);
		hb.getChildren().add(new Label("Quantity:"));
		hb.setAlignment(Pos.CENTER);
		right.getChildren().add(hb);

		//	hb = new HBox();
		//	hb.getChildren().add(action);
		//	hb.setAlignment(Pos.BOTTOM_RIGHT);
		//	right.getChildren().add(hb);
		right.getChildren().add(action);

		HBox.setHgrow(table, Priority.NEVER);

		getChildren().addAll(table, right);


		TableColumn<TransactionItem, String> countCol = new TableColumn<TransactionItem, String>("Count");
		countCol.setCellValueFactory(new PropertyValueFactory("count"));

		TableColumn<TransactionItem, String> nameCol = new TableColumn<TransactionItem, String>("Name");
		nameCol.setCellValueFactory(new PropertyValueFactory("name"));

		TableColumn<TransactionItem, String> costCol = new TableColumn<TransactionItem, String>("Cost");
		costCol.setCellValueFactory(new PropertyValueFactory("costText"));

		table.getColumns().setAll(countCol, nameCol, costCol);

		countCol.setMinWidth(50);
		nameCol.setMinWidth(180);
		costCol.setMinWidth(50);
		table.setMinWidth(310);
		table.setMaxWidth(310);

		countCol.setResizable(false);
		nameCol.setResizable(false);
		costCol.setResizable(false);
		table.setEditable(false);

		table.getSelectionModel().selectedItemProperty().addListener(new ChangeListener<TransactionItem>() {
			@Override
			public void changed(ObservableValue<? extends TransactionItem> ov, TransactionItem t, TransactionItem t1) {
				if (t1 != null) {
					detail.setText(String.format("Item: %s\nCost: %s\n\n ... some description or shit ...\n",
							t1.name, t1.cost));
				} else {
					detail.setText("");
				}
			}
		});
	}

	public int getQuantity() {
		return ((Number) quantity.getValue()).intValue();
	}

	public TransactionItem getItem() {
		return table.getSelectionModel().getSelectedItem();
	}

	public void setItems(List<TransactionItem> items) {
		this.table.getItems().setAll(items);
	}
}
