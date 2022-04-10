import java.util.Timer;
import java.util.TimerTask;

public class Program 
{
    public static void main(String[] args) 
    {
        Timer timer = new Timer();
        
        Stack stack = new Stack(4);
        stack.push(new Veiculo("12345", "Honda", "Civic", "2022")); 
        stack.push(new Veiculo("12345", "Honda", "City", "2023")); 
        stack.push(new Veiculo("12345", "Honda", "Fit", "2024")); 
        stack.push(new Veiculo("12345", "Honda", "HR-V", "2025")); 

        // Valores da pilha
        System.out.println("Valores na pilha: ");
        System.out.println(stack.toString());
        
        // Esvaziando pilha
        System.out.print("Esvaziando pilha...");
        while ( !stack.isEmpty() ) {
            stack.pop();
        }

        if(stack.isEmpty()) 
        {
            timer.scheduleAtFixedRate(new TimerTask() 
            {
                int i = 50;
                public void run() {
                    i--;

                    if(i == 0)
                    {
                        timer.cancel();
                        System.out.println("A pilha está vazia, processo concluído!");
                    }

                }
            }, 0, 100);
        }
    }   
}
