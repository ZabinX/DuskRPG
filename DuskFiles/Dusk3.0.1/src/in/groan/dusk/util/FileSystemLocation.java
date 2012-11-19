/***************************************************************************
 *     Dusk Graphical MUD RPG - FileSystemLocation.java
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

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

/**
 * A resource loading location that searches somewhere on the classpath
 * 
 * @author kevin
 */
public class FileSystemLocation implements ResourceLocation {
	/** The root of the file system to search */
	private File root;
	
	/**
	 * Create a new resoruce location based on the file system
	 * 
	 * @param root The root of the file system to search
	 */
	public FileSystemLocation(File root) {
		this.root = root;
	}
	
	/**
	 * @see ResourceLocation#getResource(String)
	 */
	public URL getResource(String ref) {
		try {
			File file = new File(root, ref);
			if (!file.exists()) {
				file = new File(ref);
			}
			if (!file.exists()) {
				return null;
			}
			
			return file.toURI().toURL();
		} catch (IOException e) {
			return null;
		}
	}

	/**
	 * @see ResourceLocation#getResourceAsStream(String)
	 */
	public InputStream getResourceAsStream(String ref) {
		try {
			File file = new File(root, ref);
			if (!file.exists()) {
				file = new File(ref);
			}
			return new FileInputStream(file);
		} catch (IOException e) {
			return null;
		}
	}
}
