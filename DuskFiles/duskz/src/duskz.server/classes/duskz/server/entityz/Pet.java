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

import duskz.protocol.DuskMessage;
import java.util.ArrayList;

/**
 * Pet, only Players can have pets
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class Pet extends Active {

	/**
	 * The pet's master.
	 */
	Player master;

	public Pet(Game game) {
		super(game);
	}

	@Override
	public int getType() {
		return TYPE_PET;
	}

	@Override
	public boolean isCanLead() {
		return master.isCanLead();
	}

	@Override
	public void send(DuskMessage msg) {
		master.send(msg);
	}

	@Override
	public void chatMessage(Active from, String clan, String msg) {
		master.chatMessage(from, clan, msg);
	}

	@Override
	public boolean canAttackEnemy(Active enemy) {
		master.chatMessage(null, null, "Pets cannot lead battle");
		return false;
	}

	@Override
	public void follow(Active master) {
		if (this.master.ID != master.ID) {
			chatMessage("You can only follow your owner.");
			return;
		}
		super.follow(master);
	}

	@Override
	void leaveCommand() {
		chatMessage("You cannot leave your master unless he unfollows you.");
	}
	
	@Override
	protected boolean followTo(Active leader, int oldx, int oldy) {

		assert (leader.ID == master.ID);

		if (leader.ID != master.ID) {
			throw new RuntimeException("pets can only follow masters");
		}

		boolean moved = jumpTo(map, oldx, oldy);

		return moved;
	}

	@Override
	public void fleeBattle(Battle battle, ArrayList<Active> opponents) {
		endBattle();
	}

	@Override
	public void killedBattle(Battle battle, Active winner, ArrayList<Active> opponents) {
		battle.chatMessage(name + " is wounded.");
		chatMessage("You have been wounded.");
		splitMoney(game.goldLoseMod, opponents);
		splitExp(game.expLoseMod, opponents);
		endBattle();
	}

	@Override
	public void sayCommand(String text) {
		localisedChat("Pet " + name + " says: " + text);
	}
}
