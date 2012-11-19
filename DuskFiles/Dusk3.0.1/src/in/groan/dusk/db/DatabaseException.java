/***************************************************************************
*     Dusk Graphical MUD RPG - DatabaseException
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

public class DatabaseException extends Exception
  {
  private static final long serialVersionUID = -2764012454573117520L;

  public DatabaseException(Throwable cause)
    {
    super(cause);
    }
  
  public DatabaseException(String message, Throwable cause)
    {
    super(message,cause);
    }
  
  /** Do not use
   * <code>throw new GenericDatabaseException(cause.getMessage())</code>.
   * use:
   * <code>throw new GenericDatabaseException(cause)</code>.
   */
  public DatabaseException(String message)
    {
    super(message);
    }  
  }
	