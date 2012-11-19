/***************************************************************************
*     Dusk Graphical MUD RPG - DuskSQL.java
*                     ------------v 3.0.1--------------
*     author               : Louis Agoglia 
*     date                 : 06/30/11
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

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.print.attribute.DateTimeSyntax;

public class DuskSQL implements Constants{
  
  public void createCharacter(Connection con, String username, String password, String email) //throws PlayerAlreadyAddedException, GenericDatabaseException 
  {
  try {
    
    Statement stmt = con.createStatement();
    String query = "select id from player where username like '"+username+"'";

    ResultSet result = stmt.executeQuery(query);

    if(result.next()) {
    	System.out.println("error");
    } else {
      /* We store the hashed version of the password */// password = Hash.hash(password);
      query = "INSERT INTO users(username, password, email, race, class, hp, maxhp, mp, maxmp, strength, intellect, agility, dexterity, vitality, luck) values('"+username+"','"+ password + "','"+email+"','human','warrior','20','20','10','10','5','5','5','5','5','1')";
      stmt.execute(query);
      }
    }
  catch(SQLException sqle) {
	 // System.out.println("error: "+sqle);
    }
  }
  
}