import java.io.Serializable;

public class ItemLifoQueue extends Object implements Serializable
{
	private long lNumEntries;
	private ItemQueueObject head = null;

	public ItemLifoQueue()
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

	public synchronized ItemQueueObject head()
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

	public synchronized void push(Item o)
	{
		ItemQueueObject qo = new ItemQueueObject(o);

		if (head == null)
		{
			head = qo;
		} else
		{
			head = head.prepend(qo);
		}
		lNumEntries++;
	}

	public synchronized Object pop()
	{
		if (head == null)
		{
			return null;
		}
		ItemQueueObject qo = head;
		head = head.remove();
		lNumEntries--;
		return qo.getObject();
	}
}