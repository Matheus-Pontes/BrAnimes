public class Node {
    private Object dado;
    private Node prox; 

    public Object getDado() {
        return dado;
    }

    public void setDado(Object novovalor) {
        dado = novovalor;
    }

    public Node getProx() {
        return prox;
    }

    public void setProx(Node novoprox) {
        prox = novoprox;
    }
}