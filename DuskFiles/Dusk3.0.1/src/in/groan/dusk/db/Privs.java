/**
 * 
 */
package in.groan.dusk.db;

public enum Privs {
	BANNED, //not allowed server access
	LIMITED,
	NEW, //default for new accts
	BASIC, //slightly more abilities
	GUILDMEMBER, //guild member commands and features
	GUILDLDR, //guild leader commands and features
	ADVANCED, //all commands that arent gm related
	LEADER, //very basic GM commands
	MODERATOR, //average GM 
	DEVMIN, //developer account for testing, has GM abilities w/server abilities
	ADMIN, //Access to everything except turning server on/off
	OWNER,;

	/**
	 * @param trim
	 * @return
	 */
	public static Privs parseInt(String trim) {
		int i = Integer.parseInt(trim);
		return Privs.values()[i];
	} //everything and can start restart or stop server
	
	public static Integer toInt(Privs pr) {
		Privs[] p = Privs.values();
		for(int x = 0; x < p.length; x++) {
			if(p[x].equals(pr)) return x;
		}
		
		return 0;
	}
}
