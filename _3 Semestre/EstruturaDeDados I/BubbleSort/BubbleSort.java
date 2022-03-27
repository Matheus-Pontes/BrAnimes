public class BubbleSort 
{
    public static void main(String[] args) 
    {
        int[] vetor = {5, 2, 8, 6, 1, 3, 7, 4};   

        bubbleSort(vetor);

        for(var v : vetor) 
            System.out.print(" | " + v);
    }

    public static void bubbleSort(int[] vetor) 
    {
        if(vetor == null) return;

        for(int i=0; i < vetor.length; i++) 
        {
            for(int k=0; k < vetor.length - 1 - i; k++) 
            {
                if(vetor[k] > vetor[k + 1]) 
                {
                    change(vetor, k);
                }
            }
        }
    }

    public static void change(int[] vetor , int i) 
    {
        int temp = vetor[i];
        vetor[i] = vetor[i + 1];
        vetor[i + 1] = temp;
    }
}