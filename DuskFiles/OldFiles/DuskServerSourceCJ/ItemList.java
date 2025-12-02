import java.util.Hashtable;
import java.util.Iterator;

public class ItemList extends Hashtable
{
	public boolean contains(String strItemName)
	{
		return super.containsKey(strItemName.toLowerCase());
	}

	public Object get(String strItemName)
	{
		return super.get(strItemName.toLowerCase());
	}

	public void addElement(Item itmStore)
	{
		LifoQueue qTemp;
		if (contains(itmStore.strName))
		{
			qTemp = (LifoQueue)get(itmStore.strName);
			qTemp.push(itmStore);
		} else
		{
			qTemp = new LifoQueue();
			qTemp.push(itmStore);
			super.put(itmStore.strName.toLowerCase(), qTemp);
		}
	}

	public Item removeElement(String strItemName)
	{
		LifoQueue qTemp;
		Item itmStore;
		if (contains(strItemName))
		{
			qTemp = (LifoQueue)get(strItemName);
			itmStore = (Item)qTemp.pop();
			if (itmStore == null || qTemp.size() < 1)
			{
				super.remove(strItemName);
			}
			return itmStore;
		}
		return null;
	}

	/*
	**	This method formats the ItemList for sending to the client
	**	for display of the player's inventory to the player.
	*/
	public String print()
	{
		StringBuffer invBuffer = new StringBuffer();
		Iterator iter = keySet().iterator();
		Item itmStore;
		LifoQueue qStore;
		while(iter.hasNext())
		{
			qStore = (LifoQueue)get(iter.next());
			itmStore = (Item)qStore.firstElement();
			invBuffer.append(""+(char)3).append(qStore.size()).append(" ").append(itmStore.strName).append("\n");
		}
		return invBuffer.toString();
	}

	/*
	**	This method formats the ItemList for saving.
	**	It generates a String that can later be passed
	**	to fromString for populating a new ItemList.
	*/
	public String toString()
	{
		StringBuffer invBuffer = new StringBuffer();
		Iterator iter = keySet().iterator();
		Item itmStore;
		LifoQueue qStore;
		QueueObject qoStore;
		while(iter.hasNext())
		{
			qStore = (LifoQueue)get(iter.next());
			qoStore = qStore.head();
			while(qoStore.next() != null)
			{
				itmStore = (Item)qoStore.getObject();
				invBuffer.append(itmStore.toString()).append("/\n");
				qoStore = qoStore.next();
			}
		}
		return invBuffer.toString();
	}
}
