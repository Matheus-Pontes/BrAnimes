import javax.swing.*;

public class Program 
{
    public static void main(String[] args) 
    {
        Pessoa p = new Pessoa(
            "Matheus", 21, 10.0 
        );
        

        System.out.println("-----------------");
        System.out.println(" Nome: "+ p.nome);
        System.out.println(" Idade: "+ p.idade);
        System.out.println(" Renda: "+ p.renda);
        System.out.println("-----------------");


        // Cliente c = new Cliente();

        // c.nome = JOptionPane.showInputDialog(null, "Nome do cliente: ");
        // c.email = JOptionPane.showInputDialog(null, "E-mail do cliente: ");
        // c.telefone = JOptionPane.showInputDialog(null, "Telefone do cliente: ");
        
        // System.out.println("-----------------");
        // System.out.println(" Cliente: "+ c.nome);
        // System.out.println(" E-mail: "+ c.email);
        // System.out.println(" Telefone: "+ c.telefone);
        // System.out.println("-----------------");

    }
}

