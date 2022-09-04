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

    // Remoção
    public void RemoveBinaryTree(int data, NodeTree<Integer> node) 
    {
        this.root = RemoveNode(data, node);
    }

    private NodeTree<Integer> RemoveNode(int data, NodeTree<Integer> node) 
    {
        if(node == null)
            return node;
        
        if(data < node.getData())
            node.setLeft(RemoveNode(data, node.getLeft()));
        else if (data > node.getData())
            node.setRight(RemoveNode(data, node.getRight()));
        else 
        {
            if(node.getLeft() == null) 
                return node.getRight();
            else if (node.getRight() == null)
                return node.getLeft();
            else 
            {
                int valueToSubstitute = MinusNodeValue(node.getRight()).getData();
                node.setData(valueToSubstitute);
                node.setRight(RemoveNode(valueToSubstitute, node.getRight()));
            }
        }

        return node;
    }

        // Nó com o menor valor a esquerda
        public NodeTree<Integer> MinusNodeValue(NodeTree<Integer> node) 
        {
            if (node == this.root) 
                node = this.root;
    
            if (node.getLeft() != null)
                node = MinusNodeValue(node.getLeft());
    
            return node;
        }
    
        // Nó com o maior valor a direita
        public NodeTree<Integer> MaxNodeValue(NodeTree<Integer> node) 
        {
            if (node == this.root)
                node = this.root;
    
            if (node.getRight() != null) 
                node = MaxNodeValue(node.getRight());
            
            return node;
        }   

    // Metodos de percorrer atravessamentos
    public void AtravessamentoEmOrdem(NodeTree<Integer> node) 
    {
        if(node != null) 
        {
            // esquerda, raíz, direita
            AtravessamentoEmOrdem(node.getLeft());
            System.out.print(node.getData() + " | ");
            AtravessamentoEmOrdem(node.getRight());
        }   
    }

    public void AtravessamentoPreOrdem(NodeTree<Integer> node) 
    {
        // Raíz, Esquerda, Direita
        if(node != null) 
        {
            System.out.print(node.getData() + " | ");
            AtravessamentoPreOrdem(node.getLeft());
            AtravessamentoPreOrdem(node.getRight());
        }
    }

    public void AtravessamentoPosOrdem(NodeTree<Integer> node) 
    {
        // Esquerda, Direita, Raíz
        if(node != null) 
        {
            AtravessamentoPosOrdem(node.getLeft());
            AtravessamentoPosOrdem(node.getRight());
            System.out.print(node.getData() + " | ");
        }
    }
}
