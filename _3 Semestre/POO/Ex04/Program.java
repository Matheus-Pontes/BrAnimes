import java.util.Scanner;

public class Program 
{
    public static void main(String[] args) 
    {
        Circuferencia circuferencia1; 
        Retangulo retangulo1; 
        
        float raioDaCircunferencia, baseDoRetangulo, alturaDoRetangulo;

        Scanner read = new Scanner(System.in);
         
        System.out.print("Digite o raio de uma circunferência: ");
        raioDaCircunferencia = read.nextFloat();
        
        circuferencia1 = new Circuferencia(raioDaCircunferencia);
        
        circuferencia1.mostraDados();
        
        read.nextLine();

        System.out.print("Digite a base de um retângulo: ");
        baseDoRetangulo = read.nextFloat();

        System.out.print("Digite a altura de um retângulo: ");
        alturaDoRetangulo = read.nextFloat();
        
        read.nextLine();

        read.close();
        
        retangulo1 = new Retangulo(baseDoRetangulo, alturaDoRetangulo);
        
        retangulo1.mostraDados();
    }
}
