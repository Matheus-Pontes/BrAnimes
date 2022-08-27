public class NodeTree<T> {
    private T data;

    private NodeTree<T> left;
    private NodeTree<T> right;

    public NodeTree(T data) 
    {
        this.data = data;
    }

    public NodeTree() { }

    public T getData() {
        return data;
    }

    public NodeTree<T> getLeft() {
        return left;
    }

    public NodeTree<T> getRight() {
        return right;
    }

    public void setData(T data) {
        this.data = data;
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
                System.out.println("Inserindo " + data + " a esquerda de " + node.data);
            } else {
                if (node.right == null) {
                    System.out.println("Inserindo " + data + " a direita de " + node.data);
                    node.right = new NodeTree<T>(data);
                }
            } 
        } 
    }
}