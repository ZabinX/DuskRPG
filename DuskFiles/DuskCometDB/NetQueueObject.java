/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/
import duskz.protocol.DuskMessage;

class NetQueueObject
{
	DuskMessage o;
	NetQueueObject nextObject;

	public NetQueueObject(DuskMessage o)
	{
		this.o = o;
	}

	public void setNext(NetQueueObject o)
	{
		nextObject = o;
	}

	public DuskMessage getObject()
	{
		return o;
	}

	public NetQueueObject next()
	{
		return nextObject;
	}
}
