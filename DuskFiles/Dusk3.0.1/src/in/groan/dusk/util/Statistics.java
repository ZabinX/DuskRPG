package in.groan.dusk.util;

import java.util.HashMap;

import in.groan.dusk.object.entity.Job;
import in.groan.dusk.object.entity.Race;
import in.groan.dusk.object.itm.Item;

public class Statistics {
	int HP, MAXHP, SP, MAXSP, STR, AGI, VIT, INT, DEX, AVD, MND, RES, LUK;
	int HP_BON = 0, SP_BON = 0, STR_BON = 0, AGI_BON = 0, VIT_BON = 0, INT_BON = 0, DEX_BON = 0, 
		AVD_BON = 0, MND_BON = 0, RES_BON = 0, LUK_BON = 0;
	int RANGE = 1;
	double SPD;
	private HashMap<Integer, Item> equip;
	private Job job;
	
	public Statistics(int vHP, int vMAXHP, int vSP, int vMAXSP, int vSTR, int vAGI, int vVIT, 
					 int vINT, int vDEX, int vAVD, int vMND, int vRES, int vLUK, double vSPD) {
		HP = vHP;
		MAXHP = vMAXHP;
		SP = vSP;
		MAXSP = vMAXSP;
		STR = vSTR;
		AGI = vAGI;
		VIT = vVIT;
		INT = vINT;
		DEX = vDEX;
		AVD = vAVD;
		MND = vMND;
		RES = vRES;
		LUK = vLUK;
		SPD = vSPD;
	}
	
	/**
	 * HP, MAXHP, SP, MAXSP, STR, AGI, VIT, INT, DEX, AVD, MND, RES, LUK, (SPD * 100)
	 * <p /><i>SPD must be divided by 100 and turned back into a double</i>
	 */
	public int[] getStats () {
		int iSPD = (int)(SPD * 100);
		return new int[]{HP, MAXHP, SP, MAXSP, STR, AGI, VIT, INT, DEX, AVD, MND, RES, LUK, iSPD};
	}
	
	/**
	 * HP_BON, SP_BON, STR_BON, AGI_BON, VIT_BON, INT_BON, DEX_BON, AVD_BON, MND_BON, RES_BON, LUK_BON
	 */
	public int[] getBonusStats () {
		return new int[]{HP_BON, SP_BON, STR_BON, AGI_BON, VIT_BON, INT_BON, DEX_BON, AVD_BON, MND_BON, RES_BON, LUK_BON};
	}
	
	public void setJob(Job j) {
		job = j;
	}
	
	public void updateItemInfo(HashMap<Integer, Item> equ) {
		if (equip.equals(equ)) return;
		equip = equ;
	}
	
	public void incHP() {
		HP++;
	}
	
	/**
	 * @return the hP
	 */
	public int getHP() {
		return HP;
	}
	/**
	 * @param hP the hP to set
	 */
	public void setHP(int hP) {
		HP = hP;
	}
	/**
	 * @return the mAXHP
	 */
	public int getMAXHP() {
		return MAXHP;
	}
	/**
	 * @param mAXHP the mAXHP to set
	 */
	public void setMAXHP(int mAXHP) {
		MAXHP = mAXHP;
	}
	/**
	 * @return the sP
	 */
	public int getSP() {
		return SP;
	}
	/**
	 * @param sP the sP to set
	 */
	public void setSP(int sP) {
		SP = sP;
	}
	/**
	 * @return the mAXSP
	 */
	public int getMAXSP() {
		return MAXSP;
	}
	/**
	 * @param mAXSP the mAXSP to set
	 */
	public void setMAXSP(int mAXSP) {
		MAXSP = mAXSP;
	}
	/**
	 * @return the sTR
	 */
	public int getSTR() {
		return STR;
	}
	/**
	 * @param sTR the sTR to set
	 */
	public void setSTR(int sTR) {
		STR = sTR;
	}
	/**
	 * @return the aGI
	 */
	public int getAGI() {
		return AGI;
	}
	/**
	 * @param aGI the aGI to set
	 */
	public void setAGI(int aGI) {
		AGI = aGI;
	}
	/**
	 * @return the vIT
	 */
	public int getVIT() {
		return VIT;
	}
	/**
	 * @param vIT the vIT to set
	 */
	public void setVIT(int vIT) {
		VIT = vIT;
	}
	/**
	 * @return the iNT
	 */
	public int getINT() {
		return INT;
	}
	/**
	 * @param iNT the iNT to set
	 */
	public void setINT(int iNT) {
		INT = iNT;
	}
	/**
	 * @return the dEX
	 */
	public int getDEX() {
		return DEX;
	}
	/**
	 * @param dEX the dEX to set
	 */
	public void setDEX(int dEX) {
		DEX = dEX;
	}
	/**
	 * @return the aVD
	 */
	public int getAVD() {
		return AVD;
	}
	/**
	 * @param aVD the aVD to set
	 */
	public void setAVD(int aVD) {
		AVD = aVD;
	}
	/**
	 * @return the mND
	 */
	public int getMND() {
		return MND;
	}
	/**
	 * @param mND the mND to set
	 */
	public void setMND(int mND) {
		MND = mND;
	}
	/**
	 * @return the rES
	 */
	public int getRES() {
		return RES;
	}
	/**
	 * @param rES the rES to set
	 */
	public void setRES(int rES) {
		RES = rES;
	}
	/**
	 * @return the lUK
	 */
	public int getLUK() {
		return LUK;
	}
	/**
	 * @param lUK the lUK to set
	 */
	public void setLUK(int lUK) {
		LUK = lUK;
	}
	/**
	 * @return the sPD
	 */
	public double getSPD() {
		return SPD;
	}
	/**
	 * @param sPD the sPD to set
	 */
	public void setSPD(double sPD) {
		SPD = sPD;
	}

	/**
	 * @return the hP_BON
	 */
	public int getHP_BON() {
		return HP_BON;
	}

	/**
	 * @param hP_BON the hP_BON to set
	 */
	public void setHP_BON(int hP_BON) {
		HP_BON = hP_BON;
	}

	/**
	 * @return the sP_BON
	 */
	public int getSP_BON() {
		return SP_BON;
	}

	/**
	 * @param sP_BON the sP_BON to set
	 */
	public void setSP_BON(int sP_BON) {
		SP_BON = sP_BON;
	}

	/**
	 * @return the sTR_BON
	 */
	public int getSTR_BON() {
		return STR_BON;
	}

	/**
	 * @param sTR_BON the sTR_BON to set
	 */
	public void setSTR_BON(int sTR_BON) {
		STR_BON = sTR_BON;
	}

	/**
	 * @return the aGI_BON
	 */
	public int getAGI_BON() {
		return AGI_BON;
	}

	/**
	 * @param aGI_BON the aGI_BON to set
	 */
	public void setAGI_BON(int aGI_BON) {
		AGI_BON = aGI_BON;
	}

	/**
	 * @return the vIT_BON
	 */
	public int getVIT_BON() {
		return VIT_BON;
	}

	/**
	 * @param vIT_BON the vIT_BON to set
	 */
	public void setVIT_BON(int vIT_BON) {
		VIT_BON = vIT_BON;
	}

	/**
	 * @return the iNT_BON
	 */
	public int getINT_BON() {
		return INT_BON;
	}

	/**
	 * @param iNT_BON the iNT_BON to set
	 */
	public void setINT_BON(int iNT_BON) {
		INT_BON = iNT_BON;
	}

	/**
	 * @return the dEX_BON
	 */
	public int getDEX_BON() {
		return DEX_BON;
	}

	/**
	 * @param dEX_BON the dEX_BON to set
	 */
	public void setDEX_BON(int dEX_BON) {
		DEX_BON = dEX_BON;
	}

	/**
	 * @return the aVD_BON
	 */
	public int getAVD_BON() {
		return AVD_BON;
	}

	/**
	 * @param aVD_BON the aVD_BON to set
	 */
	public void setAVD_BON(int aVD_BON) {
		AVD_BON = aVD_BON;
	}

	/**
	 * @return the mND_BON
	 */
	public int getMND_BON() {
		return MND_BON;
	}

	/**
	 * @param mND_BON the mND_BON to set
	 */
	public void setMND_BON(int mND_BON) {
		MND_BON = mND_BON;
	}

	/**
	 * @return the rES_BON
	 */
	public int getRES_BON() {
		return RES_BON;
	}

	/**
	 * @param rES_BON the rES_BON to set
	 */
	public void setRES_BON(int rES_BON) {
		RES_BON = rES_BON;
	}

	/**
	 * @return the lUK_BON
	 */
	public int getLUK_BON() {
		return LUK_BON;
	}

	/**
	 * @param lUK_BON the lUK_BON to set
	 */
	public void setLUK_BON(int lUK_BON) {
		LUK_BON = lUK_BON;
	}

	/**
	 * @return
	 */
	public int getRange() {
		return RANGE;
	}

	/**
	 * @param i
	 */
	public void decHP(int i) {
		if(HP - i < 1)
			HP = 0;
		
		HP -= i;
	}

	/**
	 * @param i
	 */
	public void incHP(int i) {
		HP += i;
		
	}

	public void decSP(int i) {
		if(HP - i < 1)
			HP = 0;
		
		HP -= i;
	}

	/**
	 * @param i
	 */
	public void incSP(int i) {
		HP += i;
		
	}
}
