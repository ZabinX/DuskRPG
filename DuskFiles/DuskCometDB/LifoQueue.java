import java.io.Serializable;

public class LifoQueue<T> extends Object implements Serializable
{
	private long lNumEntries;
	private QueueObject<T> head = null;

	public LifoQueue()
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

	public synchronized QueueObject<T> head()
	{
		return head;
	}

	public synchronized T firstElement()
	{
		if (head == null)
		{
			return null;
		}
		return head.getObject();
	}

	public synchronized void push(T o)
	{
		QueueObject<T> qo = new QueueObject<T>(o);

		if (head == null)
		{
			head = qo;
		} else
		{
			head = head.prepend(qo);
		}
		lNumEntries++;
	}

	public synchronized T pop()
	{
		if (head == null)
		{
			return null;
		}
		QueueObject<T> qo = head;
		head = head.remove();
		lNumEntries--;
		return qo.getObject();
	}
}

