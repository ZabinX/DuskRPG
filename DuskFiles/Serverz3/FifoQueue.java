import java.io.Serializable;

public class FifoQueue extends Object
{
	private long lNumEntries;
	private QueueObject head = null;
	private QueueObject tail = null;

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

	public synchronized Serializable firstElement()
	{
		if (head == null)
		{
			return null;
		}
		return head.getObject();
	}

	public synchronized void push(Serializable o)
	{
		QueueObject qo = new QueueObject(o);

		if (head == null)
		{
			head = qo;
			tail = qo;
		} else
		{
			tail.append(qo);
			tail = qo;
		}
		lNumEntries++;
		notify();
	}

	public synchronized Serializable pop()
	{
		while (head==null)
		{
			try
			{
				wait();
			} catch (InterruptedException e) { }
		}
		QueueObject qo = head;
		head = head.remove();
		if (head == null)
		{
			tail = null;
		}
		lNumEntries--;
		return qo.getObject();
	}
}
