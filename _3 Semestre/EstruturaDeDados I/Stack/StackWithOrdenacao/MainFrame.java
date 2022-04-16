import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.*;

public class MainFrame extends JFrame implements ActionListener 
{
    JTextField txtNome, txtSalario, txtSexo;
    JLabel results;
    JPanel panelResults;
    Stack stack = new Stack();

    public void initialize() 
    {
        // Nome
        JLabel labelNome = new JLabel("Nome: ");
        txtNome = new JTextField();

        // Salário
        JLabel labelSalario = new JLabel("Salario R$ ");
        txtSalario = new JTextField();
        
        // Sexo
        JLabel labelSexo = new JLabel("Sexo: ");
        txtSexo = new JTextField();

        // Botão de adicionar um trabalhador a pilha 
        JButton btnAdicionar = new JButton("Adicionar");
        btnAdicionar.setActionCommand("adicionar");
        
        // Botão listar
        JButton btnListar = new JButton("Listar");
        btnListar.setActionCommand("listar");
        
        // Botão Retiar 
        JButton btnRetirar = new JButton("Retirar");
        btnRetirar.setActionCommand("retirar");
        
        // Botão Extrair para visualização
        JButton btnExtrairParaVisulizacao = new JButton("Extrair");
        btnExtrairParaVisulizacao.setActionCommand("extrair");
        
        // Botão Ordenar elementos 
        JButton btnOrdenar = new JButton("Ordernar");
        btnOrdenar.setActionCommand("ordenar");

        // Painel de botões
        JPanel buttonPanel = new JPanel();
        buttonPanel.setLayout(new GridLayout(1, 2, 2, 3));
        buttonPanel.add(btnAdicionar);
        buttonPanel.add(btnListar);
        buttonPanel.add(btnRetirar);
        buttonPanel.add(btnExtrairParaVisulizacao);
        buttonPanel.add(btnOrdenar);

        btnAdicionar.addActionListener(this);
        btnListar.addActionListener(this);
        btnRetirar.addActionListener(this);
        btnExtrairParaVisulizacao.addActionListener(this);
        btnOrdenar.addActionListener(this);

        results = new JLabel("RESULTADOS: ");
        results.setLayout(new GridLayout(20, 5, 5, 5));
        panelResults = new JPanel();
        panelResults.setLayout(new GridLayout(20, 1, 5, 5));
        panelResults.add(results);

        JPanel formPanel = new JPanel();
        formPanel.setLayout(new GridLayout(1, 1, 5, 5));
        formPanel.add(labelNome);
        formPanel.add(txtNome);

        formPanel.add(labelSalario);
        formPanel.add(txtSalario);

        formPanel.add(labelSexo);
        formPanel.add(txtSexo);
        
        JPanel panel = new JPanel();
        panel.setLayout(new BorderLayout());
        panel.add(formPanel, BorderLayout.NORTH);
        panel.add(buttonPanel, BorderLayout.WEST);
        panel.add(panelResults, BorderLayout.SOUTH);
        
        add(panel);

        setTitle("PILHA ENCADEADA");
        setSize(550, 550);
        setMinimumSize(new Dimension(500, 500));
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {

        if (e.getActionCommand().equals("adicionar")) 
        {
            if(txtNome.getText() != "" && txtSalario.getText() != "" && txtSexo.getText() != "") 
            {
                stack.push(new Trabalhador(txtNome.getText(), Float.parseFloat(txtSalario.getText()), txtSexo.getText().charAt(0)));
                results.setText("Valores adicionado a lista.");
                panelResults.add(results);
                cleanFields();
            }
            else {
                results.setText("Campos: Nome, Salário e Sexo. São obrigatóriosS");
                panelResults.add(results);  
            }
        }
        else if (e.getActionCommand().equals("listar"))
        {
            System.out.println(stack.toString());
            results.setText("Valores da pilha: " + "\n" + stack.toString());
            panelResults.add(results);
        }
        else if (e.getActionCommand().equals("retirar")) 
        {
            stack.pop();
            System.out.println("Valor retirado da pilha !!!");
            results.setText(
                "Valor retirado da pilha: " + "\n" + stack.toString()
            );
            panelResults.add(results);
        }
        else if (e.getActionCommand().equals("extrair")) 
        {
            System.out.println("Extrair");
            
            Stack stackCopy = stack;
            System.out.println(stackCopy.getCount());
            Object[] trabalhador = new Object[stackCopy.getCount()];

            for(int i=0; i <= stackCopy.getCount(); i++) 
            {
                trabalhador[i] = stackCopy.top();
                
                if(!stackCopy.isEmpty())
                    stackCopy.pop();
            }

            for(var i : trabalhador)
                System.out.println("Resultado: " + i);
        }
        else if (e.getActionCommand().equals("ordenar")) 
        {
            System.out.println("Ordenar");
            Stack stackCopy = stack;
            System.out.println(stackCopy.getCount());
            Trabalhador[] trabalhador = new Trabalhador[stackCopy.getCount()];

            for(int i=0; i <= stackCopy.getCount() + 1; i++) 
            {
                trabalhador[i] = (Trabalhador) stackCopy.top();
                
                if(!stackCopy.isEmpty())
                    stackCopy.pop();
            }

            if (trabalhador != null)   
                bubbleSort(trabalhador);
            
            String resultAux = "";

            for(var i : trabalhador)
                resultAux += i.toString();
                
            results.setText("Valores ordenados: " + resultAux);
            panelResults.add(results);
            
            for(var i : trabalhador)
                System.out.println("Resultado: " + i);
        }
    }

    public void cleanFields() 
    {
        txtNome.setText("");
        txtSalario.setText("");
        txtSexo.setText("");
    }

    public void bubbleSort(Trabalhador[] vetor) 
    {
        for (int i = 0; i < vetor.length - 1; i++) {
            for (int j = 0; j < vetor.length - 1 - i; j++) {
              if (vetor[j].getNome().compareTo(vetor[j+1].getNome()) > 0) {
                    //A comparação anterior funciona porque as classes Integer, 
                    //Double e AtletaVelocidade possuem o método compareTo.
                    Trabalhador tmp = vetor[j];
                    vetor[j] = vetor[j+1];
                    vetor[j+1] = tmp;
               }
            }
        }
    }
}
