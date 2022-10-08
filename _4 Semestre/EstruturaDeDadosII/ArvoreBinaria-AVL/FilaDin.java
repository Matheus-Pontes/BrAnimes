public class FilaDin {
    Node comeco; 
    Node fim; 
    int total; 

    public void qInit() {
        comeco = null;
        fim = null;
        total = 0;
    }

    public boolean qIsEmpty() {
        if (total == 0)
            return true;
        else
            return false;
    }

    public void enqueue(Object x) {
        Node novo = new Node();
        novo.setDado(x); 
        novo.setProx(null);

        if (qIsEmpty()) {
            comeco = novo; 
            fim = comeco;
        } else {
            fim.setProx(novo); 
            fim = novo; 
        }
        total++; 
    }

    public Object dequeue() {
        Object resp = null;

        if (!qIsEmpty()) {
            resp = comeco.getDado(); 
            comeco = comeco.getProx(); 
            total--;
            return resp;
        }

        return resp;
    }

    public void qPrint() {
        if (qIsEmpty())
            System.out.print("Fila Vazia!");
        else {
            Node aux;
            String saida = "";
            aux = comeco;

            while (aux != null) {
                saida += aux.getDado().toString() + ", ";
                aux = aux.getProx();
            }
            System.out.print("F:[ " + saida + "]");
        }
    }
}