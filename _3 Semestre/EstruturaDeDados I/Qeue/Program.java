import java.util.Scanner;

public class Program 
{
    public static void main(String[] args) 
    {

        int opcao;
        Scanner option = new Scanner(System.in);
        Queue fila = new Queue();

        do 
        {
            // Menu de opções para as ações
            Util.menu();
            System.out.print("Informe sua opção: ");
            opcao = option.nextInt();
    
            switch(opcao) 
            {
                case 1:
                    // Cadastrar
                    System.out.print("Quantas pessoas quer cadastrar? ");
                    int maximoDePessoas = option.nextInt();
    
                    option.nextLine();
    
                    Util.cadastrar(fila = new Queue(maximoDePessoas), option);
    
                    break;
                case 2:
                    // Listar
                    System.out.println("===================================");
                    System.out.println("Listando os valores dentro da FILA.");
                    System.out.println("===================================");
                    System.out.print(fila.toString());
                    break;
                case 3:
                    break;
            }
            
        } while(opcao != 0);
       
    }    
}
