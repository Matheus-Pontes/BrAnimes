public class Ex03 
{
    public static void main(String[] args) 
    {
        String paisesA [] = { "Ucrânia", "Turquia", "Suíça", "México", "França", "Espanha","Chile", "Brasil", "Argentina" };
        String paisesB [] = { "Argentina", "Brasil", "Chile", "Dinamarca", "Espanha", "França", "Inglaterra", "Turquia", "Uruguai" };

        // 1 - Busca sequencial
        System.out.println("Encontramos o país Turquia na seguinte posição: " + (buscaSequencial(paisesA, "Turquia") + 1) + "º");
        
        // 2 - Busca binária crescente
        System.out.println("Encontramos o país Turquia na seguinte posição: " + (buscaBinariaCrescente(paisesB, "Turquia", 0, paisesB.length) + 1) + "º");

        // 3 - Busca binário decrescente
        System.out.println("Encontramos o país Turquia na seguinte posição: " + (buscaBinariaDecrescente(paisesA, "Turquia", 0, paisesA.length) + 1) + "º");

    }

    public static int buscaSequencial(String[] array, String toSearch) 
    {
        int indexSearch = -1;

        for(int i=0; i < array.length; i++) 
        {
            if(toSearch.compareToIgnoreCase(array[i]) == 0)
                indexSearch = i;
        }
        
        return indexSearch;
    }

    public static int buscaBinariaCrescente(String[] array, String toSearch, int start, int end) 
    {
        int indexPosition = -1;
        int middle = 0;

        if(start <= end) 
        {
            middle = ( start + end ) / 2;

            if (toSearch.compareToIgnoreCase(array[middle]) == 0)
                indexPosition = middle;
            else if (toSearch.compareToIgnoreCase(array[middle]) > 0)
                indexPosition = buscaBinariaCrescente(array, toSearch, middle + 1, end);
            else if (toSearch.compareToIgnoreCase(array[middle]) < 0)
                indexPosition = buscaBinariaCrescente(array, toSearch, start, middle - 1);
        }

        return indexPosition;
    }

    public static int buscaBinariaDecrescente(String[] array, String toSearch, int start, int end) 
    {
        int indexPosition = -1;
        int middle = 0;

        if(start <= end) 
        {
            middle = ( start + end ) / 2;

            if (toSearch.compareToIgnoreCase(array[middle]) == 0)
                indexPosition = middle;
            else if (toSearch.compareToIgnoreCase(array[middle]) < 0)
                indexPosition = buscaBinariaCrescente(array, toSearch, middle + 1, end);
            else if (toSearch.compareToIgnoreCase(array[middle]) > 0)
                indexPosition = buscaBinariaCrescente(array, toSearch, start, middle - 1);
        }

        return indexPosition;
    }
}
