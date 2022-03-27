public class SelectionSort 
{
    public static void main(String[] args) 
    {
        int[] vetor = {8, 6, 1, 3, 7, 5, 2, 4};
        selectionSort(vetor);

        for(var v : vetor)
            System.out.print(" | " + v);
    }    

    public static void selectionSort(int[] vetor) 
    {
        for(int i=0; i < vetor.length - 1; i++) 
        {
            int minima = i;
            for(int k = i + 1; k < vetor.length; k++) 
            {
                if(vetor[k] < vetor[minima])
                    minima = k;
            }
            
            int temp = vetor[i];
            vetor[i] = vetor[minima];
            vetor[minima] = temp;
        }
    }

}
