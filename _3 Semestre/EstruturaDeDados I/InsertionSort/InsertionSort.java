public class InsertionSort 
{
    public static void main(String[] args)
    {
        int[] vetor = {5, 2, 8, 6, 1, 3, 7, 4};
        
        insertionSort(vetor);
        
        for(var v : vetor) 
            System.out.print(" | " + v);
    }   

    public static void insertionSort(int[] vetor) 
    {
        int i;
        int k;
        int aux;

        for(i = 1; i < vetor.length; i++) 
        {
            aux = vetor[i];
            k = i;

            while( k > 0 && aux < vetor[k - 1])
            {
                vetor[k] = vetor[k - 1];
                k--;
            }

            vetor[k] = aux;
        }
    }
}
