public class HashingTable 
{
    private int table[];
    private boolean exist[];
    private int size;

    HashingTable(int size) {
        this.size = size;

        this.table = new int[this.size];
        this.exist = new boolean[this.size];
    }

    public boolean[] getExist() {
        return exist;
    }

    public int getSize() {
        return size;
    }

    public int[] getTable() {
        return table;
    }

    public void setExist(boolean[] exist) {
        this.exist = exist;
    }

    public void setSize(int size) {
        this.size = size;
    }
    
    public void setTable(int[] table) {
        this.table = table;
    }

    private int hashCode(int key) {
        return 107 * key % getSize();
    }

    private int reHashCode(int key, int posicao) {
        posicao += 1;

        if(posicao == this.table.length)
            posicao = 0;

        if(this.table[posicao] == 0)
            return posicao;
        return reHashCode(key, posicao);
    }

    public void putInTable(int position, int value) {
        this.table[position] = value;
        this.exist[position] = true;
    }

    public void put(int value) {
        int position = hashCode(value);

        if(this.table[position] != 0) {
            position = reHashCode(value, position);
            putInTable(position, value);
        }
        else 
            putInTable(position, value);
    }

    public void remove(int value) {

        for(int i=0; i < this.table.length; i++) {
            if(this.table[i] == value) {
                this.table[i] = 0;
                this.exist[i] = false;
            }
        }
    }

    public int search(int value) 
    {
        int position = hashCode(value);

        if(this.table[position] == value)
            return position;
        else
            return -1;
    }

    public void print() 
    {
        for(int i=0; i < this.size; i++) 
        {
            System.out.println(this.exist[i] + " | " + this.table[i]);
        }
    }
}