package in.groan.dusk.action;

import in.groan.dusk.object.entity.Entity;

public class Event {

	private Entity player;

	public Event(Entity p) {
		this.player = p;
	}
	
	public boolean checkLvlUp() {
		return false;
	}
}
