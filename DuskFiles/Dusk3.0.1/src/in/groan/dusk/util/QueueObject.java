package in.groan.dusk.util;
public class QueueObject {
	public QueueObject next;
	public Object object;

	QueueObject(Object o)
	{
        object = o;
		next = null;
	}

	public Object getObject()
	{
        return object;
	}

	public synchronized QueueObject next()
	{
        return next;
	}

	public synchronized void append(QueueObject qo)
	{
        next = qo;
	}

	public synchronized QueueObject prepend(QueueObject qo)
	{
		qo.next = this;
        return qo;
	}

	public synchronized QueueObject remove()
	{
		QueueObject qo = next;
		next = null;
        return qo;
	}

}