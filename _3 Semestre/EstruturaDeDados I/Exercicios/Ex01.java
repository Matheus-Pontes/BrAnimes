import java.util.Random;

public class Ex01 
{
    public static void main(String[] args) 
    {
        double[] array = {1, 2, 3, 4, 5};

        visualizationArray(
            array
        );
        
        System.out.println(" ");
        System.out.println("------------------------------");

        randomArrayPosition(array);

        visualizationArray(
            array
        );
    }

    public static void randomArrayPosition(double array[]) 
    {
        Random random = new Random();

        for(int i=0; i < array.length; i++)
        {
            int randomIndex = random.nextInt(array.length);;
            
            double auxiliary = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = auxiliary;
        }
    }

    public static void visualizationArray(double[] array) 
    {
        for(var value : array)
            System.out.print(" | " + value);
    }
}