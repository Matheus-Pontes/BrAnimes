public class Program
{
    public static void main(String[] args)
    {
        // Nó inicial
        NodeTree<Integer> root = new NodeTree<Integer>(3);
        
        // Filhos esquerda e direita
        root.InsertTree(root, 2);
        root.InsertTree(root, 5);

        // Inserindo nós no filho da esquerda
        root.InsertTree(root.getLeft(), 7); 
        root.InsertTree(root.getLeft(), 6);

        // Inserindo nós no filho da direita
        root.InsertTree(root.getRight(), 8);
        root.InsertTree(root.getRight(), 9);

                   
        // Resultado:
        //           3
        //       /       \       
        //      2         5
        //    /   \     /   \
        //   7     6   8     9
    }
}