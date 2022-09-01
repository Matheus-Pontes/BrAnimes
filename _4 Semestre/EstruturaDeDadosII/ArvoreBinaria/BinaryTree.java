public class BinaryTree
{
    private NodeTree<Integer> root;
    
    BinaryTree(Integer data) 
    {
        this.root = new NodeTree<Integer>(data);
    }

    public void setRoot(NodeTree<Integer> root) {
        this.root = root;
    }

    public NodeTree<Integer> getRoot() {
        return root;
    }

    public void InsertTree(Integer data) 
    {
        this.root = InsertNode(root, data);
    }

    private NodeTree<Integer> InsertNode(NodeTree<Integer> node, Integer data) 
    {
        if (node != null) 
        {
            // Lógica para ver o lado que vai ser inserido o dado
            if(data < node.getData()) 
            {
                // Coloca o nó no lado esquerda da raíz
                node.setLeft(InsertNode(node.getLeft(), data));
                System.out.println("Colocando: " + data);
                System.out.println("Na esquerda de: " + node.getData());
            } 
            else 
            {
                // Coloca o nó no lado direito
                node.setRight(InsertNode(node.getRight(), data));
                System.out.println("Colocando: " + data);
                System.out.println("Na direita de: " + node.getData());
            }
        }
        else 
        {
            // Criando uma raíz ou um nó
            System.out.println("RAÍZ: " + data);
            node = new NodeTree<Integer>(data);
            return node;
        }

        return node;
    }
}
