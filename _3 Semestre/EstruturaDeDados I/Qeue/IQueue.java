public interface IQueue
{
    public boolean isEmpty();
    public boolean isFull();
    public Object enqueue(Object x);
    public Object dequeue();
    public Object peek();
    public String toString();
}
