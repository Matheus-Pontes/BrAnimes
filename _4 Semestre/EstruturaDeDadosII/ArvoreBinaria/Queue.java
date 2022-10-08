public class Queue 
{
    private int total = 0;
    private int head = -1;
    private int tail = -1;
    private int MAX;
    private NodeTree queue[];
    
    Queue() {};

    Queue(int Max) { this.MAX = Max; this.queue = new NodeTree[this.MAX]; }

    public int getMAX() {
        return MAX;
    }

    public void setMAX(int max) {
        MAX = max;
    }

    public NodeTree[] getQueue() {
        return queue;
    }

    public void setQueue(NodeTree[] queue) {
        this.queue = queue;
    }

    public NodeTree dequeue() {
        if (!isEmpty()) 
        {
            NodeTree objeto = queue[head];
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

    public NodeTree enqueue(NodeTree x) 
    {
        if(x != null)
        {
            if (++tail >= MAX)
                tail = 0;
            if (head == -1)
                head = tail;
            this.queue[tail] = x;
            total++;
            return x;
        }
        else    
            return null;
    }   


    public boolean isEmpty() 
    {
        return total == 0;    
    }


    public boolean isFull() 
    {
        return total == MAX;
    }

    public NodeTree peek()
    {
        if (!isEmpty())
            return queue[head];
        else    
            return null;
    }

    // @Override
    // public String toString()
    // {
    //    if (!isEmpty()) 
    //    {
    //        String saida = "";
    //        int pos = head;
    //        for(int i=1; i <= total; i++)
    //        {
    //             saida += queue[pos].toString();
                
    //             if (i != total)
    //                 saida += ", ";
    //             pos++;
                
    //             if (pos >= MAX)
    //                 pos = 0;
    //        }

    //        return ("F: " + "[ " + saida + " ] ");
    //    }
    //    else 
    //    {
    //         return ("F: [ ]"); 
    //    }
    // }
}
