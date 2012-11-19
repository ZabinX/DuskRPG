/***************************************************************************
 *     Dusk Graphical MUD RPG - Accounts.java
 *                     ------------v 3.0.1--------------
 *     author               : Louis Agoglia 
 *     date                 : Jul 3, 2011
 *     copyright            : (C) 2005-2012 LA
 *     website              : http://pretend.in
 *     email                : louis.agoglia@gmail.com
 *
 ****************************************************************************/
/***************************************************************************
 *
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation; either version 2 of the License, or
 *   (at your option) any later version.
 *
 ***************************************************************************/
package in.groan.dusk.db;

import in.groan.dusk.Constants;
import in.groan.dusk.DuskEngine;
import in.groan.dusk.object.entity.Job;
import in.groan.dusk.object.entity.Player;
import in.groan.dusk.object.entity.Race;
import in.groan.dusk.util.Log;
import in.groan.dusk.util.Statistics;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Serializable;
import java.net.MalformedURLException;
import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Vector;
/**
 * Used to create an account by sending data through a tcp/ip connection
 * and entering it into a MySql table
 * 
 * <p><b>Revision History</b> 
 * <br />[2.12.06] Cleaned up for Alpha Release
 * <br />[7.03.11] Modified for Java 6 and for Dusk
 */
public class Accounts implements Serializable, Constants {
	private static final long serialVersionUID = 2006073101L;

	public int ACCT_ID = -1;
	private boolean loggedIn = false;
	private Character[] charList = new Character[9];
	private int charIndex = 0;
	
	private JDBCTransaction transaction;
	DuskEngine eng;
	
	public Accounts(DuskEngine engine) {
		eng = engine;
	}
	
	/**
	 * Returns the current Transaction instance
	 * 
	 * @return
	 * 	Transaction
	 * @throws DatabaseException
	 */
	public Transaction getTransaction() throws DatabaseException {
	    if(transaction==null || !transaction.isValid()) {
			transaction=new JDBCTransaction(createConnection());
	     	if(transaction==null || !transaction.isValid()){
	     		throw new DatabaseException("Connection Failed!");
	      }
	    }
		return transaction;
	 }
	 
	/**
	 * Creates a connection to the database using the specified driver, connection url, username and
	 * password.
	 * 
	 * @return
	 * 	Connection
	 * @throws DatabaseException
	 */
	 protected Connection createConnection() throws DatabaseException {
		 try {
			 Class.forName("com.mysql.jdbc.Driver").newInstance();
		     Connection conn = DriverManager.getConnection("jdbc:mysql://66.172.33.253:3306/"+MYSQL_DB,MYSQL_USER,MYSQL_PW );
		      conn.setAutoCommit(false);
		      conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);
	
		      return conn;
      	} catch (Exception e) {
    		//Slog.error(e, "DB Error");
    		throw new DatabaseException(e);
      	}
	 }
	 
	 public void createAccount(String username, String password, String email, String bday) throws InstantiationException, IllegalAccessException, ClassNotFoundException {  
		    Connection con = null; 
		    java.sql.Date bd = null;
		    java.util.Date d = new java.util.Date();
		    long t = d.getTime();
		    java.sql.Timestamp date = new java.sql.Timestamp(t);
		    date.setNanos(0);
		    bd = bd.valueOf(bday);
		    String ip = getIP();
		    
		    String query = "";
		    //66.172.33.253
		    try {
		    	Class.forName("com.mysql.jdbc.Driver").newInstance();
		    	con = DriverManager.getConnection("jdbc:mysql://localhost:3306/"+MYSQL_DB,MYSQL_USER,MYSQL_PW );
		    	if (! con.isClosed())
		    		System.out.println("Successfully connected");
		    	Statement stmt = con.createStatement();
		    	Transaction trans = new JDBCTransaction(createConnection());

		    	if(userExists(trans, "login", username)) {
		    		System.out.println("error");
		    	} else {
		    		query =SQL_TBL_LOGIN_INS + 
		        	"'" + username + 
		        	"','" + password + 
		        	"','" + email + 
		        	"','" + ip +
		        	"','" + bday +
		        	"','" + date + "')";
		    		
		    		stmt.execute(query);
		    		loggedIn = true;
		    	}
		      
		        if(con != null)
		        	con.close();

		    } catch(SQLException e) {e.printStackTrace();} catch (DatabaseException e) { e.printStackTrace();}
		  }
	 
	/**
	 * Creates a new character for a player in the database.
	 * @return
	 * 	True if the creation was successful, false if it failed
	 * @throws DatabaseException
	 * @throws SQLException
	 */
	 public boolean newCharacter( Transaction trans, Statistics stats, int accountID, String name, String race, String job, 
			 				int hair, int hcolor, int ccolor) throws DatabaseException, SQLException {
		trans=new JDBCTransaction(createConnection());
		if(!loggedIn)
			return false;
		if(validString(name))/* && !password.equals("")) */ {
			try{
			  Connection connection = ((JDBCTransaction)trans).getConnection();
		      Statement statmnt = connection.createStatement();
		      String query = SQL_CHARS_NC + "'"+name+"';";
		      ResultSet result = statmnt.executeQuery(query);

		      if(result.next()) {
		    	  return false;
		      } else {
		       /**
		        TODO: Store password as hash. Currently It is stored as a string for initial testing.
		        password = Hash.hash(password);
		         */
		    //	query = SQL_TBL_CHARS_INS + "'" + name.toLowerCase() + "','"+ password +"','"+email+"', 'newbie', 'enabled', '"+race+"', '"+
		    //			Class.toLowerCase()+"', '"+hp+"', '"+maxhp+"', '"+mp+"', '"+maxmp+"', '"+stre+"', '"+inte+
		    //			"', '"+dext+"', '"+agil+"', '"+vita+"', '"+luck+"', '"+image+"');";
		    	
		    	statmnt.execute(query);
		      }
	      }catch(SQLException sqle) {
	    	//  Slog.error("Error: "+sqle);
	    	  throw new DatabaseException(sqle);
	      }
		}
		return true;
	}

	/**
	 * Returns the amount of player's currently in the game
	 * 
	 * @param trans
	 * 	The current Transaction
	 * @return
	 * 	The current player count
	 * @throws DatabaseException
	 */
	public int getPlayerCount(Transaction trans) throws DatabaseException {
	    try {
	      Connection connection = ((JDBCTransaction)trans).getConnection();
	      Statement stmt = connection.createStatement();
	      String query = "select count(*) as amount from users;";
	      ResultSet result = stmt.executeQuery(query);

	      if(result.next()) {
	        return result.getInt("amount");
	      }
	      
	      return 0;
	    } catch(SQLException sqle) {
	      throw new DatabaseException(sqle);
	    }
	}
	
	/**
	 * Checks to see if a requested username is already taken
	 * 
	 * @param trans
	 * 	The current Transaction
	 * @param username
	 * 	The requested username
	 * @return
	 * 	True if the username already exists, false if it doesn't
	 * @throws DatabaseException
	 */
	public boolean userExists(Transaction trans, String table, String username) throws DatabaseException{
		try {
		      if(!validString(username)) {
		    	throw new SQLException("Trying to use invalid characters at username:'"+username+"'");
		      }
		      String query = "";
			  Connection connection = ((JDBCTransaction)trans).getConnection();
			  Statement stmt = connection.createStatement();
			  if(table.equalsIgnoreCase("login")) {
				  query = SQL_LOGIN_NC + "'"+username+"';";
			  } else if(table.equalsIgnoreCase("characters")) { 
				  query = SQL_CHARS_NC + "'"+username+"';";
			  }
			  ResultSet result = stmt.executeQuery(query);
	
		      if(result.next()) {
		    	  if(result.getInt("amount")!=0) {
		    		  return true;
		          }
		      }
		      	return false;
	      } catch(SQLException sqle){
	    	  throw new DatabaseException(sqle);
	      }
	}
	
	/**
	 * Checks the user's password to see if it matches the one stored in the database
	 * 
	 * @param trans
	 * 	The current Transaction
	 * @param username
	 * 	The player's username
	 * @param password
	 * 	The player's password
	 * @return
	 * 	True if the user's password matches, false if the password is incorrect
	 * @throws DatabaseException
	 * @throws SQLException
	 */
	public boolean authUser(Transaction trans, String username, String password) throws DatabaseException, SQLException	{
		trans=new JDBCTransaction(createConnection());
	  	Connection connection = ((JDBCTransaction)trans).getConnection();
	    Statement stmt=connection.createStatement();
	    String p;
	    
	    if(!validString(username))
	      throw new SQLException("Trying to use invalid characters at username:'"+username+"'");
	    
	    String query = SQL_LOGIN_CHECKPW + "'" + username + "';";
	    ResultSet result = stmt.executeQuery(query);
	    if(result.next()) {
	      p = result.getString("user_pass");
	      	if (password.equals(p)) {
	      		return true;
	      	} 
	    }
		  return false;
	}

	/**
	 * Finds the user's privilege value from the database
	 * 
* @param trans
	 * 	The current Transaction
	 * @param username
	 * 	The player's username
	 * @return
	 * 	The integer value of the associated privilege level
	 * 
	 * @throws SQLException
	 * @throws DatabaseException
	 */
	public int getPrivs(Transaction trans, String username) throws SQLException, DatabaseException {
		trans=new JDBCTransaction(createConnection());
		Connection connection = ((JDBCTransaction)trans).getConnection();
		Statement stmt=connection.createStatement();
		int x = 0;
	
	    if(!validString(username))
	    	throw new SQLException("Trying to use invalid characters at username(admin check):'"+username+"'");
	
	    String query = "select privs from users where username like '"+username+"';";
	    ResultSet result = stmt.executeQuery(query);
	    if(result.next()) {
	    	String p = result.getString("privs");
	    	if      (p.equalsIgnoreCase("newbie")){x = 1;}
	    	else if (p.equalsIgnoreCase("regular")){x = 2;}
	    	else if (p.equalsIgnoreCase("champion")){x = 3;}
	    	else if (p.equalsIgnoreCase("moderator")){x = 4;}
	    	else if (p.equalsIgnoreCase("admin")){x = 5;}
	    } else {}
	    
	     return x;
	}
	
	/**
	 * Determines whether or not a user is an admin
	 * 
	 * @param trans
	 * 	The current Transaction
	 * @param username
	 * 	The player's username
	 * @return
	 * 	True if the user is an admin, false if the user isn't
	 * @throws SQLException
	 * @throws DatabaseException
	 */
	public boolean getAdmin(Transaction trans, String username) throws SQLException, DatabaseException {
		if (getPrivs(trans, username) == 5)
			return true;
		 else 
			return false; 
	  }
	
	/**
	 * Returns the user's image value from the database
	 * 
	 * @param trans
	 * 	The current Transaction
	 * @param username
	 * 	The player's username
	 * @return
	 * 	The string value representing the 8 digit image value
	 * @throws SQLException
	 * @throws DatabaseException
	 */
	public String getImage(Transaction trans, String username) throws SQLException, DatabaseException {
		String image = "00000000";
		trans=new JDBCTransaction(createConnection());
		Connection connection = ((JDBCTransaction)trans).getConnection();
			Statement stmt=connection.createStatement();
			String query = "select image from users where username like '"+username+"';";
		ResultSet result = stmt.executeQuery(query);
		
		if(result.next()){
		    image = result.getString("image");
		}
		
		//Slog.record("-"+username+"'s Image: "+ image);
		
		return image;
	}
	
	public boolean getEnabled(Transaction trans, String username) throws SQLException {
		 Connection connection = ((JDBCTransaction)trans).getConnection();
		 Statement stmt=connection.createStatement();

		    if(!validString(username)){
		      throw new SQLException("Trying to use invalid characters at username(status check):'"+username+"'");
		    }
		    String query = "select status from users where username like '"+username+"';";
		    ResultSet result = stmt.executeQuery(query);
		    if(result.next()){
		      String p = result.getString("status");
		      if (p == "enabled") return true;	
		    }else{}
		     return false;
	}
		  	
	public static String EscapeString(String text){
	    StringBuffer result=new StringBuffer();

	    for(int i=0;i<text.length();++i) {
	      if(text.charAt(i)=='\'' || text.charAt(i)=='\"' || text.charAt(i)=='\\'){
	        result.append("\\");
	      }
	      result.append(text.charAt(i));
	    }
	    return result.toString();
	}

	public static String UnescapeString(String text){
	    StringBuffer result=new StringBuffer();
	    for(int i=0;i<text.length();++i) {
	    	if(text.charAt(i)!='\\' || (text.charAt(i)=='\\' && text.charAt(((i-1)>0?i-1:0))=='\\')) {
	    		result.append(text.charAt(i));
	    	}
	    }
	    return result.toString();
	}
	
    public boolean validString(String string){
		if (string == null)
			return false;
		if (string.equals("")
			|| string.length() > NAME_CAP
			|| string.toLowerCase().equalsIgnoreCase("god")
			|| string.toLowerCase().equalsIgnoreCase("default")
			|| string.toLowerCase().startsWith("admin")
			|| string.toLowerCase().startsWith("moderator")
			|| string.toLowerCase().equalsIgnoreCase("dusk")
		)
			return false;

		String strValid = "0123456789][_'#";
		char[] letters = string.toCharArray();
		char[] validChars = strValid.toCharArray();
		boolean blnValid = true;

		for(int n=0; n<letters.length;n++) {
			if (!java.lang.Character.isLetter(letters[n])) {
				blnValid = false;
				for(int i=0; i<validChars.length;i++) {
					if (letters[n] == validChars[i]) {
						blnValid = true;
					}
				}
			}
		}
		if (!blnValid) {
			return false;
		}

	    if(string.indexOf('\\')!=-1) return false;
	    if(string.indexOf('\'')!=-1) return false;
	    if(string.indexOf('"')!=-1) return false;
	    if(string.indexOf('%')!=-1) return false;
	    if(string.indexOf(';')!=-1) return false;
	    if(string.indexOf(':')!=-1) return false;
	    if(string.indexOf('#')!=-1) return false;
	    return true;
	}
	
	private int getPlayerId(String username) throws SQLException, DatabaseException{
		Transaction trans=new JDBCTransaction(createConnection());
	    Connection connection = ((JDBCTransaction)trans).getConnection();
	    Statement stmt=connection.createStatement();
	    int ACCT_ID;

	    if(!validString(username)) {
	    	throw new SQLException("Trying to use invalid characters at username:'"+username+"'");
	      }
	    String query = "select id from users where username like '"+username+"';";
	    ResultSet result = stmt.executeQuery(query);
	    if(result.next()) {
	    	ACCT_ID = result.getInt("id");
	    } else {
	    	ACCT_ID = -1;
	    }
	    return(ACCT_ID);
	}
	
	public int getRegionCount(Transaction trans) throws SQLException, DatabaseException {
		int amount;
		trans=new JDBCTransaction(createConnection());
		Connection connection = ((JDBCTransaction)trans).getConnection();
		Statement stmt=connection.createStatement();

	    String query = "select count(*) as amount from regions;";
	    ResultSet result = stmt.executeQuery(query);
	    if(result.next()) {
	    	amount = result.getInt("amount");
	    }else{
	     return 0;
	    }
	    return amount;
	}
	
    public void saveUserStats(String username,
    						  double x,
    						  double y, 
    						  int level, 
    						  int experience,
    						  int gold,
    						  int hp, 
    						  int maxhp, 
    						  int mp, 
    						  int maxmp, 
    						  int strength, 
    						  int intellect,
    						  int agility, 
    						  int dexterity, 
    						  int vitality, 
    						  int luck,
    						  String image,
    						  int region,
    						  HashMap hashInv) throws DatabaseException, SQLException{
		Transaction trans = new JDBCTransaction(createConnection());
		Connection connection = ((JDBCTransaction)trans).getConnection();
			Statement stmt=connection.createStatement( ResultSet.TYPE_SCROLL_INSENSITIVE,
                    								   ResultSet.CONCUR_UPDATABLE);
				  String query = "SELECT * FROM users WHERE username like '"+username+"'";
				  ResultSet result = stmt.executeQuery(query);//executeQuery(query);
				  
				    if(result.next()){
				    	result.updateDouble("x", x);
				    	result.updateDouble("y", y);
				  //  	result.updateString("race", race);
				  //  	result.updateString("class", Class);
				  //  	result.updateString("privs", privs);
				  //  	result.updateString("status", status);
				    	result.updateInt("level", level);
				    	result.updateInt("experience", experience);
				    	result.updateInt("gold", gold);
				    	result.updateInt("hp", hp);
				    	result.updateInt("maxhp", maxhp);
				    	result.updateInt("mp", mp);
				    	result.updateInt("maxmp", maxmp);
				    	result.updateInt("strength", strength);
				    	result.updateInt("intellect", intellect);
				    	result.updateInt("agility", agility);
				    	result.updateInt("dexterity", dexterity);
				    	result.updateInt("vitality", vitality);
				    	result.updateInt("luck", luck);
				    	result.updateString("image", image);
				    	result.updateInt("region", region);
				    	result.updateRow();
				    }
				    
				    
				    String query2 = "SELECT id FROM users WHERE username like '"+username+"'";
					  ResultSet result2 = stmt.executeQuery(query2);
					  if(result2.next()) {
					    	ACCT_ID = result2.getInt("id");  
					  }
				   // saveInventory(id,hashInv);

	}
    
	public void saveUserStats(String username,
								  double x,
								  double y, 
								  int level, 
								  int experience,
								  int gold,
								  int hp, 
								  int maxhp, 
								  int mp, 
								  int maxmp, 
								  int strength, 
								  int intellect,
								  int agility, 
								  int dexterity, 
								  int vitality, 
								  int luck, 
								  String image,
								  int region) throws DatabaseException, SQLException{
					Transaction trans = new JDBCTransaction(createConnection());
					Connection connection = ((JDBCTransaction)trans).getConnection();
					Statement stmt=connection.createStatement( ResultSet.TYPE_SCROLL_INSENSITIVE,
					  								   ResultSet.CONCUR_UPDATABLE);
					String query = "SELECT * FROM users WHERE username like '"+username+"'";
					ResultSet result = stmt.executeQuery(query);//executeQuery(query);
					
					  if(result.next()){
					  	result.updateDouble("x", x);
					  	result.updateDouble("y", y);
					//  	result.updateString("race", race);
					//  	result.updateString("class", Class);
					//  	result.updateString("privs", privs);
					//  	result.updateString("status", status);
					  	result.updateInt("level", level);
					  	result.updateInt("experience", experience);
					  	result.updateInt("gold", gold);
					  	result.updateInt("hp", hp);
					  	result.updateInt("maxhp", maxhp);
					  	result.updateInt("mp", mp);
					  	result.updateInt("maxmp", maxmp);
					  	result.updateInt("strength", strength);
					  	result.updateInt("intellect", intellect);
					  	result.updateInt("agility", agility);
					  	result.updateInt("dexterity", dexterity);
					  	result.updateInt("vitality", vitality);
					  	result.updateInt("luck", luck);
					  	result.updateString("image", image);
					  	result.updateInt("region", region);
					  	result.updateRow();
					  }
	}
	
	public void saveInventory(String name, HashMap hashInv) throws DatabaseException, SQLException {	
		Vector<Integer> slots = new Vector<Integer>();
		Vector<Integer> remove = new Vector<Integer>();
		int ID = getPlayerId(name);
		int slot;
		
		Transaction trans = new JDBCTransaction(createConnection());
		Connection connection = ((JDBCTransaction)trans).getConnection();
			Statement stmt=connection.createStatement( ResultSet.TYPE_SCROLL_INSENSITIVE,
                    								   ResultSet.CONCUR_UPDATABLE);
				  String query = "SELECT * FROM inventory WHERE id like '"+ID+"'";
		ResultSet result = stmt.executeQuery(query);
		if(!result.next()) {
			newInventory(trans,ID,hashInv);
		}else{
			result.beforeFirst();
			do {
					if(result.next()) {
				    	slot = result.getInt("slots");
				    	if (hashInv.containsKey(slot)){
				    		slots.add(slot);
				    	}else{
				    		remove.add(slot);
				    	}	
					}
			} while(!result.isLast());
			
			for(int r = 0;r<remove.size();r++){
				slot = remove.get(r);
				try{
						query =	"DELETE FROM inventory WHERE id="+ID+" AND slots="+slot+";";
						stmt.execute(query);
				} catch(Exception e) {
//					Slog.error(e,e.getLocalizedMessage());
				}
			}
				  
			for(int s = 0;s<slots.size();s++){
				slot = slots.get(s);
				if (hashInv.containsKey(slot)){
					query =	"UPDATE inventory SET slots="+slot+",item="+hashInv.remove(slot)+ " WHERE id="
							+ID+" AND slots="+slot+";";
					stmt.execute(query);
				}
			}
			if(!hashInv.isEmpty())
				newInventory(trans,ID,hashInv);
		}
	}

	private void newInventory(Transaction trans,int ID, HashMap hashInv) throws DatabaseException {
		trans=new JDBCTransaction(createConnection());
		try {
			  Connection connection = ((JDBCTransaction)trans).getConnection();
		      Statement statmnt = connection.createStatement();
		    //  ResultSet result = statmnt.executeQuery(query);
		 for(int f = 0;f<hashInv.size();f++) {     
		      String query = "INSERT INTO inventory(id, slots, item) " +
		      		"values('"+ID+"','"+hashInv.keySet().toArray()[f]+"','"+hashInv.values().toArray()[f]+"');";
		      statmnt.execute(query);
		 }
	    } catch(SQLException sqle) {
	    	//  Slog.error(sqle,sqle.getLocalizedMessage());
	      
	    	  throw new DatabaseException(sqle);
	      }
	}
	
	public String getIP() {
		URL whatismyip;
		String ip = "127.0.0.1";
		try {
			whatismyip = new URL("http://automation.whatismyip.com/n09230945.asp");
			BufferedReader in = new BufferedReader(new InputStreamReader(whatismyip.openStream()));

			ip  = in.readLine(); //you get the IP as a String
			
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ip;
		} catch (IOException e) {
			e.printStackTrace();
			return ip;
		}
		
		return ip;
	}

	public void getCharacterInfo(int char_id, Player chr) throws SQLException, DatabaseException {
		if(!loggedIn)
			return;
		if(ACCT_ID == -1)
			return;
		
		Transaction trans = new JDBCTransaction(createConnection());
		
		Connection connection = ((JDBCTransaction)trans).getConnection();
		Statement stmt=connection.createStatement();

	    String query = SQL_CHARS_LOAD + "'" + char_id + "')";
	    
	    ResultSet result = stmt.executeQuery(query);
	    if(result.next()) {
	    	chr.NAME = result.getString("name");
	    	chr.JOB = eng.vctJobs.get(result.getInt("job"));
	    	chr.BASE_LVL = result.getInt("base_level");
	    	chr.JOB_LVL = result.getInt("job_level");
	    	chr.CUR_EXP = result.getLong("base_exp");
	    	chr.CUR_JOB_EXP = result.getLong("job_exp");
	    	chr.ZENY = result.getInt("zeny");
	    	chr.stats.setSTR(result.getInt("str"));
	    	chr.stats.setAGI(result.getInt("agi"));
	    	chr.stats.setVIT(result.getInt("vit"));
	    	chr.stats.setINT(result.getInt("int"));
	    	chr.stats.setDEX(result.getInt("dex"));
	    	chr.stats.setLUK(result.getInt("luk"));
	    	chr.stats.setMAXHP(result.getInt("max_hp"));
	    	chr.stats.setHP(result.getInt("hp"));
	    	chr.stats.setMAXSP(result.getInt("max_sp"));
	    	chr.stats.setSP(result.getInt("sp"));
	    	chr.STAT_POINTS = (result.getInt("status_point"));
	    	chr.SKILL_POINTS = (result.getInt("skill_point"));
	    	chr.PARTY_ID = result.getInt("party_id");
	    	chr.GUILD_ID = result.getInt("guild_id");
	    	chr.RACE = eng.vctRaces.get(result.getInt("race"));
	    	chr.HAIR_ID = result.getInt("hair");
	    	chr.HAIR_COLOR_ID = result.getInt("hair_color");
	    	chr.MAIN_COLOR_ID = result.getInt("clothes_color");
	    	chr.WEAPON_ID = result.getInt("weapon");
	    	chr.SHIELD_ID = result.getInt("shield");
	    	chr.HEAD_TOP_ID = result.getInt("head_top");
	    	chr.HEAD_MID_ID = result.getInt("head_mid");
	    	chr.HEAD_BOTTOM_ID = result.getInt("head_bottom");
	    	chr.ROBE_ID = result.getInt("robe");
	    	chr.LAST_MAP_ID = result.getString("last_map");
	    	chr.LAST_X = result.getInt("last_x");
	    	chr.LAST_Y = result.getInt("last_y");
	    	chr.SAVE_MAP_ID = result.getString("save_map");
	    	chr.SAVE_X = result.getInt("save_x");
	    	chr.SAVE_Y = result.getInt("save_y");
	    	chr.stats.setSTR_BON(result.getInt("str_b"));
	    	chr.stats.setAGI_BON(result.getInt("agi_b"));
	    	chr.stats.setVIT_BON(result.getInt("vit_b"));
	    	chr.stats.setINT_BON(result.getInt("int_b"));
	    	chr.stats.setDEX_BON(result.getInt("dex_b"));
	    	chr.stats.setLUK_BON(result.getInt("luk_b"));
	    	chr.stats.setHP_BON(result.getInt("hp_b"));
	    	chr.stats.setSP_BON(result.getInt("sp_b"));
	    	chr.stats.setAVD(result.getInt("avd"));
	    	chr.stats.setAVD_BON(result.getInt("avd_b"));
	    	chr.stats.setMND(result.getInt("mnd"));
	    	chr.stats.setMND_BON(result.getInt("mnd_b"));
	    	chr.stats.setRES(result.getInt("res"));
	    	chr.stats.setRES_BON(result.getInt("res_b"));
	    }else{
	    	return;
	    }
	}
	
	public void getRaceInfo(int raceID) throws SQLException, DatabaseException {
		Race race = null;
		String rname;
		int[] base = new int[12];
		float spd;
		
		Transaction trans = new JDBCTransaction(createConnection());
		
		Connection connection = ((JDBCTransaction)trans).getConnection();
		Statement stmt=connection.createStatement();

	    String query = SQL_RACE_LOAD + "'" + raceID + "')";
	    
	    ResultSet result = stmt.executeQuery(query);
	    if(result.next()) {
	    	rname		= result.getString("name");
	    	base[0] 	= result.getInt("hp");
	    	base[1] 	= result.getInt("mp");
	    	base[2] 	= result.getInt("str");
	    	base[3] 	= result.getInt("vit");
	    	base[4] 	= result.getInt("dex");
	    	base[5] 	= result.getInt("agi");
	    	base[6] 	= result.getInt("avd");
	    	base[7] 	= result.getInt("int");
	    	base[8] 	= result.getInt("mnd");
	    	base[9] 	= result.getInt("res");
	    	base[10]	= result.getInt("rt");
	    	base[11] 	= result.getInt("luk");
	    	spd		 	= result.getFloat("spd_adjust");	
	    }else{
	    	eng.LOG.printError("MySQL Error loading job ID:" + raceID, null);
	    	return;
	    }
	    
    	race = new Race(raceID, rname, base, spd);
    	eng.vctRaces.put(raceID, race);
    	eng.LOG.printMessage(Log.INFO, "Loaded '" + rname + " Race' ID#[" + raceID + "]");
	}
	
	public void getJobInfo(int jobID) throws SQLException, DatabaseException {
		Job job = null;
		String jname, strRaces, strWeapons;
		Vector<Integer> r = new Vector<Integer>();
		Vector<Integer> w = new Vector<Integer>();
		double[] rates = new double[15];
		int rt;
		
		Transaction trans = new JDBCTransaction(createConnection());
		
		Connection connection = ((JDBCTransaction)trans).getConnection();
		Statement stmt=connection.createStatement();

	    String query = SQL_JOBS_LOAD + "'" + jobID + "')";
	    
	    ResultSet result = stmt.executeQuery(query);
	    if(result.next()) {
	    	jname		= result.getString("name");
	    	strRaces 	= result.getString("races_allowed");
	    	strWeapons 	= result.getString("weapons_allowed");
	    	rates[0] 	= result.getDouble("hp_rate");
	    	rates[1] 	= result.getDouble("mp_rate");
	    	rates[2] 	= result.getDouble("str_rate");
	    	rates[3] 	= result.getDouble("vit_rate");
	    	rates[4] 	= result.getDouble("dex_rate");
	    	rates[5] 	= result.getDouble("agi_rate");
	    	rates[6] 	= result.getDouble("avd_rate");
	    	rates[7] 	= result.getDouble("int_rate");
	    	rates[8] 	= result.getDouble("mnd_rate");
	    	rates[9] 	= result.getDouble("res_rate");
	    	rates[10] 	= result.getDouble("luk_rate");
	    	rates[11] 	= result.getDouble("atk_rate");
	    	rates[12] 	= result.getDouble("def_rate");
	    	rates[13] 	= result.getDouble("spd_adjust");
	    	rt			= result.getInt("base_rt");
	    }else{
	    	eng.LOG.printError("MySQL Error loading job ID:" + jobID, null);
	    	return;
	    }
	    r = parseCSVString(strRaces);
	    w = parseCSVString(strWeapons);
	    
    	job = new Job(jobID, jname, r, w, rates, rt);
    	eng.vctJobs.put(jobID, job);
	}
	
	/**
	 * @param i
	 * @param name
	 * @throws DatabaseException 
	 * @throws SQLException 
	 */
	public Object getConfig(int i, String name) {
		String str 	= "";
		int in 		= 0;
		long lng 	= 0;
		double dbl 	= 0;
		boolean bln = false;
		try {
			Transaction trans=new JDBCTransaction(createConnection());
			Connection connection = ((JDBCTransaction)trans).getConnection();
			Statement stmt=connection.createStatement();
		    
			String query = SQL_CONFIG_GET + "'" + name + "')";
		    
		    ResultSet result = stmt.executeQuery(query);
		    if(result.next()) {
				switch(i) {
					case(SQL_BLN):{
						bln = result.getBoolean("value");
						return bln;
					}
					case(SQL_INT):{
						in = result.getInt("value");
						return in;
					}
					case(SQL_DBL):{
						dbl = result.getDouble("value");
						return dbl;
					}
					case(SQL_LNG):{
						lng = result.getLong("value");
						return lng;
					}
					case(SQL_STR):{
						str = result.getString("value");
						return str;
					}
				}			
		    } else {
		    	eng.LOG.printError("MySQL Error loading config: name = " + name + " type = " + i, null);
		    	return null;
		    }
		} catch (DatabaseException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public Vector<Integer> parseCSVString(String vals) {
		Vector<Integer> vct = new Vector<Integer>();
		String[] s = vals.split(",");
		int val;
		
		for(int x = 0; x < s.length; x++) {
			val = Integer.parseInt(s[x]);
			vct.add(val);
		}
		return vct;
	}
}