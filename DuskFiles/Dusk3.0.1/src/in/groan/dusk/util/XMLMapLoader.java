/***************************************************************************
 *     Dusk Graphical MUD RPG - XMLMapLoader.java
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

import java.awt.Toolkit;
import java.io.BufferedReader;
import java.io.FileReader;
import java.net.URL;
import java.util.StringTokenizer;
import java.util.Vector;

/**
 <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">
   <properties>
	<comment>Support Email</comment>
	<entry key="email.support">donot-spam-me@nospam.com</entry>
   </properties>
   
   
<?xml version="1.0" encoding="UTF-8"?>
<map version="1.0" orientation="orthogonal" width="100" height="100" tilewidth="32" tileheight="32">
 <tileset firstgid="1" name="tileset" tilewidth="32" tileheight="32">
  <image source="../../DuskClient/tileset.png" width="320" height="960"/>
 </tileset>
 <layer name="Ground" width="100" height="100">
  <data encoding="csv">
 *
 */
public class XMLMapLoader {	
	private static final String[] LAYER_NAME = new String[4];

	public ResourceLoader loader = new ResourceLoader();
	Vector<String> info = new Vector<String>();
	
	String TKN_T_IMG = "image";
	String TKN_LAYER = "layer";
	String TKN_D = "data";

	short[][][] map;
	
	int MAP_W = 0, MAP_H = 0, TILE_W = 0, TILE_H = 0;
	int IMG_W = 0, IMG_H = 0;
	private boolean blnMap = false, blnTSet = false, blnImg = false, blnLayer = false, blnData = false ;
	private int CUR_LAYER = 0;

	public XMLMapLoader(int a) {
		System.out.println( loader.resourceExists("res/tileset.png"));
	}
	
	public XMLMapLoader() {
		try {
			String strFile = loader.getResource("res/map1.tmx").getPath();
			BufferedReader br = new BufferedReader(new FileReader(strFile));
			
			String strLine = "";
			StringTokenizer st = null, xmlst = null;
			int lineNumber = 0, tokenNumber = 0;

			while( (strLine = br.readLine()) != null) {
				lineNumber++;

				xmlst = new StringTokenizer(strLine);
				while(xmlst.hasMoreTokens()) {
					String str = xmlst.nextToken();
					if((str.startsWith("</") || (str.startsWith("<?")))){} 
					if(str.startsWith("<map")) blnMap  = true;
					if(str.startsWith("<tileset")){ blnTSet  = true; blnMap = false;}
					if(str.startsWith("<image")) { blnImg  = true; blnTSet = false; blnMap = false;}
					if(str.startsWith("<layer")) { CUR_LAYER++; blnData = false; blnLayer = true; blnImg = false; blnTSet = false; blnMap = false;}
					if(str.startsWith("<data")) { blnData = true; blnLayer = false; blnImg = false; blnTSet = false; blnMap = false;}
					
					
					if(str.startsWith("tilewidth") && (blnMap)) {
						TILE_W = getValue(str);
					} else if(str.startsWith("tileheight") && (blnMap)) {
						TILE_H = getValue(str);
					} else if(str.startsWith("width") && (blnMap)) {
						MAP_W = getValue(str);
					} else if(str.startsWith("height") && (blnMap)) {
						MAP_H = getValue(str);
						map = new short[4][MAP_W][MAP_H];
					} else if(str.startsWith("width") && (blnImg)) {
						IMG_W = getValue(str);
					} else if(str.startsWith("height") && (blnImg)) {
						IMG_H = getValue(str);
					} else if(str.startsWith("name") && (blnLayer)) {
						String ln = str.replace("\"", "");
						LAYER_NAME[CUR_LAYER] = ln.split("=")[1];
						//System.out.println("Map[" + CUR_LAYER + "][" + MAP_W + "][" + MAP_H + "]  Created Image w = " + IMG_W + "  h = " + IMG_H);
					} else if (blnData) {
						st = new StringTokenizer(strLine, ",");
						info.add(st.nextToken());
						short tile = 0;
						int x = 0;
						int y = 0;
						while(st.hasMoreTokens()) {
							tokenNumber++;
							tile = getShort(st.nextToken());
							map[CUR_LAYER][x][y] = tile;
							//System.out.println("Map[" + CUR_LAYER + "][" + x + "][" + y + "] = " + tile);
							if(x++ > (MAP_W - 1)) {
								x = 0;
								y ++;
							}
						}
					}
				}
					tokenNumber = 0;
			}
		} catch(Exception e) {
			System.out.println("Exception while reading csv file: " + e);
			e.printStackTrace();
		}
	}
	
	
	/**
	 * @param nextToken
	 * @return
	 */
	private short getShort(String nextToken) {
		// TODO Auto-generated method stub
		return Short.parseShort(nextToken);
	}

	/**
	 * @param str
	 * @return
	 */
	private int getValue(String str) {
		if(!str.contains("=")) { return 0; }
		str = str.replaceAll("\"","");
		str = str.replaceAll(">","");
		str = str.replaceAll("/","");
		
		return Integer.parseInt(str.split("=")[1]);
	}
	
	public short[][][] getMap() {
		return map;
	}

	public static void main(String[] args) {
		new XMLMapLoader(1);
	}
}