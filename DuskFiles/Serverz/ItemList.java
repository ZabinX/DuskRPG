import java.util.Hashtable;
import java.io.Serializable;
import java.util.Iterator;
import java.util.Map;

public class ItemList extends Hashtable<String, LifoQueue<Item>> implements Serializable {
	public synchronized void addElement(Item o) {
		String strName = o.strName.toLowerCase();
		LifoQueue<Item> qStore = super.get(strName);
		if (qStore == null) {
			qStore = new LifoQueue<Item>();
			super.put(strName, qStore);
		}
		qStore.push(o);
	}

	public synchronized int getElementCount(String strName) {
		try {
			return (int) super.get(strName.toLowerCase()).size();
		} catch (NullPointerException e) {
			return 0;
		}
	}

	public synchronized int getElementCount() {
		return super.size();
	}

	public synchronized Item removeElement(String strName) {
		try {
			LifoQueue<Item> qStore = super.get(strName.toLowerCase());
			Item itmStore = qStore.pop();
			if (qStore.size() < 1) {
				super.remove(strName.toLowerCase());
			}
			return itmStore;
		} catch (NullPointerException e) {
			return null;
		}
	}

	public synchronized Item getElement(String strName) {
		try {
			LifoQueue<Item> qStore = super.get(strName.toLowerCase());
			return qStore.firstElement();
		} catch (NullPointerException e) {
			return null;
		}
	}

	public String print() {
		StringBuffer invBuffer = new StringBuffer();
		for (Map.Entry<String, LifoQueue<Item>> entry : entrySet()) {
			LifoQueue<Item> qStore = entry.getValue();
			if (qStore != null && qStore.size() > 0) {
				Item itmStore = qStore.firstElement();
				if (itmStore != null) {
					invBuffer.append("" + (char) 3).append(qStore.size()).append(" ").append(itmStore.strName)
							.append("\n");
				}
			}
		}
		return invBuffer.toString();
	}

	public String toString() {
		StringBuffer invBuffer = new StringBuffer();
		for (Map.Entry<String, LifoQueue<Item>> entry : entrySet()) {
			LifoQueue<Item> qStore = entry.getValue();
			if (qStore != null) {
				QueueObject<Item> qoStore = qStore.head();
				while (qoStore != null) {
					Item itmStore = qoStore.getObject();
					if (itmStore != null) {
						invBuffer.append(itmStore.toString()).append("/\n");
					}
					qoStore = qoStore.next();
				}
			}
		}
		return invBuffer.toString();
	}
}

