/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/
import duskz.protocol.DuskMessage;


class NetQueue
{
	NetQueueObject qHead;
	NetQueueObject qTail;

	public synchronized void push(DuskMessage o)
	{
		NetQueueObject qTemp = new NetQueueObject(o);
		if (qTail != null)
			qTail.setNext(qTemp);
		qTail = qTemp;
		if (qHead == null)
			qHead = qTail;
	}

	public synchronized DuskMessage pop()
	{
		DuskMessage o = null;
		if (qHead != null)
		{
			o = qHead.getObject();
			qHead = qHead.next();
			if (qHead == null)
				qTail = null;
		}
		return o;
	}

	public boolean isEmpty()
	{
		if (qHead == null)
			return true;
		return false;
	}
}
