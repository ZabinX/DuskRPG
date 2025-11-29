class QueueObject extends Object
{
	Object o;
	QueueObject nextObject;
	QueueObject prevObject;

	public QueueObject(Object o)
	{
		this.o = o;
		nextObject = null;
		prevObject = null;
	}

	public void setNext(QueueObject o)
	{
		nextObject = o;
	}

	public void setPrev(QueueObject o)
	{
		prevObject = o;
	}

	public Object getObject()
	{
		return o;
	}
	
	public QueueObject next()
	{
		return nextObject;
	}

	public QueueObject prepend(QueueObject qo)
	{
		qo.setNext(this);
		this.setPrev(qo);
		return qo;
	}

	public QueueObject remove()
	{
		if (prevObject != null)
			prevObject.setNext(nextObject);
		if (nextObject != null)
			nextObject.setPrev(prevObject);
		return nextObject;
	}
}
