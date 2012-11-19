package in.groan.dusk.object.entity;

public class Race {
	int ID = -1;
	String NAME = "";
	int BASE_HP = 0;
	int BASE_SP = 0;
	int BASE_STR = 0;
	int BASE_VIT = 0;
	int BASE_DEX = 0;
	int BASE_AGI = 0;
	int BASE_AVD = 0;
	int BASE_INT = 0;
	int BASE_MND = 0;
	int BASE_RES = 0;
	int rt = 0;
	int BASE_LUK = 0;
	
	double SPD_ADJUST = 0;
	
	/**
	 * @param raceID
	 * @param rname
	 * @param base
	 */
	public Race(int raceID, String rname, int[] base, float spd) {
		ID = raceID;
		NAME = rname;
		
    	BASE_HP 	= base[0];
    	BASE_SP 	= base[1];
    	BASE_STR 	= base[2];
    	BASE_VIT 	= base[3];
    	BASE_DEX 	= base[4];
    	BASE_AGI 	= base[5];
    	BASE_AVD 	= base[6];
    	BASE_INT 	= base[7];
    	BASE_MND 	= base[8];
    	BASE_RES 	= base[9];
    	rt			= base[10];
    	BASE_LUK 	= base[11];
    	
    	SPD_ADJUST = (double)spd;
	}

	public String toString() {
		return NAME;
	}

	/**
	 * @return
	 */
	public String toLowerCase() {
		return NAME.toLowerCase();
	}

	/**
	 * @return the iD
	 */
	public int getID() {
		return ID;
	}

	/**
	 * @param iD the iD to set
	 */
	public void setID(int iD) {
		ID = iD;
	}

	/**
	 * @return the nAME
	 */
	public String getNAME() {
		return NAME;
	}

	/**
	 * @param nAME the nAME to set
	 */
	public void setNAME(String nAME) {
		NAME = nAME;
	}

	/**
	 * @return the bASE_HP
	 */
	public int getBASE_HP() {
		return BASE_HP;
	}

	/**
	 * @param bASE_HP the bASE_HP to set
	 */
	public void setBASE_HP(int bASE_HP) {
		BASE_HP = bASE_HP;
	}

	/**
	 * @return the bASE_SP
	 */
	public int getBASE_SP() {
		return BASE_SP;
	}

	/**
	 * @param bASE_SP the bASE_SP to set
	 */
	public void setBASE_SP(int bASE_SP) {
		BASE_SP = bASE_SP;
	}

	/**
	 * @return the bASE_STR
	 */
	public int getBASE_STR() {
		return BASE_STR;
	}

	/**
	 * @param bASE_STR the bASE_STR to set
	 */
	public void setBASE_STR(int bASE_STR) {
		BASE_STR = bASE_STR;
	}

	/**
	 * @return the bASE_VIT
	 */
	public int getBASE_VIT() {
		return BASE_VIT;
	}

	/**
	 * @param bASE_VIT the bASE_VIT to set
	 */
	public void setBASE_VIT(int bASE_VIT) {
		BASE_VIT = bASE_VIT;
	}

	/**
	 * @return the bASE_DEX
	 */
	public int getBASE_DEX() {
		return BASE_DEX;
	}

	/**
	 * @param bASE_DEX the bASE_DEX to set
	 */
	public void setBASE_DEX(int bASE_DEX) {
		BASE_DEX = bASE_DEX;
	}

	/**
	 * @return the bASE_AGI
	 */
	public int getBASE_AGI() {
		return BASE_AGI;
	}

	/**
	 * @param bASE_AGI the bASE_AGI to set
	 */
	public void setBASE_AGI(int bASE_AGI) {
		BASE_AGI = bASE_AGI;
	}

	/**
	 * @return the bASE_AVD
	 */
	public int getBASE_AVD() {
		return BASE_AVD;
	}

	/**
	 * @param bASE_AVD the bASE_AVD to set
	 */
	public void setBASE_AVD(int bASE_AVD) {
		BASE_AVD = bASE_AVD;
	}

	/**
	 * @return the bASE_INT
	 */
	public int getBASE_INT() {
		return BASE_INT;
	}

	/**
	 * @param bASE_INT the bASE_INT to set
	 */
	public void setBASE_INT(int bASE_INT) {
		BASE_INT = bASE_INT;
	}

	/**
	 * @return the bASE_MND
	 */
	public int getBASE_MND() {
		return BASE_MND;
	}

	/**
	 * @param bASE_MND the bASE_MND to set
	 */
	public void setBASE_MND(int bASE_MND) {
		BASE_MND = bASE_MND;
	}

	/**
	 * @return the bASE_RES
	 */
	public int getBASE_RES() {
		return BASE_RES;
	}

	/**
	 * @param bASE_RES the bASE_RES to set
	 */
	public void setBASE_RES(int bASE_RES) {
		BASE_RES = bASE_RES;
	}

	/**
	 * @return the rt
	 */
	public int getRt() {
		return rt;
	}

	/**
	 * @param rt the rt to set
	 */
	public void setRt(int rt) {
		this.rt = rt;
	}

	/**
	 * @return the bASE_LUK
	 */
	public int getBASE_LUK() {
		return BASE_LUK;
	}

	/**
	 * @param bASE_LUK the bASE_LUK to set
	 */
	public void setBASE_LUK(int bASE_LUK) {
		BASE_LUK = bASE_LUK;
	}
	
	/**
	 * @return the SPD_ADJUST
	 */
	public double getSpeedAdjust() {
		return SPD_ADJUST;
	}

	/**
	 * @param SPD_ADJUST
	 */
	public void setSpeedAdjust(double spd) {
		SPD_ADJUST = spd;
	}

}
