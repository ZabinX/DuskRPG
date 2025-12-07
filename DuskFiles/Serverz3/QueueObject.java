import java.io.Serializable;

class QueueObject extends Object implements Serializable
{
	private QueueObject next;
	private Serializable object;

	QueueObject(Serializable o)
	{
        object = o;
		next = null;
	}

	Serializable getObject()
	{
        return object;
	}

	synchronized QueueObject next()
	{
        return next;
	}

	synchronized void append(QueueObject qo)
	{
        next = qo;
	}

	synchronized QueueObject prepend(QueueObject qo)
	{
		qo.next = this;
        return qo;
	}

	synchronized QueueObject remove()
	{
		QueueObject qo = next;
		next = null;
        return qo;
	}

}
