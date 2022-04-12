import java.util.ArrayList;

public class Program 
{
    public static void main(String[] args) 
    {
        ArrayList<Trabalhador> tr = new ArrayList<>();

        tr.add(new Trabalhador("Matheus", 200f, 'M'));
        tr.add(new Trabalhador("Jose", 300f, 'M'));
        tr.add(new Trabalhador("Lais", 280f, 'F'));
        tr.add(new Trabalhador("Rafaela", 320f, 'F'));

        Stack stack = new Stack(4);

        for(int i=0; i < tr.size(); i++) 
        {
            stack.push(tr.get(i));
        }

        System.out.println("Pilha cheia ? " + (stack.isFull() ? "Sim" : "Não"));

        System.out.println("Valores na pilha: ");
        System.out.println(stack.toString());

        System.out.println("Esvaziando pilha...");
        while(!stack.isEmpty()) 
        {
            stack.pop();
        }

        if(stack.isEmpty())
            System.out.println("A pilha está vazia!");
    }
}
