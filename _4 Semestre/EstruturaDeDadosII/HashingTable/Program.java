public class Program 
{
    public static void main(String[] args) 
    {
        HashingTable hashingTable = new HashingTable(4);
        
        int[] values = {100, 50, 300, 50}; 

        for(int i=0; i < values.length; i++) 
        {
            hashingTable.put(values[i]);
        }

        hashingTable.print();
        
        hashingTable.remove(50);

        System.out.println();
        
        hashingTable.print();

        hashingTable.put(50);

        int valor = 100;
        int posicao = hashingTable.search(valor);
        System.out.println("Buscando pelo valor: " + valor + "" + (posicao != -1 ? "\nEle está na posição: " + posicao : "\nNão encontrado"));

        hashingTable.print();
    }
}
