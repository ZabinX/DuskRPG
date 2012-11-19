/***************************************************************************
 *     Dusk Graphical MUD RPG - ClassPathLocation.java
 *                     ------------v 3.0.1--------------
 *     author               : Louis Agoglia 
 *     date                 : Jul 5, 2011
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
package in.groan.dusk.util;

import java.io.InputStream;
import java.net.URL;

/**
 * A resource location that searches the classpath
 * 
 * @author kevin
 */
public class ClasspathLocation implements ResourceLocation {
	/**
	 * @see org.newdawn.slick.util.ResourceLocation#getResource(java.lang.String)
	 */
	public URL getResource(String ref) {
		String cpRef = ref.replace('\\', '/');
		return ResourceLoader.class.getClassLoader().getResource(cpRef);
	}

	/**
	 * @see org.newdawn.slick.util.ResourceLocation#getResourceAsStream(java.lang.String)
	 */
	public InputStream getResourceAsStream(String ref) {
		String cpRef = ref.replace('\\', '/');
		return ResourceLoader.class.getClassLoader().getResourceAsStream(cpRef);	
	}
}