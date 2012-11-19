How to Run a Dusk Game on Windows for Dummies (edited by Warfire for even dummier people :))

If you need to contact me with questions or help on scripting my email is Cellzero1@aol.com.  If you need help on /this/ new file Warfire's email is Warfire@mailandnews.com


or Instant Message me using AOL Instant Messenger. MY AIM name is Cellzero1.   Warfire's AIM name is DNWWarfire.

This help file is going to be written like a Dummies Book. All Credit goes to Tom Weingarten for the coding...

scripting...blah...blah...and all that. To make it short and Sweet "Good Job"


***NOTE**** There will be a help file for people with routers, proxies and Hubs to be included soon.

***NOTE 2*** Comments in this file by Warfire will be marked with *-*Warfire*-*, then the comment.  These comments do not reflect the views of Cellzero1 or Tom Weingarten; they are just my ramblings to make things a little less confusing for people new to running programs like Dusk and Apache.


The Dusk game is really meant to be run on a Linux computer but it can be done on a Windows computer as well. I run windows and as most of us know....Windows sucks. Plain and Simple.


*-*Warfire*-* It is just as easy in Windows once you know how, but Linux would be the best.  But then Darwin and PPCs (Apple Mac Operating Systems) handle it great as well.  As does BSD etc.


I use it and I hate it and it's Blue Screen Of Death. Anyways.....there are 2 ways to host it. 


Via Internet Web Server ( not web site.)  *-*Warfire*-* This is VITAL to understand, it is NOT POSSIBLE to run Dusk off Geocities, Tripod, 20m or any other free webspace providers that /I/ have seen.  There /are/ a few people who will, and can, host Dusk for a fee.  Email Warfire for a list (address at the top).

Or your own Computer. This is Obviously a help file for a game meant to be run on a windows computer. You can stop reading this if you access the internet using a 56k modem, ISDN, or anything else that requires Dial UP. DSL might be a problem. 

*-*Warfire*-* Having set up 2 Dusks on DSL I have seen it is possible.  I also started 3 Dusk over Modem Dial-Ups so my comments can be used for Modem users! (Now you know why you want to read these comments.)

*-*Warfire*-* The problem with Modem Dial-Ups is that mostly your IP changes every time you disconnect.  So every time you connect you have to set your IP again.  I am currently writing a Visual Basic program to do this for you, if you want to help Beta Test it email me (address at the top).


It's not a problem if you can leave your DSL online 24/7. I recommend you have a Cable Modem.

*-*Warfire*-* I agree, Cable Modems are ideal for Dusk (after all that's what Tom wrote Dusk to run on) but so long as you understand that your Dusk will not always be running (unless you have a dedicated Modem phone line (or understanding parents ;))) and are willing to do a little bit of work you too can run Dusk on a Modem.


Be aware if you host this on your computer there is a chance a hacker can get in and drop a virus or whatnot. If you have a firewall it must be disabled for people to access your site. If you are behind a Proxy...I'm still reading up on how to host a game with it. If you have a Router or Hub don't worry. 

*-*Warfire*-* I personally have run a Dusk server with a software configurable Firewall, Dusk always runs on one port so you can make this available, but unless you know what you are doing then it is best to accept the possible dangers of running a Webserver.

Now....Lets get started.

goto  http://httpd.apache.org/dist/binaries/win32/old/. Download Apache_1_3_14_win32_r2.exe

*-*Warfire*-* There may be newer, supposedly, more stable versions available by the time you read this, they should function the same but if you find things are not where you expect them with a different version then that's your beans :)

Install it and then don't do anything more with it. Inside the Apache directory find a folder called htdocs. 

*-*Warfire*-* For a standard install this would be in "c:\Program Files\Apache Group\Apache\htdocs\" but YMMV.

First off...unpack the Dusk 2.x.Tar using WinZip which is probably done cause you're reading this.

*-*Warfire*-* If you don't have WinZip yet then I recommend you get it from http://winzip.com/, it really is essential for most work on the Internet.  

Its recommended you extract it to your desktop. Now.. Rename the extracted dusk folder from whatever it is to just Dusk.

*-*Warfire*-* The desktop is just a folder like any other so there will do, but Java is flexible with locations so once you have Dusk running smoothly, there shouldn't be any problems with moving it afterwards to somewhere less in the way.

Open the Client.html found within the Dusk 2.x Folder. When the page has opened in the Internet Browser window. It's recommended you open this using Internet Explorer. 

*-*Warfire*-* As of around Dusk-2.4 ish client.html and duskclient.jar are in a new directory /_for_web_page/client.html and /_for_web_page/duskclient.jar so use these directories whenever you see client.html or duskclient.jar here.

Now...when the page loads ..right click so it opens the toolbar. Scroll Down and click on VIEW SOURCE. It should open a text window. If you know HTML you can edit your page anyway you like.....but first....scroll down till you see this...


<div align="left"> 

    <applet code="duskclient.class" archive="duskclient.jar" width="0" height="0">

		<param name="address" value="YOUR IP HERE"> 

		<param name="port" value="PORT YOU HAVE YOR SERVER SET TO HERE">

    </applet

  </div>

<hr>

</body>

</html>


What you really need to focus on is this:


		<param name="address" value="YOUR IP HERE"> 

		<param name="port" value="PORT YOU HAVE YOR SERVER SET TO HERE">

    

Don't delete or change anything else. Delete the writing: YOUR IP HERE  but leave the quotes.


Write in your IP. To find your IP address goto http://www.whatismyip.com . The Numbers on top are your IP. It should be 12 numbers. Fill that into where you deleted YOUR IP HERE.

*-*Warfire*-* Due to the wonders of the Internet your IP may be less than 12 numbers but it will be in the form: abc.def.ghi.jkl where any letter is 0-9.  To run the server so ONLY YOU can access it, for testing etc, you can set your IP as 127.0.0.1 which is the standard number for "localhost" which you don't need to understand.  Just put that in to have no one else on the Internet play your game.

Delete the writing : PORT YOU HAVE YOUR SERVER SET TO HERE . Write in the number 7420. Leave the Quotes as well. It should now look like this: 


		<param name="address" value="123.123.123.123"> 

		<param name="port" value="7420">


*****NOTE**** I just used 123.123.123.123 as a fake IP. It should be your own IP. If you are behind a router or Hub you MUST goto that site written above to find out your REAL IP. 

WINIPCFG will only give you your NETWORK IP. You need the internet IP. So goto that site to find it. 


Ok....Save this and close it. Then Close the Explorer Window. Now...scroll down in the Dusk Folder and look for a file named Prefs. Open it with Notepad. 

*-*Warfire*-* Again, this file was moved with a few others into /conf/prefs but it works the same.  Just a bit more organised.

*-*Warfire*-* A few people have asked me "how to open prefs in notepad" and it really is simple.  Open notepad (usually Start/Programs/Accessories/Notepad) then goto File/Open and goto 'Look in:' select Desktop right at the top. Then double click on the folder where you have Dusk and then again on conf then type prefs in the 'File name:' box.  Hit enter and it should pop up in the window.

*-*Warfire*-* Or you can double click prefs in your Dusk Folder and select Notepad in the little window that pops up.

*******NOTE******** MAKE SURE THE BOX THAT SAYS " ALWAYS OPEN THIS TYPE OF FILE USING THIS PROGRAM"

IS UNCHECKED!!! OR YOU WILL BE SCREWED!

*-*Warfire*-* A fair warning :)


The prefs should be opened in the notepad window. The Settings for the port should be 7420.


Where it asks for the RC address.....delete   http://wherever.you.put.your/rc/ 



Replace it with http:// (your internet IP here)/rc/

*-*Warfire*-* Remember you found your IP earlier.

*-*Warfire*-* Warfire has a hint :) for modem users, if your IP changes it can be a pain, so go to www.dns2go.com and you can sign up for a service that gives you a domain name like www.yourname.dns2go.com and they have a lot of choices for the last part as well, then you can put http://yourname.dns2go.com/rc/ where you set the address to the one they give you.  Then you never need to adjust the rcaddress when your IP changes.  The client.html will not use this unfortunately, so you will need to do that manually or wait until I have finished my client.html generator program.

Make sure you leave the / on the end. Here's an example:


http://123.123.123.123/rc/


Go further down and edit what you like. They're Self Explanatory. Its Recommended you make the Titlecap size at most 100...... 30 is kinda small. Save this. DONT CLICK SAVE AS. CLICK SAVE!


If it tries to make you save it as a .Txt find a way to make it NOT do that. It happens sometimes.
I'm not sure on how to do that. Sorry....I'm good...but not that good. :) 

*-*Warfire*-* I am :) If it does that then save it as a .txt file (there is no point arguing with Windows, if it says to do something, you do it then fix it later).  Goto your Dusk Folder and in conf you will see a new file prefs.txt along with the old prefs and some other files.  Right-click on prefs and select 'Rename'.  Rename the file prefs.old then press enter.  Right-click on prefs.txt and select 'Rename'.  Enter 'prefs' (with no quotes) then press enter.  
You should now have a prefs.old that was the file that came with Dusk and prefs that is your file.  Now reward yourself with a cookie.

Now...time to test your work so far. You need to download and install Java Runtime Environment 2 if you don't already have it. Look on yahoo for it. I think the site is http://java.sun.com 

Make Sure you Download Java JDK and NOT Java SDK. YOU WANT JDK!!!! Unpack and install it.

*-*Warfire*-* It is a VERY large file.  But I have yet to find a way around it.  If I remember rightly you can download the JDK-1.3, which is the newest at http://java.sun.com/j2se/1.3/download-windows.html for Windows or you can pick your own Operating System from the list at http://java.sun.com/j2se/1.3 

Once you have done that....open a MS-DOS Shell. If you don't know what a Shell is...for an Operating System...its like opening 2 Operating Systems while using one. So....in other words..

*-*Warfire*-* Just imagine MS-DOS as Windows without the pictures.  If you try really hard sometimes you even see things that look like Windows in it.

Open an MS-DOS Window. If you don't know what the other shell is.....goto the beach. To Open an MS-DOS Shell if you don't know how to...click on  Start > Programs > MS-DOS PROMPT

*-*Warfire*-* Later on we will make a special "Batch File" that will do all this for you so you can start Dusk easily, but you need to know what is going on, so listen (or read) closely.

When the Dos Windows opens... type CD\ and hit enter so you have a C:\ prompt. Someone asked me what a Sea Prompt was. He claimed to have used windows for 2 years. If you have used Windows for more than 6 months and don't know what a C:\ Prompt is...... You Outta be shot...Killed...then Cremated and your ashes sprinkled over a CessPool. 

*-*Warfire*-* Or else Bill and his friends have done a good job at hiding things that he decided I would have to look at.

Your Ms-Dos window should look like this:


C:\WINDOWS> cd\


C:\>


now type cd\windows\desktop\(name of ur dusk folder) 

*-*Warfire*-* You named it earlier, just after you used WinZip, remember?


*I'm using dusk for the name of my games folder.


It should look like this now.


C:\WINDOWS\Desktop\dusk>


Next to the C:\Windows\desktop\dusk> type java DuskServer then press enter.


it should look like this:


C:\WINDOWS\Desktop\dusk>java DuskServer


Make sure you spell DuskServer with the capitals on D and S.


If it works...this should be displayed :


Loading Prefs...

Loading Map...

Converting map to shortmap format....

Map Loaded 10/10

Loading Merchants

Loading Signs

Loading Mobs

Starting Ticks....


*-*Warfire*-* The new DuskServer-2.4+ works a little different and you may get messages like "No onBoot script found".  Don't worry about these.  Mostly if you can see "Starting Ticks...." then it has worked.  If you get "Bad command or file name" it means that the JDK was not installed correctly.  You would be best to stop reading this and read the help files with the JDK.  Most of the time you would need to put a line in your autoexec.bat file, but the new JDK should do that automatically.  If you are getting problems with that email Warfire (address at the top).


IF this comes up.. Congratulations...So far things have worked.

*-*Warfire*-* Well done!

Now.... inside the htdocs folder in the Apache Directory...make a folder named rc

*-*Warfire*-* This is where your images and sounds are going to go!

DO NOT PUT IT IN YOUR DUSK FOLDER! JUST DIRECTLY IN THE htdocs FOLDER! ALSO MAKE SURE THE FOLDER NAME IS IN LOWERCASE!


Inside the rc folder....make 2 more folders...name one of them images and the other audio

*-*Warfire*-* I told you so :)

Inside the audio folder make another folder called sfx.


Goto http://dusk.wesowin.org/newrc/images


Download a copy of all 3 files. Sprites.gif, Map.gif, Players.gif.



*******NOTE******** ALL IMAGES MUST BE GIF FORMAT!

*-*Warfire*-* These are the pictures that show up in Dusk.  Sprites.gif is the file that stores the pictures of things like Mobs and Merchants as well as signs and pets.  Map.gif stores all the map tiles, like the floor and the walls.  Player.gif stores nothing but the images of players.  Humans, Elves and Dark Elves.

Copy them into the images folder.



Now to make some changes in your windows settings. Open Start > Settings > Control Panel > Network


Click ON the TCP/IP of your Ethernet card then click on properties. Click the DNS tab.


Under host name type myhost and under domain name type mydomain.


The DNS number isn't needed. Apply and restart your computer so it can accept the new changes.

*-*Warfire*-* In the majority of cases this isn't needed with Modems but you can do it too, just to be sure.  If you are over a network some of these setting may already exist.

When Windows starts up again and finishes loading.... its time to test the Apache Server! :)


By this point for me it had been 2 weeks, 400 bangs of my head on the desk and Gallons of Coffee :)

*-*Warfire*-* The first time I did this I didn't put in any images and expected DuskServer to run on it's own. Ahh, the joy of youth :) Don't be afraid that you have done something amazingly stupid here, and nothing works.  Take a deep breath, check everything we have done so far, and if it still doesn't work then email Warfire (address at the top).  I can bet I have done everything you can have done at least twice.


goto Start > Programs > Apache Web Server > Apache as a Service > Start Service


An Ms-Dos window should open and the server will start. If you get an error saying:


Apache.exe Couldn't Determine Servers Fully Qualified Domain Name. 
Using 127.0.0.1 as Server name!

Don't worry. It happens. You might need to play with your DNS settings a bit.

*-*Warfire*-* I read somewhere that 90% of people get that, it's no big deal.

To test it...open an Internet Browser. Type in Http://(ur Ip as address)


Example : Http://123.123.123.123


You should see a page with the Apache symbol and telling about apache. If so it's setup perfect!

*-*Warfire*-* If not, try going to http://127.0.0.1 and you should see the same page.  If you /still/ see nothing then you have a problem with Apache, read the documentation at http://www.apache.org/. If you see something at http://127.0.0.1 but not at your http://(your IP) then you are either running a Firewall that is blocking your IP or else your ISP does.  I have heard this happens with Cable Modems sometimes.  Again, you should read the documentation at http://www.apache.org and temporarily disable any Firewalls (at your own risk!) to see if they are causing the problem.  If this doesn't help email your ISP with a message something like "I am trying to run Apache Web Server on my machine and I cannot see the page at http://(your ip) but I can at http://127.0.0.1" which should tell them that you have a problem, and hopefully they can come up with a solution.

Now...make a folder in the htdocs folder...and name it Dusk. Into it copy the files Client.html duskclient.jar from the Dusk folder on your desktop. 

*-*Warfire*-* As I said earlier these files are now in /_for_web_page/ in the newer DuskServers so make sure you copy from there.

Now...start up the DuskServer again. 

You remember? The First thing we did with Ms-Dos. 

*-*Warfire*-* We will do the "Batch File" to make it easier soon :)

When everything finishes loading....goto your client page in the browser window.


Example: Http://123.123.123.123/Dusk/client.html


ALSO!!! MAKE SURE U SPELL THE FOLDER WHERE THE CLIENT IS EXACTLY AS YOU NAMED THE FOLDER!


ITS CASE SENSITIVE!!!!

*-*Warfire*-* So dusk and DUSK are not the same as Dusk.

The client page on your computer should come up and the Java Applet should load bringing up the screen where you enter your name and password. 

*-*Warfire*-* If it doesn't then two things could be wrong: 1. The DuskServer program is not working right.  Make sure you get "Starting Ticks....". If not, read what we said earlier when we started it the first time. 2. Your IP or PORT settings in client.html are wrong.  Double check by opening up the client.html file again, (DO NOT USE THE RIGHT CLICK/VIEW SOURCE METHOD as this file is being treated as not belonging to you, so you cannot edit it.  Open another Internet Browser window and goto "c:\program files\apache group\apache\htdocs\Dusk\client.html" where Dusk is the folder you made just now and the rest is the default, edit as you have to for your system.  Then use the right-click method we used earlier.  Check the settings here; a stray number or letter can cause chaos.

Login and see what happens. 

If you get an error saying -1 images loaded....your Prefs are looking in the wrong place for the rc folder.

*-*Warfire*-* Edit the prefs file as documented earlier.

If you get some Exception.Security message....the game can't get to the resources on your computer. The resources must be on your computer. 

*-*Warfire*-* This error usually means that you have configured something like your IP wrong.  Or that Apache is not working correctly.

You only start with a 10/10 map. To resize it...login as god and the password is password. Teleport to the tile you want the map to end. Type resizemap.

*-*Warfire*-* Teleporting is done with the command "teleport Xlocation Ylocation", for example to get to the very start you type teleport 0 0. To get to the start in New Dusk you would (but, of course only Gods can) type teleport 100 100.

When the map finishes resizing....type save....for help on god commands goto


 http://dusk.wesowin.org/gods.html


Now...if you are behind a router or hub...consult your manual to read  about FOWARDING.


Find a way for your hub or router to forward all Http traffic to your computer. 

If you have a Linksys router like me...you need to turn on Forwarding and DMZ hosting. Once you have setup FOWARDING you need to edit your TCP/IP properties again. 

You need to specify yourself the IP you set your router or hub to Forward traffic to. Then in gateway you need to put in the IP of your router or hub. 

That's Basically it. If you need more help...contact me. *Whew*

*-*Warfire*-* It you have got this far without throwing something or drinking more than 2 jars of coffee waiting for things to download then I will shake your hand.

*-*Warfire*-* You thought I was going to forget about the Batch file didn't you :)  Well, I didn't.  You need to go to the Dusk folder where you run the DuskServer from.  Once you are there right-click and goto new.  Wait for the pop-down menu then select Text Document.  It will appear in the window ready to be named.  Call it startdusk.txt.  Double click it and notepad should open.  Now enter this text : 

@echo off
rem This just tells Dos not to print out our commands, just the results

echo Dusk Server Starting using Warfires' Start Script
rem Prints out some text for the user

java DuskServer
rem This actually starts the DuskServer.  Looks familiar I hope.

It looks worse than it is, the rem command tells Dos to ignore the rest of the line so you can make "REMarks" in the code.

Now you have a text file, not overly useful, but hey.  Now close notepad and right-click on startdusk.txt and select 'Rename'.  Enter startdusk.bat as the name.  In the window that pops up about "changing file extensions" click yes.  Windows was just protecting you from making your text file unreadable, but we have made it into some special, a "Batch File".

Now, when you want to start Dusk all you need to do is double click that file.  Saves all that starting MS-Dos work.  It is left as an exercise for you to make DuskServer log to file if you want it to.

This batch file along with my Client.html program are soon to be hosted on a "Dusk Help" website I am developing.  I will let Tom know when it is finished.

*-*Warfire*-* My comments in this file are to be used as a guide to help you set up a Dusk Server in Windows.  The details given apply mostly to Windows98 but 95 and ME should be similar.  Windows2000 is more than likely to be different but if you are running it I would expect you know more about it than me.  Apple Macs are obviously different, and I have never used one to do anything as complex as set up a Dusk Server, but Darwin should be similar to Linux so Toms' README should help you.  MacOS and the like are totally different.  I have no idea how to use them, but feel free to email me if you have a Dusk question, the idea should be the same.


**--**Warfire's Thanks To:**--**

Tom Weingarten - The creator.
CellZero1 - For this document which I have edited
Wildern - For original help in getting my first Dusk running
Zelto - For giving me the idea to do this.
