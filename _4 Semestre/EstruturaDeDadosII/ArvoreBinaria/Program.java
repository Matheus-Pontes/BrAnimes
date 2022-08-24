public class Program
{
    public static void main(String[] args)
    {
        NodeTree<Integer> root = new NodeTree<Integer>(3);
        
        root.InsertTree(root, 2);
        root.InsertTree(root, 5);
        root.InsertTree(root.getLeft(), 7);
        root.InsertTree(root.getLeft(), 8);

        // Resultado    7 <- 2 <- 3 -> 5
        //               8 <-|
    }
}