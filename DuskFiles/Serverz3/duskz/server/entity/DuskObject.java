/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2000 Tom Weingarten <captaint@home.com>
 * Copyright (C) 2013 Michael Zucchi <notzed@gmail.com>
 *
 * DuskZ is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * DuskZ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with DuskZ; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
/**
 * Changes
 * Feb-2013 Michael Zucchi - modernised java, added list functions and
 * serialisation..
 * Mar-2013 Michael Zucchi - changed server protocol
 */
package duskz.server.entity;

import duskz.protocol.EntityUpdateMessage;

/*
 All code copyright Tom Weingarten (captaint@home.com) 2000
 Tom Weingarten makes no assurances as to the reliability or
 functionality of this code. Use at your own risk.

 You are free to edit or redistribute this code or any portion
 at your wish, under the condition that you do not edit or
 remove this license, and accompany it with all redistributions.
 */
/**
 * DuskObject is the basic type of entity in Dusk.
 *
 * @author Tom Weingarten
 */
public abstract class DuskObject {

	public static final byte LIVING_THING = 0;
	public static final byte ITEM = 1;
	public static final byte PROP = 2;
	public static final byte SIGN = 3;
	public static final byte MERCHANT = 4;
	public static final byte PLAYER_MARCHANT = 5;
	final public long ID;					// Unique ID if this object
	public String name;		// Name of this object
	public String description = null;	// Description of this object
	boolean isHideName;		// if true: Do not display object's name on the client map.
	// Current map for object
	public TileMap map;
	// current location on map
	public int x, y;
	DuskObject next = null;	//Linked List

	public DuskObject(long ID, String name) {
		this.ID = ID;
		this.name = name;
	}

	public DuskObject(byte bytObjType, long ID) {
		this.ID = ID;
	}

	public abstract byte getType();

	public abstract int getImage();
	// for some fucked reason this doesn't match getType()

	public abstract int getEntityType();

	// These are a bit dumb - we have objects to change behaviour.
	public boolean isLivingThing() {
		return getType() == LIVING_THING;
	}

	public boolean isItem() {
		return getType() == ITEM;
	}

	public boolean isProp() {
		return getType() == PROP;
	}

	public boolean isSign() {
		return getType() == SIGN;
	}

	public boolean isMerchant() {
		return getType() == MERCHANT;
	}

	public boolean isPlayerMerchant() {
		return getType() == PLAYER_MARCHANT;
	}

	public long getID() {
		return ID;
	}


	public EntityUpdateMessage toMessage(int msg) {
		EntityUpdateMessage en = new EntityUpdateMessage();

		en.name = msg;
		en.id = ID;
		en.entityName = name;
		en.entityType = (byte)getEntityType();
		en.x = (short)x;
		en.y = (short)y;
		en.image = (short) getImage();
		en.imageStep = -1;

		return en;
	}

	// Linked list stuff - should it just use a container?
	public DuskObject getNext() {
		return next;
	}

	/**
	 * Measure the distance between two objects.
	 *
	 * @param o Other object
	 * @return integer version of Euclidian distance.
	 */
	public int distance(DuskObject o) {
		int dx = o.x - x;
		int dy = o.y - y;

		return (int) Math.sqrt(dx * dx + dy * dy);
	}

	/**
	 * Measure the number of tile steps to get to the target. Just uses
	 * "Manhatten" distance.
	 *
	 * @param o
	 * @return
	 */
	public int tileDistance(DuskObject o) {
		return Math.abs(o.x - x) + Math.abs(o.y - y);
	}

	/**
	 * Calculate if this object is 1 block away in any cardinal direction
	 *
	 * @param o
	 * @return
	 */
	public boolean adjacent(DuskObject o) {
		return Math.abs(o.x - x) + Math.abs(o.y - y) <= 1;
	}

	@Override
	public String toString() {
		return getClass().getName() + " '" + name + "' @ " + x + "," + y;
	}

	@Deprecated
	public static DuskObject find(DuskObject o, String name) {
		while (o != null) {
			if (o.name.equalsIgnoreCase(name)) {
				break;
			}
			o = o.next;
		}
		return o;
	}

	/**
	 * append o to the end of the bucket chain from root
	 *
	 * @param root
	 * @param o
	 * @return if root is null then o, otherwise root
	 */
	public static DuskObject append(DuskObject root, DuskObject o) {
		if (o == root) {
			return root;
		}

		if (root == null) {
			o.next = null;
			return o;
		}

		DuskObject d = root;
		while (d.next != null) {
			if (d == o) {
				return root;
			}
			d = d.next;
		}
		o.next = null;
		d.next = o;

		return root;
	}

	/**
	 * Remove o from a chain from root, returns new root
	 *
	 * @param root
	 * @param o
	 * @return
	 */
	public static DuskObject remove(DuskObject root, DuskObject o) {
		if (root == null) {
			return null;
		} else if (root == o) {
			DuskObject n = o.next;
			o.next = null;
			return n;
		} else {
			DuskObject d = root;
			while (d.next != null) {
				if (d.next == o) {
					d.next = o.next;
					o.next = null;
					break;
				}
				d = d.next;
			}
			return root;
		}
	}
}
