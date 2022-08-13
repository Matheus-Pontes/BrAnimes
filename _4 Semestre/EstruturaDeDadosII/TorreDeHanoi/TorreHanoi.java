public class TorreHanoi 
{
    public static void main(String[] args) 
    {
        int numeroDeDiscos = 3;
        String baseA = "A";
        String baseB = "B";
        String baseC = "C";

        MoveTorreHanoi(numeroDeDiscos, baseA, baseB, baseC);
    }

    public static void MoveTorreHanoi(int discos, String baseInicial, String baseCentral, String baseDestino) 
    {
        if (discos == 1) 
            System.out.println("Movendo disco: " + discos + " da base " + baseInicial + " para " + baseDestino);
        else 
        {
            MoveTorreHanoi(discos - 1, baseInicial, baseDestino, baseCentral);
            System.out.println("Movendo disco: " + discos + " da base " + baseInicial + " para " + baseDestino);
            MoveTorreHanoi(discos - 1, baseCentral, baseInicial, baseDestino);
        }
    }
}
