/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2000 Tom Weingarten <captaint@home.com>
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
 * Feb-2013 Michael Zucchi - modernised collections
 */
package duskz.server;

import java.util.ArrayList;
import java.util.List;

/**
 * SpellGroup contains all the spells in one group. It provides methods to
 * decide how much a spell will cost the player to cast.
 *
 * @author Tom Weingarten
 */
public class SpellGroup {

	public final String strName;
	public final List<String> vctSpells = new ArrayList<>();

	public SpellGroup(String inName) {
		strName = inName;
	}

	int getSpellPercent(String strName) {
		int i = getSpellNumber(strName);
		if (i > 0) {
			i = (100 * i) / (vctSpells.size() - 1);
		}
		return i;
		/*
		 String strStore;
		 for (int i = 0; i < vctSpells.size(); i++) {
		 strStore = (String) vctSpells.elementAt(i);
		 if (strStore.equals(strName)) {
		 if (i == 0) {
		 return 0;
		 } else {
		 return (100 * i) / (vctSpells.size() - 1);
		 }
		 }
		 }
		 return -1;*/
	}

	public int getSpellNumber(String strName) {
		return vctSpells.indexOf(strName);
		/*
		 String strStore;
		 for (int i = 0; i < vctSpells.size(); i++) {
		 strStore = (String) vctSpells.elementAt(i);
		 if (strStore.equals(strName)) {
		 return i;
		 }
		 }
		 return -1;*/
	}

	public String spellList(int percent) {
		String strStore;

		if (vctSpells.isEmpty()) {
			return "";
		}

		StringBuilder sb = new StringBuilder();

		strStore = (String) vctSpells.get(0);
		if (strStore == null) {
			return "";
		}
		sb.append("  ").append((110 - percent) / 2).
				append(" mp) ").
				append(strStore).append("\n");
		for (int i = 1; i < vctSpells.size(); i++) {
			if (percent < (100 * i) / (vctSpells.size() - 1)) {
				break;
			}
			strStore = (String) vctSpells.get(i);
			sb.append("  ").append((110 - (percent - (100 * i) / (vctSpells.size() - 1))) / 2)
					.append(" mp) ").append(strStore).append("\n");
		}
		return sb.toString();
	}

	public List<String> spellList(List<String> list, int percent) {
		String name;

		if (list == null)
			list = new ArrayList<>();

		if (vctSpells.isEmpty()) {
			return list;
		}

		name = (String) vctSpells.get(0);
		if (name == null) {
			return list;
		}
		list.add(((110 - percent) / 2) + " mp) " + name);
		for (int i = 1; i < vctSpells.size(); i++) {
			if (percent < (100 * i) / (vctSpells.size() - 1)) {
				break;
			}
			name = (String) vctSpells.get(i);

			list.add(((110 - (percent - (100 * i) / (vctSpells.size() - 1))) / 2) + " mp) " + name);
		}
		return list;
	}
}