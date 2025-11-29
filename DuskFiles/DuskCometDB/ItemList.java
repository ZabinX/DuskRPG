import java.util.Hashtable;
import java.io.Serializable;
import java.util.Iterator;

public class ItemList extends Hashtable<String, LifoQueue<Item>> implements Serializable
{
	public synchronized void addElement(Item o)
	{
		String strName = o.strName.toLowerCase();
		LifoQueue<Item> qStore;
		qStore = (LifoQueue<Item>)super.get(strName);
		if (qStore == null)
		{
			qStore = new LifoQueue<Item>();
			qStore.push(o);
			super.put(strName, qStore);
		} else
		{
			qStore.push(o);
		}
	}

	public synchronized int getElementCount(String strName)
	{
		try
		{
			return (int)((LifoQueue)super.get(strName.toLowerCase())).size();
		}catch(NullPointerException e)
		{
			return 0;
		}
	}

	public synchronized int getElementCount()
	{
		return super.size();
	}

	public synchronized boolean removeElement(String strName)
	{
		try
		{
			LifoQueue<Item> qStore;
			qStore = (LifoQueue<Item>)super.get(strName.toLowerCase());
			qStore.pop();
			if (qStore.size() < 1)
			{
				super.remove(strName.toLowerCase());
			}
			return true;
		}catch(NullPointerException e)
		{
			return false;
		}
	}

	public synchronized Item getElement(String strName)
	{
		try
		{
			LifoQueue<Item> qStore;
			qStore = (LifoQueue<Item>)super.get(strName.toLowerCase());
			Item itmStore = (Item)qStore.firstElement();
			return itmStore;
		}catch(NullPointerException e)
		{
			return null;
		}
	}

	public String toString()
	{
		String strStore = "";
		Iterator iter = super.keySet().iterator();
		LifoQueue<Item> qStore;
		QueueObject<Item> qoStore;
		Item itmStore;
		while (iter.hasNext())
		{
			qStore = (LifoQueue<Item>)super.get(iter.next());
			qoStore = qStore.head();
			while (qoStore != null)
			{
				itmStore = (Item)qoStore.getObject();
				if (itmStore != null)
				{
					strStore += "item2\n"+itmStore.strName+"\n"+itmStore.lngDurability+"\n"+itmStore.intUses+"\n";
				}
				qoStore = qoStore.next();
			}
		}
		return strStore;
	}

	public String print()
	{
		String strStore = "";
		Iterator iter = super.keySet().iterator();
		LifoQueue<Item> qStore;
		QueueObject<Item> qoStore;
		Item itmStore;
		while (iter.hasNext())
		{
			qStore = (LifoQueue<Item>)super.get(iter.next());
			qoStore = qStore.head();
			if (qoStore != null)
			{
				itmStore = (Item)qoStore.getObject();
				if (itmStore != null)
				{
					strStore += qStore.size()+" "+itmStore.strName+"\n";
				}
			}
		}
		return strStore;
	}
}
