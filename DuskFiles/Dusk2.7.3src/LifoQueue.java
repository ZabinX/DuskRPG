public class LifoQueue extends Object
{
	private long lNumEntries;
	private QueueObject head = null;

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
		QueueObject qo = head;
		head = head.remove();
		lNumEntries--;
		return qo.getObject();
	}
}
