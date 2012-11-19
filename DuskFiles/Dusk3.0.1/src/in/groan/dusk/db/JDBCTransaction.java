/* $Id: JDBCTransaction.java,v 1.1 2010/01/24 15:59:44 javalou Exp $ */
/***************************************************************************
 *                      (C) Copyright 2003 - Marauroa                      *
 ***************************************************************************
 ***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
package in.groan.dusk.db;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBCTransaction extends Transaction
  {
  private Connection connection;
  public JDBCTransaction(Connection connection)
    {
    this.connection = connection;
    }

  public void setConnection(Connection connection)
    {
    this.connection = connection;
    }

  public Connection getConnection()
    {
    return connection;
    }

  public void begin() throws TransIOException
    {
    try
      {
      Statement stmt=connection.createStatement();
      stmt.execute("start transaction;");
      }
    catch(SQLException e)
      {
      throw new TransIOException(e.getMessage(),e);
      }
    }
  
  public void commit() throws TransIOException
    {
    try
      {
      connection.commit();
      }
    catch(SQLException e)
      {
      throw new TransIOException(e.getMessage(),e);
      }
    }
  
  public void rollback()
    {
    try
      {
      connection.rollback();
      }
    catch(SQLException e)
      {      }
    }
  
  public boolean isValid()
    {
    boolean valid = false;

    if(connection!=null)
      {
      try
        {
        if(!connection.isClosed())
          {
          Statement stmt = connection.createStatement();
          String query = "show tables";
          stmt.executeQuery(query);
          valid = true;
          }
        }
      catch(SQLException sqle)
      {}
      }
    return valid;
    }
  }
