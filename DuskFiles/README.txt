This README will explain what these files do.  

The "img" folder contains tilesets that came from "Valyria Tear" and "Hero of Allacrost".  I'm trying to expand it to help out those games while hoping that maybe Dusk will get developed further and be able to use those assets.  

Here's what needs to be fixed on Dusk. 
1.  More map layers and using the Tiled map editor.  
2.  GUI needs to look better.  
3.  Walking animation isn't working right.  
4.  Players should be 64x32 pixels on screen (right now they are 64x64 and resized down to 32x32 to fit on 1 tile!).  
5.  Sprites (mobs) same as players need to be positioned on game different so there could be various monster sizes.

Dusk2.7.3 last offical update ~2003.  

Dusk2.7.3:  The binary Java files (where the magic happens) contains a client(WWW folder) and all the server data files needed to run/host Dusk.  To get Dusk's server running on Ubuntu- all that is needed is Sun Java 6 installed, apache to point the server to localhost(127.0.0.1), and then you just put the client files into apache (/var/www) with this command "sudo cp -r client.html duskclient.jar rc /var/www/dusk"  Then you startup Dusk with this command run in Terminal in the main directory "java -cp . DuskServer".  I will write a helpfile explaining every step on putting the files in the right place on Ubuntu soon...

Dusk2.7.3src:  The source files (where Java programmers work their magic) included is "wildern's" Dusk Map Editor source.

DuskMapEditor, makes it alot easier then walking around in game mapping.  Made to edit Dusk's "shortmap" file.

Dusk3.0.1:  I just found these files at "http://www.ohloh.net/p/duskrpg" it looks like one of the old developers "Lou" was working on this last year(2011)  I actually got in touch with him about a month and a half ago, ATM it's 11-18-2012.  He seems to still be interested in reviving Dusk so he bought/updated the old site dusk.wesowin.org and had forums up October to communicate about Dusk.  It got overrun by spam-bots and went down the beginning of this month.  It's been a few weeks since I last herd from him but I know he is a extreamly busy guy.  I just hope he uploads his latest source files because he made some really good improvements.  He said he made Dusk compatable with Tiled which means he's getting more map layers implemented in game.  Making the GUI more modern looking and working on more fluid walking animation.  I remember him saying he was looking into fast-tracking his new Dusk simply to have it running and he should have java web-start up in a few days.  Looking at 3.0.1 you can obviously see he's rearranged everything and added a bunch of new stuff but I don't see the client in there so those files are kinda incomplete.  If/when Lou makes his newest source files available I'll be sure to upload them here.  If you want to try and contact him his email is "louis.agoglia@gmail.com".

Zabin(xyphoidzabin@gmail.com)
