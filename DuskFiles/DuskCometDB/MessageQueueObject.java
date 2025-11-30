/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/
import duskz.protocol.DuskMessage;

class MessageQueueObject
{
	DuskMessage o;
	MessageQueueObject nextObject;

	public MessageQueueObject(DuskMessage o)
	{
		this.o = o;
	}

	public void setNext(MessageQueueObject o)
	{
		nextObject = o;
	}

	public DuskMessage getObject()
	{
		return o;
	}
	
	public QueueObject next()
	{
		return nextObject;
	}
}

