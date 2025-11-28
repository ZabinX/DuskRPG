import duskz.protocol.*;
import duskz.protocol.DuskMessage.*;

public class Status implements DuskProtocol {
	long id;
	int hp, maxhp, mp, maxmp, range;
	long cash;
	int exp;
	int str, strbon;
	int intel, intelbon;
	int dex, dexbon;
	int con, conbon;
	int wis, wisbon;
	int dam, dambon;
	int arc, arcbon;
	int locx, locy;

	public void updateLocation(int x, int y) {
		locx = x;
		locy = y;
	}

	public void updateStatus(ListMessage lm) {
		hp = lm.getInteger(DuskProtocol.FIELD_INFO_HP, hp);
		maxhp = lm.getInteger(DuskProtocol.FIELD_INFO_MAXHP, maxhp);
		mp = lm.getInteger(DuskProtocol.FIELD_INFO_MP, mp);
		maxmp = lm.getInteger(DuskProtocol.FIELD_INFO_MAXMP, maxmp);
		cash = lm.getLong(DuskProtocol.FIELD_INFO_CASH, cash);
		exp = lm.getInteger(DuskProtocol.FIELD_INFO_EXP, exp);
		str = lm.getInteger(DuskProtocol.FIELD_INFO_STR, str);
		strbon = lm.getInteger(DuskProtocol.FIELD_INFO_STRBON, strbon);
		intel = lm.getInteger(DuskProtocol.FIELD_INFO_INT, intel);
		intelbon = lm.getInteger(DuskProtocol.FIELD_INFO_INTBON, intelbon);
		dex = lm.getInteger(DuskProtocol.FIELD_INFO_DEX, dex);
		dexbon = lm.getInteger(DuskProtocol.FIELD_INFO_DEXBON, dexbon);
		con = lm.getInteger(DuskProtocol.FIELD_INFO_CON, con);
		conbon = lm.getInteger(DuskProtocol.FIELD_INFO_CONBON, conbon);
		wis = lm.getInteger(DuskProtocol.FIELD_INFO_WIS, wis);
		wisbon = lm.getInteger(DuskProtocol.FIELD_INFO_WISBON, wisbon);
		dam = lm.getInteger(DuskProtocol.FIELD_INFO_DAM, dam);
		dambon = lm.getInteger(DuskProtocol.FIELD_INFO_DAMBON, dambon);
		arc = lm.getInteger(DuskProtocol.FIELD_INFO_ARC, arc);
		arcbon = lm.getInteger(DuskProtocol.FIELD_INFO_ARCBON, arcbon);
		range = lm.getInteger(DuskProtocol.FIELD_INFO_RANGE, range);
	}

	// The can* methods are just simple range checks, the server does the real work
	public boolean canLook(Entity e) {
		return true;
	}

	public boolean canTake(Entity e) {
		if (e.intType != 1) // Item
			return false;
		return Math.abs(locx - e.intLocX) + Math.abs(locy - e.intLocY) < 2;
	}

	public boolean canAttack(Entity e) {
		if (e.ID == id)
			return false;
		if (e.intType != 0 && e.intType != 1 && e.intType != 4)
			return false;

		return Math.abs(locx - e.intLocX) + Math.abs(locy - e.intLocY) <= range;
	}

	@Override
	public String toString() {
		return String.format("HP: %d/%d MP: %d/%d Loc: %d/%d", hp, maxhp, mp, maxmp, locx, locy);
	}
}
