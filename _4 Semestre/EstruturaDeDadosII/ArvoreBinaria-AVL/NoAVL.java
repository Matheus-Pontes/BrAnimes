public class NoAVL {
    private Object dado; 
    private NoAVL pai; 
    private NoAVL esq; 
    private NoAVL dir; 
    private int fb; 

    public NoAVL(Object x, NoAVL p, NoAVL e, NoAVL d) {
        dado = x;
        pai = p;
        esq = e;
        dir = d;
    }

    public NoAVL() {
        this("", null, null, null);
    }

    public NoAVL(Object _dado) {
        this(_dado, null, null, null);
    }

    public Object getDado() {
        return dado;
    }

    public void setDado(Object _dado) {
        dado = _dado;
    }

    public NoAVL getPai() {
        return pai;
    }

    public void setPai(NoAVL _pai) {
        pai = _pai;
    }

    public NoAVL getEsq() {
        return esq;
    }

    public void setEsq(NoAVL _esq) {
        esq = _esq;
    }

    public NoAVL getDir() {
        return dir;
    }

    public void setDir(NoAVL _dir) {
        dir = _dir;
    }

    public void setFb(int _fb) {
        fb = _fb;
    }

    public int getFb() {
        return fb;
    }
}