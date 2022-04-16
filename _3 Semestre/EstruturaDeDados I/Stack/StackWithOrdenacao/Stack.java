public class Stack implements IStack
{
    private Node top = null;
    private int count;

    Stack() 
    {
        top = null; 
    }
    
    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public boolean isEmpty() 
    {
        return (top == null);
    }

    public Node push(Object x) 
    {
        try 
        {
            if(x == null)
                return null;
            Node novo = new Node();
            novo.setValue(x);
            novo.setNext(top);
            top = novo;
            this.count++;
            return novo;
        }
        catch(Exception e) 
        {
            return null;
        }
    }

    public Object pop() 
    {
        if (top == null)
            return null;
        
        Object valor = top.getValue();
        top = top.getNext();
        this.count--;
        return valor;
    }

    public Object top() 
    {
        if(top == null)
            return null;
        else    
            return top.getValue();
    }

    public String toString() 
    {
        if(!isEmpty())
        {
            String resp = "";
            Node aux = top;

            while(aux != null) 
            {
                resp = aux.getValue().toString() + resp;
                aux = aux.getNext();
                if(aux != null)
                    resp = ", " + resp; 
            }
            
            return ("Stack: [ " + resp + " ]");
        }   
        else    
            return ("Stack: [ ]");
    }
}
