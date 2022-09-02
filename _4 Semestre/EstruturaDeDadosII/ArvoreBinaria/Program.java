public class Program
{
    public static void main(String[] args)
    {
        // Iniciando arvore
        BinaryTree tree = new BinaryTree(3);
        
        int[] randomNumbers = {2, 12, 5, 4};

        for(var rn : randomNumbers) 
        {
            tree.InsertTree(rn);
        }
        
        System.out.println("=================");
        System.out.println(" Atravessamentos ");
        System.out.println("=================");
        
        System.out.print(" Em ordem (ERD): ");
        tree.AtravessamentoEmOrdem(tree.getRoot());
        System.out.println();
        System.out.println("===============");
        
        System.out.print(" Pré-ordem (RED): ");
        tree.AtravessamentoPreOrdem(tree.getRoot());
        System.out.println();
        System.out.println("================");
        
        System.out.print(" Pós-ordem (EDR): ");
        tree.AtravessamentoPosOrdem(tree.getRoot());
        System.out.println();
        System.out.println("================");
    }
}