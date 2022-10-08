public class NodeTree {
    private Integer data;

    private NodeTree left;
    private NodeTree right;

    public NodeTree(Integer data) 
    {
        this.data = data;
    }

    public NodeTree() { }

    public Integer getData() {
        return data;
    }

    public NodeTree getLeft() {
        return left;
    }

    public NodeTree getRight() {
        return right;
    }

    public void setData(Integer data) {
        this.data = data;
    }

    public void setLeft(NodeTree left) {
        this.left = left;
    }

    public void setRight(NodeTree right) {
        this.right = right;
    }
}