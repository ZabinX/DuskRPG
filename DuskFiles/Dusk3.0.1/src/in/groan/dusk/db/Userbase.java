/***************************************************************************
 *     			Dusk Graphical MUD RPG - Userbase.java
 *                     ------------v 3.0.1--------------
 *     author               : Louis Agoglia 
 *     date                 : Jun 30, 2011
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

public interface Userbase
  {
  public boolean validString(String string);
 
  public void setAccountStatus(Transaction trans, String username, String status) throws DatabaseException;

  public int getPlayerCount(Transaction trans) throws DatabaseException;

  public boolean hasPlayer(Transaction trans, String username) throws DatabaseException;

  public void addPlayer(Transaction trans, String username, byte[] password,String email) throws Exception, DatabaseException;

  public Transaction getTransaction() throws DatabaseException;
  }
