public class Ex05 
{
    public static void main(String[] args) 
    {
        int array[] = {3, 5, -12, 34, 91, 81, 91, 2, 0, 180, 21, 76, 22, 20, 19, 43, -15, 1, 65};

        quickSortMediana(array, 0, array.length - 1);

        for(var v : array)
            System.out.print(" | " + v);
    }    

    public static void quickSortMediana(int[] array, int start, int end)
    {
        if(start < end) 
        {
            int pivotIndex = partition(array, start, end);
            quickSortMediana(array, start, pivotIndex - 1);
            quickSortMediana(array, pivotIndex + 1, end);
        }
    }
    
    //Método de partição
    private static int partition(int[] array, int start, int end){

        int middle = (start + end) / 2;
        int first = array[start];
        int meio = array[middle];
        int finish = array[end];
        int middleIndex = ordenaQuickSortMediana(start, first, meio, middle, end, finish);;

        changePositions(array, middleIndex, end);

        int pivo = array[end];
        int i = start - 1;
        
        for(int j = start; j <= end - 1; j++){
            if(array[j] >= pivo){
                i = i + 1;
                changePositions(array, i, j);
            }
        }
        
        changePositions(array, i + 1, end);
        return i + 1; 
    }
    
    private static void changePositions(int[] array, int i, int j){
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }    

    public static int ordenaQuickSortMediana(int start, int first, int meio, int middle, int end, int finish)
    {
        int middleIndex = -1;

        if(first < meio){
            if(meio < finish){
                
                middleIndex = middle;
            }else{                
                if(first < finish){
                    
                    middleIndex = end;
                }else{
                    
                    middleIndex = start;
                }
            }
        }else{
            if(finish < meio){
                
                middleIndex = middle;
            }else{
                if(finish < first){
                    
                    middleIndex = end;
                }else{
                    
                    middleIndex = start;
                }
            }
        }

        return middleIndex;
    }

}
