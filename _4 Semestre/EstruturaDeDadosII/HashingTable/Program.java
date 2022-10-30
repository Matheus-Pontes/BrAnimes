import java.util.Scanner;

public class Program 
{
    public static void main(String[] args) 
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("====================================");
        System.out.println("              Tabela hash           ");
        System.out.println("====================================");

        System.out.println("Quantidade de elementos na tabela ? ");
        int quantidade = scanner.nextInt();

        HashingTable hashingTable = new HashingTable(quantidade);
        
        int option;

        do {
            System.out.println("\n1 - Inserir os valores\n2 - Buscar um valor\n3 - Remover um valor\n4 - Mostrar valores\n0 - Sair");
            System.out.print("\nSua opção ? ");

            option = scanner.nextInt();
            
            switch(option) {
                case 1: 

                    for(int i=0; i < quantidade; i++) 
                    {   
                        System.out.print("Valor " + (i + 1) + ": ");
                        hashingTable.put(scanner.nextInt());
                    }
    
                    System.out.println("Valores aguardados !!!");
                break;
                case 2: 
                    System.out.print("Digite um valor para buscar: ");
                    int valor = scanner.nextInt();
                    int posicao = hashingTable.search(valor);
                    System.out.println("Buscando pelo valor: " + valor + "" + (posicao != -1 ? "\nEle está na posição: " + posicao : "\nNão encontrado"));
                break;
                case 3: 
                    System.out.print("Digite um valor para remover(se tiver valores iguais tambem será removido): ");
                    hashingTable.remove(scanner.nextInt());
                    break;
                case 4: 
                    System.out.println("Mostrando os valores guardados.");
                    hashingTable.print();
                break;
            }
        } while(option != 0);

        scanner.close();
    }
}
