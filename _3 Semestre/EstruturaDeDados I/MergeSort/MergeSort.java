public class MergeSort
{
    public static void main(String[] args) 
    {
        int[] array = {5, 8, 7, 2 ,6, 4, 1, 3};
        int[] arrayAux = new int[array.length];
        
        mergeSort(array, arrayAux, 0, array.length - 1);

        for(var valor : array) 
            System.out.print(" | " + valor);
    }

    public static void mergeSort(int[] array, int[] arrayAux, int start, int end) 
    {
        if(start < end) 
        {
            int middle = ( start + end) / 2;
            mergeSort(array, arrayAux, start, middle);
            mergeSort(array, arrayAux, middle + 1, end);
            mergeArray(array, arrayAux, start, middle, end);
        }
    }

    public static void mergeArray(int[] array, int[] arrayAux, int start, int middle, int end) 
    {
        for (int i=start; i <= end; i++) 
        {
            arrayAux[i] = array[i];
        }
        
        int topleft = start;
        int topRight = middle + 1;

        for(int k=start; k <= end; k++) 
        {
            if (topleft > middle) 
            {
                array[k] = arrayAux[topRight];
                topRight++;
            }
            else if (topRight > end) 
            {
                array[k] = arrayAux[topleft];
                topleft++;

            }
            else if (arrayAux[topleft] < arrayAux[topRight]) 
            {
                array[k] = arrayAux[topleft];
                topleft++;
            }
            else 
            {
                array[k] = arrayAux[topRight];
                topRight++;  

            }
        }
    }

}