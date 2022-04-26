import java.util.Scanner;

public class Util 
{
    public static void menu() 
    {
        System.out.println("===============================");
        System.out.println("      Trabalhando com FILA     ");
        System.out.println("===============================");
        System.out.println(" 1 - Cadastrar                        ");
        System.out.println(" 2 - Listar                           ");
        System.out.println(" 3 - Retirar até achar filmes de AÇÃO ");
        System.out.println(" 0 - Sair                             ");
    }
    
    public static void cadastrar(Queue fila, Scanner option) 
    {
        String title, director, gender, country;
        int releaseYear;

        

        for(int i=0; i < fila.getMAX(); i++) 
        {
            System.out.println("================================");
            System.out.println("Nome do "+ (i + 1) + "º" + "filme: "); ;
            title = option.nextLine();

            System.out.println("Nome do Diretor: ");
            director = option.nextLine();
            
            System.out.println("Genêro: ");
            gender = option.nextLine();
            
            System.out.println("País de origem: ");
            country = option.nextLine();
            
            System.out.println("Ano de lançamento: ");
            releaseYear = option.nextInt();

            // Limpar Buffer do teclado
            option.nextLine();

            fila.enqueue(
                new Filmes(title, director, gender, country, releaseYear)
            );
        }
    }

    public static void retirarDaFilaAcao(Queue fila) 
    {
        for(int i=0; i < fila.getQueue().length; i++) 
        {
            if(fila.getQueue()[i].getGender().equalsIgnoreCase("Ação")) 
            {
                System.out.println(fila.dequeue());
            }
        }
    }
}
