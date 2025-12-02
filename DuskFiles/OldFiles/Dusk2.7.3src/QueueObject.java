class QueueObject extends Object
{
	private QueueObject next;
	private Object object;

	QueueObject(Object o)
	{
        object = o;
		next = null;
	}

	Object getObject()
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