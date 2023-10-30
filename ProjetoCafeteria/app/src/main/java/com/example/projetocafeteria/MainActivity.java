package com.example.projetocafeteria;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.os.StrictMode;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.NotificationCompatSideChannelService;

import org.json.JSONArray;
import org.json.JSONObject;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    private ListView listView;
    private EditText txtFiltroTipo;
    private Configuration configuration = new Configuration();
    private ArrayList<String> cardapio = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        listView = findViewById(R.id.listView);
        txtFiltroTipo = findViewById(R.id.txtFiltroTipo);

        Button btnCardapio = findViewById(R.id.btnCardapio);
        Button btnListarPorTipo = findViewById(R.id.btnListarPorTipo);
        Button btnVerAutores = findViewById(R.id.btnVerAutores);

        btnListarPorTipo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                cardapio = new ArrayList<>();

                String valor = txtFiltroTipo.getText().toString();

                if (!valor.isEmpty())
                    buscarCardapioPorTipo();
                else {
                    exibirDialog("Opa opa !!!",
                            "Antes de buscar digite alguns dos filtros abaixo: \n - bebida \n - sobremesa \n - entrada \n - prato principal");
                }
            }
        });

        btnCardapio.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                cardapio = new ArrayList<>();
                buscarCardapio();
            }
        });

        btnVerAutores.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, MainActivity2.class);
                startActivity(intent);
            }
        });
    }

    private void exibirDialog(String titulo, String mensagem) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle(titulo);
        builder.setMessage(mensagem);

        builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                    dialog.dismiss();
                }
        });

        AlertDialog dialog = builder.create();
        dialog.show();
    }
    
    private StringBuilder acessarAPI(String URL_API, boolean ehLista) {

        StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
        StrictMode.setThreadPolicy(policy);

        StringBuilder result = new StringBuilder();

        try {

            URL url = new URL(URL_API);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line;

            while ((line = bufferedReader.readLine()) != null) {
                if(ehLista) {
                    result.append(line + "\n ");
                }
                else {
                    result.append(line);
                }
            }

            bufferedReader.close();
            connection.disconnect();

        }
        catch(Exception e) {
            exibirDialog("Aconteceu algum problema !!!", e.toString());
        }

        return result;
    }

    private void buscarCardapio() {

        try {
            cardapio.add(acessarAPI(configuration.URL_API_LISTA_ITENS_CAFETERIA, true).toString());
            ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, cardapio);
            listView.setAdapter(adapter);
        }
        catch (Exception e) {
            exibirDialog("Aconteceu algum problema !!!", e.toString());
        }
    }

    private void buscarCardapioPorTipo() {

        try {

            JSONObject jsonObject = new JSONObject(acessarAPI(configuration.URL_API_CAFETERIA, false).toString());
            JSONArray itensArray = jsonObject.getJSONArray("itens");

            for (int i = 0; i < itensArray.length(); i++) {
                JSONObject item = itensArray.getJSONObject(i);

                int codigo = item.getInt("codigo");
                String nome = item.getString("nome");
                String tipo = item.getString("tipo");
                Double preco = item.getDouble("preco");

                if (tipo.contains(txtFiltroTipo.getText().toString()))
                    cardapio.add(codigo + ") " + nome + " | " + tipo + " | R$ " + preco);
                
            }

            if (cardapio.isEmpty())
                exibirDialog("OPA OPA !!!",
                        "Em nosso cardapio não existe o tipo de produto informado. Pesquise por: \n - bebida \n - sobremesa \n - entrada \n - prato principal");
            else {
                ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, cardapio);
                listView.setAdapter(adapter);
            }
        } catch (Exception e) {
            exibirDialog("Aconteceu algum problema !!!", e.toString());
        }
    }
}