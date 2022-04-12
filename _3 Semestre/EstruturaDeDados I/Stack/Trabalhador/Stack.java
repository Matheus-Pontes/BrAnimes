public class Stack implements IStack 
{
    private int TOP;
    private int MAX;
    private Object stack[];

    // Constructor padrão, ja pré-definido
    Stack() 
    {
        TOP = -1;
        MAX = 30;
        stack = new Object[MAX];
    }

    // Construtor por parâmetro
    Stack(int values) 
    {
        TOP = -1;
        MAX = values;
        stack = new Object[MAX];
    }

    // Implementação dos metodos da Interface
    @Override
    public boolean isEmpty() 
    {
        return TOP == -1;
    }

    @Override
    public boolean isFull() 
    {
        return TOP == MAX - 1;
    }

    @Override
    public Object push(Object x) 
    {
        if(!isFull()) 
        {
            stack[++TOP] = x;
            return x;
        }
        return null;
    }

    @Override
    public Object pop() 
    {
        return !isEmpty() ? stack[TOP--] : null; 
    }

    @Override
    public Object top() 
    {
        return !isEmpty() ? stack[TOP] : null;
    }


    public String toString () {
        if(!isEmpty()) {
            String message = "";
            for(int i=0; i <= TOP; i++) {
               message += "\n  " + stack[i].toString();
            }
            return "Stack: [ " + message + "\n]";
        }
        else 
            return "Empty stack";
    }    
}
