import java.util.ArrayList;

public class HashingCode 
{
    // O comportamento desse hashcode é fechado sem tratamento para caso tenha valor na mesma chave
    private ArrayList[] data;

    public HashingCode(int tamanho) 
    {
        data = new ArrayList[tamanho];

        for(int i =0; i < tamanho; i++) {
            data[i] = new ArrayList();
        }
    }

    // Hashing
    public int hashing(int chave)
    {
        return chave * 5 % data.length;
    }

    public void insercao(int chave)
    {
        int posicao = hashing(chave);

        data[posicao].add(chave);
    }

    public boolean remover(int chave) 
    {
        int posicao = hashing(chave);

        if(data[posicao].contains(chave))
        {
            data[posicao].remove((Object)chave);
            return true;
        }    
        else
            return false;
    }

    public boolean buscar(int chave) 
    {
        int posicao = hashing(chave);
        return data[posicao].contains(chave);
    }

    public void imprimir() 
    {
        for(int i=0; i < data.length; i++)
        {
            System.out.print(i + ": ");

            for(int j=0; j < data[i].size(); j++) 
            {
                System.out.println(data[i].get(j).toString());
            }
        }
    }
}
