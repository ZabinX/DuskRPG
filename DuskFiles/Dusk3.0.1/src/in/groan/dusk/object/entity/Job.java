package in.groan.dusk.object.entity;

import java.util.Vector;

import in.groan.dusk.Constants;

public class Job implements Constants {
	String jobName = "None";
	int ID = -1;
	Vector races_allowed = new Vector();
	Vector weapons_allowed = new Vector();
	double hp_rate, sp_rate, str_rate, vit_rate, 
		   dex_rate, agi_rate, avd_rate, int_rate, 
		   mnd_rate, res_rate, luk_rate, atk_rate, 
		   def_rate, spd_adjust;
	
	int job_rt = 0;
	public Job(int jID, String name, Vector<Integer> races, Vector<Integer> weapons, double[] rates, int rt) {
		ID = jID;
		jobName = name;
		races_allowed = races;
		weapons_allowed = weapons;
		hp_rate = rates[0];
		sp_rate = rates[1];
		str_rate = rates[2]; 
		vit_rate = rates[3];
		dex_rate = rates[4];
		agi_rate  = rates[5];
		avd_rate  = rates[6];
		int_rate  = rates[7];
		mnd_rate = rates[8]; 
		res_rate = rates[9]; 
		luk_rate = rates[10]; 
		atk_rate = rates[11]; 
		def_rate = rates[12]; 
		spd_adjust = rates[13];
		job_rt = rt;
	}
	/**
	 * @return the jobName
	 */
	public String getJobName() {
		return jobName;
	}
	/**
	 * @param jobName the jobName to set
	 */
	public void setJobName(String jobName) {
		this.jobName = jobName;
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
	 * @return the races_allowed
	 */
	public Vector getRaces_allowed() {
		return races_allowed;
	}
	/**
	 * @param races_allowed the races_allowed to set
	 */
	public void setRaces_allowed(Vector races_allowed) {
		this.races_allowed = races_allowed;
	}
	/**
	 * @return the weapons_allowed
	 */
	public Vector getWeapons_allowed() {
		return weapons_allowed;
	}
	/**
	 * @param weapons_allowed the weapons_allowed to set
	 */
	public void setWeapons_allowed(Vector weapons_allowed) {
		this.weapons_allowed = weapons_allowed;
	}
	/**
	 * @return the hp_rate
	 */
	public double getHp_rate() {
		return hp_rate;
	}
	/**
	 * @param hp_rate the hp_rate to set
	 */
	public void setHp_rate(double hp_rate) {
		this.hp_rate = hp_rate;
	}
	/**
	 * @return the sp_rate
	 */
	public double getSp_rate() {
		return sp_rate;
	}
	/**
	 * @param sp_rate the sp_rate to set
	 */
	public void setSp_rate(double sp_rate) {
		this.sp_rate = sp_rate;
	}
	/**
	 * @return the str_rate
	 */
	public double getStr_rate() {
		return str_rate;
	}
	/**
	 * @param str_rate the str_rate to set
	 */
	public void setStr_rate(double str_rate) {
		this.str_rate = str_rate;
	}
	/**
	 * @return the vit_rate
	 */
	public double getVit_rate() {
		return vit_rate;
	}
	/**
	 * @param vit_rate the vit_rate to set
	 */
	public void setVit_rate(double vit_rate) {
		this.vit_rate = vit_rate;
	}
	/**
	 * @return the dex_rate
	 */
	public double getDex_rate() {
		return dex_rate;
	}
	/**
	 * @param dex_rate the dex_rate to set
	 */
	public void setDex_rate(double dex_rate) {
		this.dex_rate = dex_rate;
	}
	/**
	 * @return the agi_rate
	 */
	public double getAgi_rate() {
		return agi_rate;
	}
	/**
	 * @param agi_rate the agi_rate to set
	 */
	public void setAgi_rate(double agi_rate) {
		this.agi_rate = agi_rate;
	}
	/**
	 * @return the avd_rate
	 */
	public double getAvd_rate() {
		return avd_rate;
	}
	/**
	 * @param avd_rate the avd_rate to set
	 */
	public void setAvd_rate(double avd_rate) {
		this.avd_rate = avd_rate;
	}
	/**
	 * @return the int_rate
	 */
	public double getInt_rate() {
		return int_rate;
	}
	/**
	 * @param int_rate the int_rate to set
	 */
	public void setInt_rate(double int_rate) {
		this.int_rate = int_rate;
	}
	/**
	 * @return the mnd_rate
	 */
	public double getMnd_rate() {
		return mnd_rate;
	}
	/**
	 * @param mnd_rate the mnd_rate to set
	 */
	public void setMnd_rate(double mnd_rate) {
		this.mnd_rate = mnd_rate;
	}
	/**
	 * @return the res_rate
	 */
	public double getRes_rate() {
		return res_rate;
	}
	/**
	 * @param res_rate the res_rate to set
	 */
	public void setRes_rate(double res_rate) {
		this.res_rate = res_rate;
	}
	/**
	 * @return the luk_rate
	 */
	public double getLuk_rate() {
		return luk_rate;
	}
	/**
	 * @param luk_rate the luk_rate to set
	 */
	public void setLuk_rate(double luk_rate) {
		this.luk_rate = luk_rate;
	}
	/**
	 * @return the atk_rate
	 */
	public double getAtk_rate() {
		return atk_rate;
	}
	/**
	 * @param atk_rate the atk_rate to set
	 */
	public void setAtk_rate(double atk_rate) {
		this.atk_rate = atk_rate;
	}
	/**
	 * @return the def_rate
	 */
	public double getDef_rate() {
		return def_rate;
	}
	/**
	 * @param def_rate the def_rate to set
	 */
	public void setDef_rate(double def_rate) {
		this.def_rate = def_rate;
	}
	/**
	 * @return the spd_adjust
	 */
	public double getSpd_adjust() {
		return spd_adjust;
	}
	/**
	 * @param spd_adjust the spd_adjust to set
	 */
	public void setSpd_adjust(double spd_adjust) {
		this.spd_adjust = spd_adjust;
	}
	/**
	 * @return the job_rt
	 */
	public int getJob_rt() {
		return job_rt;
	}
	/**
	 * @param job_rt the job_rt to set
	 */
	public void setJob_rt(int job_rt) {
		this.job_rt = job_rt;
	}
	
	/**
	  hp_rate, sp_rate, str_rate, vit_rate, 
	  dex_rate, agi_rate, avd_rate, int_rate, 
	  mnd_rate, res_rate, luk_rate, atk_rate, 
	  def_rate, spd_adjust;
	 */
	public double[] getRates() {
		return new double[]{hp_rate, sp_rate, str_rate, vit_rate,
							dex_rate, agi_rate, avd_rate, int_rate, 
							mnd_rate, res_rate, luk_rate, atk_rate, 
							def_rate, spd_adjust};
	}
	
	

}
