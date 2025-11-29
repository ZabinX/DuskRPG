import java.io.Serializable;

public class FifoQueue extends Object implements Serializable
{
	private transient QueueObject head = null;
	private transient QueueObject tail = null;
	private transient long lNumEntries;

	public FifoQueue()
	{
		lNumEntries = 0;
	}

	public synchronized boolean isEmpty()
	{
		return (head==null);
	}

	public synchronized long size()
	{
		return lNumEntries;
	}

	public synchronized QueueObject head()
	{
		return head;
	}

	public synchronized Object firstElement()
	{
		if (head == null)
		{
			return null;
		}
		return head.getObject();
	}

	public synchronized void push(Object o)
	{
		QueueObject qo = new QueueObject(o);

		if (head == null)
		{
			head = qo;
			tail = qo;
		} else
		{
			tail.setNext(qo);
			qo.setPrev(tail);
			tail = qo;
		}
		lNumEntries++;
	}

	public synchronized Object pop()
	{
		if (head == null)
		{
			return null;
		}
		QueueObject qo = head;
		head = head.remove();
		lNumEntries--;
		if (head == null)
			tail = null;
		return qo.getObject();
	}
}
