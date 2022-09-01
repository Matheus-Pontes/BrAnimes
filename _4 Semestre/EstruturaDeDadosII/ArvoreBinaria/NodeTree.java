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
}