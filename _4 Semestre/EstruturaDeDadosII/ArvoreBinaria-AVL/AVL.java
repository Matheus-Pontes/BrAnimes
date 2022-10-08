public class AVL {
    private NoAVL raiz; 
    private boolean flagInsercao; 
    private boolean flagRemove; 

    public AVL(Object dado, NoAVL pai, NoAVL esq, NoAVL dir) {
        raiz = new NoAVL(dado, pai, esq, dir);
    }

    public AVL(Object dado) {
        this(dado, null, null, null);
    }

    public AVL() {
        raiz = null;
    }

    public NoAVL getRaiz() {
        return raiz;
    }

    public void setRaiz(NoAVL _raiz) {
        raiz = _raiz;
    }

    public boolean isEmpty() {
        return (raiz == null);
    }

    // Compara 2 Objects como se fossem Strings
    // Se retornar >0, primeiro maior
    // Se retornar <0, primeiro menor
    // Se retornar =0, são iguais
    private int compara(Object ob1, Object ob2) {
        String s1 = ob1.toString().toLowerCase();
        String s2 = ob2.toString().toLowerCase();

        return s1.compareTo(s2);
    }

    private NoAVL searchNoAVL(NoAVL raiz, Object e) {
        
        if (raiz != null)
        {
            if (compara(e, raiz.getDado()) == 0)
                return raiz;
            else 
            {
                if (compara(e, raiz.getDado()) < 0)
                    return searchNoAVL(raiz.getEsq(), e);
                else
                    return searchNoAVL(raiz.getDir(), e);
            }
        }
        else
            return null;
    }

    public NoAVL searchAVL(Object e) {
        return searchNoAVL(raiz, e);
    }

    // Rotação Simples para a Direita
    private NoAVL rotacaoSD(NoAVL A) {
        NoAVL B = A.getEsq();
        
        if (A.getPai() != null)
            
            if (A.getPai().getEsq() == A)
                A.getPai().setEsq(B);
            
            else
                A.getPai().setDir(B);
        
        B.setPai(A.getPai());
        A.setEsq(B.getDir());
        
        if (A.getEsq() != null)
            A.getEsq().setPai(A);

        B.setDir(A);
        A.setPai(B);

        return B;
    }

    // Rotação Simples para a Esquerda
    private NoAVL rotacaoSE(NoAVL A) {
        NoAVL B = A.getDir();

        if (A.getPai() != null)
            
            if (A.getPai().getDir() == A)
                A.getPai().setDir(B);
            else
                A.getPai().setEsq(B);

        B.setPai(A.getPai());
        A.setDir(B.getEsq());

        if (A.getDir() != null)
            A.getDir().setPai(A);

        B.setEsq(A);
        A.setPai(B);

        return B;
    }

    // Rotação dupla para a direita
    private NoAVL rotacaoDD(NoAVL A) {
        rotacaoSE(A.getEsq());
        return (rotacaoSD(A));
    }

    // Rotação dupla para a esquerda
    private NoAVL rotacaoDE(NoAVL A) {
        rotacaoSD(A.getDir());
        return (rotacaoSE(A));
    }

    // Insere um item na árvore a partir da raiz 
    public void insereAVL(Object k) {
        flagInsercao = false;
        setRaiz(insereNoAVL(raiz, k));
    }

    private NoAVL insereNoAVL(NoAVL raiz, Object x) {

        if (raiz != null) {
            
            if (compara(x, raiz.getDado()) < 0) {
                
                raiz.setEsq(insereNoAVL(raiz.getEsq(), x));
                raiz.getEsq().setPai(raiz);
                
                if (flagInsercao) {
                    switch (raiz.getFb()) {
                        case 1: // Caso ele tinha 1 filho direito, o filho esquerdo balanceou
                            raiz.setFb(0);
                            flagInsercao = false;
                            break;
                        case 0: // Caso não tinha filhos, agora tem sï¿½ o esquerdo
                            raiz.setFb(-1);
                            break;
                        case -1: // Caso já tinha um filho esquerdo, tem que rotacionar

                            // Se o filho esquerdo sï¿½ tinha um filho esquerdo, entï¿½o ï¿½ rotaï¿½ï¿½o
                            // simples para a direita
                            if (raiz.getEsq().getFb() == -1) {
                                raiz = rotacaoSD(raiz);
                                raiz.setFb(0);
                                raiz.getDir().setFb(0);
                            }
                            // Caso contrï¿½rio a rotaï¿½ï¿½o ï¿½ dupla para a direita
                            else {
                                raiz = rotacaoDD(raiz);
                                if (raiz.getFb() == 0) { // 1ï¿½ caso
                                    raiz.getDir().setFb(0);
                                    raiz.getEsq().setFb(0);
                                } else if (raiz.getFb() == -1) { // 2ï¿½ caso
                                    raiz.getDir().setFb(1);
                                    raiz.getEsq().setFb(0);
                                } else { // 3ï¿½ caso
                                    raiz.getDir().setFb(0);
                                    raiz.getEsq().setFb(-1);
                                }
                                raiz.setFb(0);
                            }
                            flagInsercao = false;
                            break;
                    }
                }
            } else {
                // Insere Recursivamente ï¿½ direita
                raiz.setDir(insereNoAVL(raiz.getDir(), x));
                raiz.getDir().setPai(raiz);
                // Se jï¿½ inseriu
                if (flagInsercao) {
                    switch (raiz.getFb()) {
                        case 0: // Se nï¿½o tinha filhos, agora tem sï¿½ o direito
                            raiz.setFb(1);
                            break;
                        case -1: // Se sï¿½ tinha um esquerdo, equilibrou
                            raiz.setFb(0);
                            flagInsercao = false;
                            break;
                        case 1: // Se jï¿½ tinha filhos direito, tem que rotacionar
                            // Se o filho direito tiver apenas um filho direito, entï¿½o ï¿½ rotaï¿½ï¿½o
                            // simples para a esquerda
                            if (raiz.getDir().getFb() == 1) {
                                raiz = rotacaoSE(raiz);
                                raiz.setFb(0);
                                raiz.getEsq().setFb(0);
                            }
                            // Caso contrï¿½rio, rotaï¿½ï¿½o dupla para a esquerda
                            else {
                                raiz = rotacaoDE(raiz);
                                if (raiz.getFb() == 0) { // 1ï¿½ caso
                                    raiz.getDir().setFb(0);
                                    raiz.getEsq().setFb(0);
                                } else if (raiz.getFb() == 1) { // 2ï¿½ caso
                                    raiz.getDir().setFb(0);
                                    raiz.getEsq().setFb(-1);
                                } else { // 3ï¿½ caso
                                    raiz.getDir().setFb(1);
                                    raiz.getEsq().setFb(0);
                                }
                                raiz.setFb(0);
                            }
                            flagInsercao = false;
                            break;
                    }
                }
            }
        }
        else {
            // Quando chegar na folha, inserir novo No e trocar p flag para passar pelo
            // processo de rotaï¿½ï¿½o
            raiz = new NoAVL(x);
            flagInsercao = true;
        }

        return raiz;
    }

    // Remove uma Object k da ï¿½rvore AVl (mï¿½todo pï¿½blico)
    public boolean removeAVL(Object k) {
        flagRemove = false;
        if (isEmpty()) {
            System.out.println("Erro ao remover, ï¿½rvore AVL estï¿½ vazia!");
            return false;
        } else if (searchAVL(k) == null) {
            System.out.println("Erro ao remover, elemento nï¿½o existe na ï¿½rvore!");
            return false;
        } else {
            raiz = removeNoAVL(raiz, k);
            return true;
        }
    }

    // Mï¿½todo privado recursivo
    private NoAVL removeNoAVL(NoAVL raiz, Object x) {
        // Se o elemento for menor que a raiz, chamar recursivamente para o lado
        // esquerdo
        if (compara(x, raiz.getDado()) < 0) {
            raiz.setEsq(removeNoAVL(raiz.getEsq(), x));

            // Se jï¿½ removeu, relabancear
            if (flagRemove)
                raiz = balanceamentoEsquerdo(raiz);
        }
        // Se o elemento for maior que a raiz, chamar recursivamente para o lado direito
        else if (compara(x, raiz.getDado()) > 0) {
            raiz.setDir(removeNoAVL(raiz.getDir(), x));

            // Se jï¿½ removeu, relabancear
            if (flagRemove)
                raiz = balanceamentoDireito(raiz);
        }
        // Se o elemento a remover estï¿½ na raiz (encontrou o nï¿½)
        else {
            // Se nï¿½o tiver um filho direito
            if (raiz.getDir() == null) {
                // Se tiver o filho esquerdo (assume o lugar do pai)
                if (raiz.getEsq() != null)
                    raiz.getEsq().setPai(raiz.getPai());
                // Filho esquerdo sobe
                raiz = raiz.getEsq();
                flagRemove = true;
            }
            // Se nï¿½o tiver um filho esquerdo
            else if (raiz.getEsq() == null) {
                // Se tiver o filho direito (assume o lugar do pai)
                if (raiz.getDir() != null)
                    raiz.getDir().setPai(raiz.getPai());
                // Filho direito sobe
                raiz = raiz.getDir();
                flagRemove = true;
            }
            // Tem os dois filhos, calcular o GetMax
            else {
                raiz.setEsq(buscaRemove(raiz.getEsq(), raiz));
                // Se necessï¿½rio efetuar balanceamento esquerdo, pois a remoï¿½ï¿½o foi ï¿½
                // esquerda
                if (flagRemove)
                    raiz = balanceamentoEsquerdo(raiz);
            }
        }
        return raiz;
    }

    // Reorganiza os fatores de balanceamento na remoï¿½ï¿½o
    private NoAVL balanceamentoEsquerdo(NoAVL no) {
        switch (no.getFb()) {
            case -1: // Se tinha um nï¿½ esquerdo, removeu e balanceou
                no.setFb(0);
                break;
            case 0: // Se nï¿½o tinha filhos, ficou com um ï¿½ direita
                no.setFb(1);
                break;
            case 1: // Se tinha 1 nï¿½vel a mais ï¿½ direita, Balanceou
                NoAVL subDir = no.getDir();
                int fb = subDir.getFb();
                if (fb >= 0) {
                    subDir = rotacaoSE(no);
                    if (fb == 0) {
                        no.setFb(1);
                        subDir.setFb(-1);
                        flagRemove = false;
                    } else {
                        no.setFb(0);
                        subDir.setFb(0);
                    }
                    no = subDir;
                } else {
                    no = rotacaoDD(no);
                    if (no.getFb() == 0) {
                        no.getDir().setFb(0);
                        no.getEsq().setFb(0);
                    } else if (no.getFb() == 1) {
                        no.setFb(0);
                        no.getDir().setFb(0);
                        no.getEsq().setFb(-1);
                    } else {
                        no.setFb(0);
                        no.getDir().setFb(1);
                        no.getEsq().setFb(0);
                    }
                }
        }
        return no;
    }

    // Reorganiza os fatores de balanceamento na remoï¿½ï¿½o
    private NoAVL balanceamentoDireito(NoAVL no) {
        switch (no.getFb()) {
            case 1: // Se tinha um nï¿½ direito, removeu e balanceou
                no.setFb(0);
                break;
            case 0: // Se nï¿½o tinha filhos, ficou com um ï¿½ esquerda
                no.setFb(-1);
                flagRemove = false;
                break;
            case -1: // Se tinha 1 nï¿½vel a mais ï¿½ direita, Alanceou
                NoAVL subEsq = no.getEsq();
                int fb = subEsq.getFb();
                if (fb <= 0) {
                    subEsq = rotacaoSD(no);
                    if (fb == 0) {
                        no.setFb(-1);
                        subEsq.setFb(1);
                        flagRemove = false;
                    } else {
                        no.setFb(0);
                        subEsq.setFb(0);
                    }
                    no = subEsq;
                } else {
                    no = rotacaoDE(no);
                    if (no.getFb() == 0) {
                        no.getDir().setFb(0);
                        no.getEsq().setFb(0);
                    } else if (no.getFb() == -1) {
                        no.setFb(0);
                        no.getDir().setFb(1);
                        no.getEsq().setFb(0);
                    } else {
                        no.setFb(0);
                        no.getDir().setFb(0);
                        no.getEsq().setFb(-1);
                    }
                }
        }
        return no;
    }

    // Busca o maior valor da subï¿½rvore esquerda para substituir o nï¿½ excluï¿½do
    private NoAVL buscaRemove(NoAVL raiz, NoAVL noChave) {
        NoAVL noRemovido;
        if (raiz.getDir() != null) {
            raiz.setDir(buscaRemove(raiz.getDir(), noChave));
            if (flagRemove)
                raiz = balanceamentoDireito(raiz);
        } else {
            // Altera o valor da chave
            noChave.setDado(raiz.getDado());
            noRemovido = raiz;
            // Se nï¿½ direito com maior valor tem subï¿½rvore esquerda deve ser removido
            raiz = raiz.getEsq();
            if (raiz != null)
                raiz.setPai(noRemovido.getPai());
            flagRemove = true;
            noRemovido = null;
        }
        return raiz;
    }

    // Mï¿½todo pï¿½blico que retorna a String
    public String emOrdemString() {
        return emOrdemString(raiz);
    }

    // Atravessamento em ordem
    private String emOrdemString(NoAVL raiz) {
        String resp = "";
        if (raiz != null) {
            resp += emOrdemString(raiz.getEsq());
            resp += raiz.getDado() + ", ";
            resp += emOrdemString(raiz.getDir());
        }

        return resp;
    }

    // Atravessamento em ordem
    public void emOrdem(NoAVL raiz) {
        if (raiz != null) {
            emOrdem(raiz.getEsq());
            System.out.print(raiz.getDado() + ", ");
            emOrdem(raiz.getDir());
        }
    }

    // Atravessamento prï¿½ Ordem
    public void preOrdem(NoAVL raiz) {
        if (raiz != null) {
            System.out.print(raiz.getDado() + ", ");
            preOrdem(raiz.getEsq());
            preOrdem(raiz.getDir());
        }
    }

    // Atravessamento pï¿½s ordem
    public void posOrdem(NoAVL raiz) {
        if (raiz != null) {
            posOrdem(raiz.getEsq());
            posOrdem(raiz.getDir());
            System.out.print(raiz.getDado() + ", ");
        }
    }

    // Atravessamento em nï¿½vel
    public void emNivel() {
        NoAVL noAux;
        FilaDin f = new FilaDin();

        f.enqueue(raiz);

        while (!f.qIsEmpty()) {
            noAux = (NoAVL) f.dequeue();
        
            if (noAux.getEsq() != null)
                f.enqueue(noAux.getEsq());
            if (noAux.getDir() != null)
                f.enqueue(noAux.getDir());
        
            System.out.print(noAux.getDado() + ", ");
        }
        
    }

}