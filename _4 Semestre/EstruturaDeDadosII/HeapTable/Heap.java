
public class Heap 
{
    private No[] heapArray;
    private int maxSize;
    private int currentSize;
    
    public Heap(int max) 
    {
        this.maxSize = max;
        this.currentSize = 0;
        this.heapArray = new No[this.maxSize];
    }

    public boolean isEmpty() 
    {
        return this.currentSize == 0 ? true : false;
    }

    public boolean insert(int key) 
    {
        if(this.currentSize == this.maxSize)
            return false;
     
        No newNode = new No(key);
        heapArray[this.currentSize] = newNode;
        heapfyUp(this.currentSize++);
        return true;
    }

    public void heapfyUp(int index) 
    {
        int parent = (index - 1) / 2;
        No temp = heapArray[index];
        
        while(index > 0 && heapArray[parent].getKey() < temp.getKey()) 
        {
            heapArray[index] = heapArray[parent];
            index = parent;
            parent = (parent - 1) / 2;
        }

        heapArray[index] = temp;
    }

    public No remove() 
    {
        No root = heapArray[0];
        heapArray[0] = heapArray[--this.currentSize];
        heapfyDown(0);
        return root;
    }

    public void heapfyDown(int index) 
    {
        int largerChild;

        No top = this.heapArray[index];

        while(index < currentSize / 2) 
        {
            int leftChild = 2 * index + 1;
            int rightChild = leftChild + 1;

            if(rightChild < currentSize && heapArray[leftChild].getKey() < heapArray[rightChild].getKey())
                largerChild = rightChild;
            else
                largerChild = leftChild;

            if (top.getKey() >= heapArray[largerChild].getKey())
                break;

            heapArray[index] = heapArray[largerChild];
            index = largerChild;
        }

        heapArray[index] = top;
    }

    public boolean change(int index, int newValue) 
    {
        if(index < 0 || index >= currentSize)
            return false;

        int oldValue = heapArray[index].getKey();
        heapArray[index].setKey(newValue);

        if(oldValue < newValue)
            heapfyUp(index);
        else
            heapfyDown(index);

        return true;
    }

    public void maxHeapfy(int a[], int inicio, int fim) 
    {
        int maior = inicio;

        int childLeft = 2 * inicio + 1;
        int childRight = 2 * inicio + 2;

        if(childLeft < fim && a[childLeft] > a[inicio])
            maior = childLeft;

        if(childRight < fim && a[childRight] > a[maior])
            maior = childRight;
        
        if(maior != inicio) 
        {
            int temp = a[inicio];
            a[inicio] = a[maior];
            a[maior] = temp;

            maxHeapfy(a, maior, fim);
        }
    }

    public void heapSort(int a[]) 
    {
        for(int i = a.length / 2 - 1; i >= 0; i--){
            maxHeapfy(a, i, a.length);
        }

        for(int k = a.length - 1; k >= 1; k--) {
            int temp = a[0];
            a[0] = a[k];
            a[k] = temp;
            maxHeapfy(a, 0, k);
        }
    }
}


