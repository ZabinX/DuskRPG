/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/

/*
Special Thanks to:

Randall Leeds for the following code portions
as well as many other small changes and deprecation fixes:
Float/Unfloat

Joe Alloway for shadowed text and the !set command
*/

import java.applet.*;

public class duskclient extends Applet
{
	public void init()
	{
		new Dusk(this);
	}
}