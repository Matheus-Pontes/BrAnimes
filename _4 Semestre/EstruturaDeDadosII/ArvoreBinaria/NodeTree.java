public class NodeTree<T> {
    private T root; // Root -> raiz

    private NodeTree<T> left;
    private NodeTree<T> right;

    public NodeTree(T root) 
    {
        this.root = root;
    }

    public NodeTree() { }

    public T getRoot() {
        return root;
    }

    public NodeTree<T> getLeft() {
        return left;
    }

    public NodeTree<T> getRight() {
        return right;
    }

    public void setRoot(T root) {
        this.root = root;
    }

    public void setLeft(NodeTree<T> left) {
        this.left = left;
    }

    public void setRight(NodeTree<T> right) {
        this.right = right;
    }
    
    public void InsertTree(NodeTree<T> node, T data) 
    {
        if(node != null) 
        {
            if(node.left == null)
            {
                node.left = new NodeTree<T>(data);
                System.out.println("Inserindo " + data + " a esquerda de " + node.root);
            } else {
                if (node.right == null) {
                    System.out.println("Inserindo " + data + " a direita de " + node.root);
                    node.right = new NodeTree<T>(data);
                }
            } 
        } 
    }
}