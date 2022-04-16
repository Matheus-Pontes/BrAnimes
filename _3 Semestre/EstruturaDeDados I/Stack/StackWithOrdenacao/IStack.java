public interface IStack 
{
    public Object push(Object x);
    public Object pop();
    public Object top();
    public boolean isEmpty();
    
    public String toString();
}
