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

class QueueObject<T> implements Serializable
{
	T o;
	QueueObject<T> nextObject;
	QueueObject<T> prevObject;

	public QueueObject(T o)
	{
		this.o = o;
		nextObject = null;
		prevObject = null;
	}

	public void setNext(QueueObject<T> o)
	{
		nextObject = o;
	}
	
	public void setPrev(QueueObject<T> o)
	{
		prevObject = o;
	}

	public T getObject()
	{
		return o;
	}
	
	public QueueObject<T> next()
	{
		return nextObject;
	}

	public QueueObject<T> prepend(QueueObject<T> qo)
	{
		qo.setNext(this);
		this.setPrev(qo);
		return qo;
	}

	public QueueObject<T> remove()
	{
		if (prevObject != null)
			prevObject.setNext(nextObject);
		if (nextObject != null)
			nextObject.setPrev(prevObject);
		return nextObject;
	}
}

