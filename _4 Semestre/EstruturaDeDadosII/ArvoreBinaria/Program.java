public class Program
{
    public static void main(String[] args)
    {
        // Iniciando arvore
        BinaryTree tree = new BinaryTree(3);
        
        int[] randomNumbers = {2, 12, 3, 4};

        for(var rn : randomNumbers) 
        {
            tree.InsertTree(rn);
        } 
    }
}