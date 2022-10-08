import java.util.ArrayList;

public class BinaryTree
{
    private NodeTree root;

    private ArrayList<Integer> arrayToBalanceTree = new ArrayList<Integer>();

    BinaryTree() {}

    BinaryTree(Integer data) 
    {
        this.root = new NodeTree(data);
    }

    public void setRoot(NodeTree root) {
        this.root = root;
    }

    public NodeTree getRoot() {
        return root;
    }

    public void InsertTree(Integer data) 
    {
        this.root = InsertNode(root, data);
    }

    private NodeTree InsertNode(NodeTree node, Integer data) 
    {
        if (node != null) 
        {
            // Lógica para ver o lado que vai ser inserido o dado
            if(data < node.getData()) 
                node.setLeft(InsertNode(node.getLeft(), data));
            else 
                node.setRight(InsertNode(node.getRight(), data));   
        }
        else 
            node = new NodeTree(data);

        return node;
    }

    // Remoção
    public void RemoveBinaryTree(int data, NodeTree node) 
    {
        this.root = RemoveNode(data, node);
    }

    private NodeTree RemoveNode(int data, NodeTree node) 
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
    public NodeTree MinusNodeValue(NodeTree node) 
    {
        if (node == this.root) 
            node = this.root;

        if (node.getLeft() != null)
            node = MinusNodeValue(node.getLeft());

        return node;
    }

    // Nó com o maior valor a direita
    public NodeTree MaxNodeValue(NodeTree node) 
    {
        if (node == this.root)
            node = this.root;

        if (node.getRight() != null) 
            node = MaxNodeValue(node.getRight());
        
        return node;
    }   

    // Busca
    public boolean SearchBinaryTree(Integer data, NodeTree node) 
    {
        if(node == null) 
            return false;

        if(data == node.getData())  
            return true;
        
        if (data < node.getData())
            return SearchBinaryTree(data, node.getLeft()); 
        else 
            return SearchBinaryTree(data, node.getRight());
    }

    // Altura da arvore
    public int HeightBinaryTree(NodeTree node) 
    {
        int heightLeft = 0, heightRight = 0;

        if (node != null) 
        {
            if(node.getLeft() != null) 
                heightLeft = HeightBinaryTree(node.getLeft());
            if(node.getRight() != null)
                heightRight = HeightBinaryTree(node.getRight());    
        }
        
        if (heightRight > heightLeft) 
            return heightRight + 1;
        
        return heightLeft + 1;
    }

    public void EmOrdem() 
    {
        this.arrayToBalanceTree = AtravessamentoEmOrdem(this.root);
    }

    // Metodos de percorrer atravessamentos
    public ArrayList<Integer> AtravessamentoEmOrdem(NodeTree node) 
    {
        if(node != null) 
        {
            // esquerda, raíz, direita
            AtravessamentoEmOrdem(node.getLeft());
            System.out.print(node.getData() + " | ");
            this.arrayToBalanceTree.add(node.getData());
            AtravessamentoEmOrdem(node.getRight());
        }
        
        return this.arrayToBalanceTree;
    }

    public void AtravessamentoPreOrdem(NodeTree node) 
    {
        // Raíz, Esquerda, Direita
        if(node != null) 
        {
            System.out.print(node.getData() + " | ");
            AtravessamentoPreOrdem(node.getLeft());
            AtravessamentoPreOrdem(node.getRight());
        }
    }

    public void AtravessamentoPosOrdem(NodeTree node) 
    {
        // Esquerda, Direita, Raíz
        if(node != null) 
        {
            AtravessamentoPosOrdem(node.getLeft());
            AtravessamentoPosOrdem(node.getRight());
            System.out.print(node.getData() + " | ");
        }
    }

    public void AtravessamentoEmNivel(NodeTree node) 
    {
        Queue fila = new Queue(100);
        
        fila.enqueue(node);

        while (!fila.isEmpty())  
        {
            NodeTree value = fila.dequeue();

            
            if(value.getLeft() != null)
                fila.enqueue(value.getLeft());
                   
            if(value.getRight() != null)
                fila.enqueue(value.getRight());
            
            System.out.print(value.getData() + " | ");
        }
    }    

    public void BalanceTree() 
    {
        // Carrega array(arrayToBalanceTree) após atravessamento em Ordem
        EmOrdem();

        BinaryTree newTree = new BinaryTree();

        // Balanceando a arvore utilizando busca binária
        BinarySearch(this.arrayToBalanceTree, 0, this.arrayToBalanceTree.toArray().length - 1, newTree);
    }

    private void BinarySearch(ArrayList<Integer> array, Integer start, Integer end, BinaryTree node)  
    {
        if(start <= end) 
        {
            int middle = (start + end) / 2;

            node.InsertTree(array.get(middle));

            BinarySearch(array, start, middle - 1, node);

            BinarySearch(array, middle + 1, end, node);
        }
    }
}
