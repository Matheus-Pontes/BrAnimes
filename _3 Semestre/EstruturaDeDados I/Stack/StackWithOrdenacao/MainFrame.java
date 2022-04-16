import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.*;

public class MainFrame extends JFrame implements ActionListener 
{
    public void initialize() 
    {
        
        // Nome
        JLabel labelNome = new JLabel("Nome: ");
        JTextField txtNome = new JTextField();

        // Salário
        JLabel labelSalario = new JLabel("Salario R$ ");
        JTextField txtSalario = new JTextField();
        
        // Sexo
        JLabel labelSexo = new JLabel("Sexo: ");
        JTextField txtSexo = new JTextField();

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

        JLabel results = new JLabel("RESULTADOS: ");
        JPanel panelResults = new JPanel();
        panelResults.setLayout(new GridLayout(29, 1));
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
            System.out.println("Adicionar");
        else if (e.getActionCommand().equals("listar"))
            System.out.println("Listar");
        else if (e.getActionCommand().equals("retirar"))
            System.out.println("Retirar");
        else if (e.getActionCommand().equals("extrair"))
            System.out.println("Extrair");
        else if (e.getActionCommand().equals("ordenar"))
            System.out.println("Ordenar");
    }
}
