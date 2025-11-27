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
package duskz.server.entityz;

import java.util.ArrayList;

/**
 * Tracks a group of things following other things
 *
 * I think they all have to be players or pets, maybe they should
 * sub-class off a common thing.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class Pack {
	/*
	 * Required functionality:
	 *  - ordered list of followers
	 *  - notifications
	 *  - grou tests, e.g. member of, clan inside
	 */

	ArrayList<Active> members = new ArrayList<>();

	public boolean contains(Active member) {
		return members.contains(member);
	}

	/**
	 * Returns true if any member is clanless
	 *
	 * @return
	 */
	public boolean containsClanless() {
		for (Active a : members) {
			if (a.clan.equals("none"))
				return true;
		}
		return false;
	}

	/**
	 * Adds follower onto the end of the chain of followers
	 *
	 * @param follower
	 */
	public void addFollower(Active follower) {
		if (!members.isEmpty()) {
			for (Active a : members) {
				a.chatMessage("You are now being followed by " + follower.name + ".");
			}
			follower.chatMessage("You are now following " + members.get(members.size() - 1).name + ".");
		}
		members.add(follower);
	}

	public boolean isLeader(Active a) {
		assert (members.size() > 1);

		return members.get(0).ID == a.ID;
	}

	public Active getFollowing(Active leader) {
		int i = members.indexOf(leader);

		assert (members.size() > 1);
		assert (i != -1);

		if (i + 1 < members.size())
			return members.get(i + 1);
		return null;
	}

	Active getLeader(Active follower) {
		int i = members.indexOf(follower);

		if (i == 0)
			return follower;

		return members.get(i - 1);
	}

	/**
	 * Remove someone who is following.
	 *
	 * FIXME: if this leavs the group emtpy, then what?
	 *
	 * @param follower
	 */
	void removeFollower(Active follower) {
		if (isLeader(follower)) {
			// cant do that
		} else {
			Active leader = getLeader(follower);

			members.remove(follower);
			for (Active a : members) {
				a.chatMessage(follower.name + " is no longer following you.");
			}
			follower.chatMessage("You are no longer following " + leader.name);
		}
	}
}
