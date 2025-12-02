/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/
import duskz.protocol.DuskMessage;
import java.io.Serializable;

class FifoQueue<T> implements Serializable
{
	QueueObject<T> qHead;
	QueueObject<T> qTail;
	private long lNumEntries;

	public FifoQueue()
	{
		lNumEntries = 0;
	}

	public synchronized void push(T o)
	{
		QueueObject<T> qTemp = new QueueObject<T>(o);
		if (qTail != null)
			qTail.setNext(qTemp);
		qTail = qTemp;
		if (qHead == null)
			qHead = qTail;
		lNumEntries++;
	}

	public synchronized T pop()
	{
		T o = null;
		if (qHead != null)
		{
			o = qHead.getObject();
			qHead = qHead.next();
			if (qHead == null)
				qTail = null;
			lNumEntries--;
		}
		return o;
	}
	
	public boolean isEmpty()
	{
		if (qHead == null)
			return true;
		return false;
	}

	public synchronized long size()
	{
		return lNumEntries;
	}
}

