public class Queue implements IQueue 
{
    private int total = 0;
    private int head = -1;
    private int tail = -1;
    private Filmes queue[];
    private int MAX;

    Queue() {};

    public Queue(int max) 
    {
        this.MAX = max;
        this.queue = new Filmes[MAX];
        total = 0;
        head = -1;
        tail = -1;
    }

    public int getMAX() {
        return MAX;
    }

    public void setMAX(int mAX) {
        MAX = mAX;
    }

    public Filmes[] getQueue() {
        return queue;
    }

    public void setQueue(Filmes[] queue) {
        this.queue = queue;
    }

    @Override
    public Filmes dequeue() {
        if (!isEmpty()) 
        {
            Filmes objeto = queue[head];
            if(++head >= MAX)
                head = 0;
            total--;

            if (total == 0)
            {
                head = -1;
                tail = -1;
            }

            return objeto;
        }
        else
            return null;
    }

    @Override
    public Filmes enqueue(Filmes x) 
    {
        if(!isFull() && x != null)
        {
            if (++tail >= MAX)
                tail = 0;
            if (head == -1)
                head = tail;
            queue[tail] = x;
            total++;
            return x;
        }
        else    
            return null;
    }   

    @Override
    public boolean isEmpty() 
    {
        return total == 0;    
    }

    @Override
    public boolean isFull() 
    {
        return total == MAX;
    }

    @Override
    public Object peek()
    {
        if (!isEmpty())
            return queue[head];
        else    
            return null;
    }

    @Override
    public String toString()
    {
       if (!isEmpty()) 
       {
           String saida = "";
           int pos = head;
           for(int i=1; i <= total; i++)
           {
                saida += queue[pos].toString();
                
                if (i != total)
                    saida += ", ";
                pos++;
                
                if (pos >= MAX)
                    pos = 0;
           }

           return ("F: " + "[ " + saida + " ] ");
       }
       else 
       {
            return ("F: [ ]"); 
       }
    }
}
