public class QuickSort
{
    public static void main(String[] args)
    {
        // Vetor 
        int[] array = {5, 8, 9, 1, 4, 7, 2, 3, 10, 6};

        // Ordenando vetor
        quicksort(array, 0, array.length - 1);

        // Visualizando vetor ordenado.
        showArray(array);
    }

    public static void quicksort(int[] array, int start, int end) 
    {
        if(start < end) 
        {
            int pivotIndex = positionIndex(array, start, end);
            quicksort(array, start, pivotIndex - 1);
            quicksort(array, pivotIndex + 1, end);
        }
    }

    public static int positionIndex(int[] array, int start, int end) 
    {
        int pivot = array[start];
        int i = start + 1;
        int j = end;
        
        while(i <= j)
        {
            if (pivot > array[i]) // descrescer apenas inverter o sinal
                i++;
            else if (array[j] > pivot) // descrescer apenas inverter o sinal
                j--;
            else 
            {
                int change = array[i];
                array[i] = array[j];
                array[j] = change;
                i++;
                j--;
            }
        }

        array[start] = array[j];
        array[j] = pivot;

        return j;
    }

    public static void showArray(int[] array) 
    {
        for (var value : array)
            System.out.print(" | " + value);
    }

}