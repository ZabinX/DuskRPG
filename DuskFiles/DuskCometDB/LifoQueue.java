/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/
import java.io.Serializable;

class LifoQueue implements Serializable
{
	QueueObject head;
	int size=0;

	public synchronized void push(Object o)
	{
		QueueObject qo = new QueueObject(o);
		if(head == null) head = qo;
		else head = head.prepend(qo);
		size++;
	}

	public synchronized Object pop()
	{
		if(head == null) return null;
		Object o = head.getObject();
		head = head.remove();
		size--;
		return o;
	}

	public synchronized Object firstElement()
	{
		if (head != null)
			return head.getObject();
		return null;
	}

	public boolean isEmpty()
	{
		if (head == null)
			return true;
		return false;
	}

	public int size()
	{
		return size;
	}

	public QueueObject head()
	{
		return head;
	}
}
