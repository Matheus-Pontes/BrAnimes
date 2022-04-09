public interface IStack 
{
    public boolean isEmpty();
    public boolean isFull();

    public Object push(Object x);
    public Object pop();
    public Object top();

    public String toString();
}
