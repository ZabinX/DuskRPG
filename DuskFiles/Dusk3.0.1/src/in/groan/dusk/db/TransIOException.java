/***************************************************************************
*     Dusk Graphical MUD RPG - TransIOException.java
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

public class TransIOException extends Exception{
  private static final long serialVersionUID = 1L;
  TransIOException(String msg){
    super(msg);
  }
  TransIOException(String msg, Throwable cause){
    super(msg, cause);
  }
}
