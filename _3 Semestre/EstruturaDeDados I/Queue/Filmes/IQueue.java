public interface IQueue
{
    public boolean isEmpty();
    public boolean isFull();
    public Filmes enqueue(Filmes x);
    public Object dequeue();
    public Object peek();
    public String toString();
}
