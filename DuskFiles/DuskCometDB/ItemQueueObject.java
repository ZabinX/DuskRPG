import java.io.Serializable;

class ItemQueueObject implements Serializable {
    Item o;
    ItemQueueObject nextObject;

    public ItemQueueObject(Item o) {
        this.o = o;
    }

    public void setNext(ItemQueueObject o) {
        nextObject = o;
    }

    public Item getObject() {
        return o;
    }

    public ItemQueueObject next() {
        return nextObject;
    }

    public ItemQueueObject prepend(ItemQueueObject qo) {
        qo.setNext(this);
        return qo;
    }

    public ItemQueueObject remove() {
        return next();
    }
}