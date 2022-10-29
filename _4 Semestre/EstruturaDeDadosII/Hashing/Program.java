public class Program 
{
    public static void main(String[] args) 
    {
        HashingCode hash = new HashingCode(3);

        hash.insercao(50);
        hash.insercao(10);
        hash.insercao(3000);

        hash.imprimir();

        System.out.println("Foi removido: " + hash.remover(10));
    }
}