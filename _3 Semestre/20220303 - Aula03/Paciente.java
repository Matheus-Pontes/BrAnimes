import javax.swing.JOptionPane;

public class Paciente 
{
    String nome;
    int idade;
    String CPF;
    
    Paciente(String nome, int idade, String CPF) 
    {
        this.nome = nome;
        this.idade = idade;
        this.CPF = CPF;
    }

    public void showPaciente() 
    {
        JOptionPane.showMessageDialog(null, 
            "Nome: " + this.nome + "\n" +
            "Idade: " + this.idade + "\n" +
            "CPF: "+ this.CPF);
    }

}