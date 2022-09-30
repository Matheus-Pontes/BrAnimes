<h1 align='center'>Analise de times e seus títulos <img src="https://img.icons8.com/office/30/000000/pie-chart.png"/></h1>

- O projeto, é uma solução com frontend, backend e banco de dados. 
- Onde, temos gráficos para analise de dados dos times brasileiros e seus títulos filtrando pelo estado.

## Layout

![image](https://user-images.githubusercontent.com/62751571/193364771-00cefb93-9f3c-4db8-a60a-ae0b2b1abe51.png)

## Instalações necessárias
- Banco de dados 
    - No projeto foi usado o [SQL SERVER EXPRESS LocalDB](https://learn.microsoft.com/pt-br/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver16)
-  [NodeJs](https://nodejs.org/en/)
    - Versão LTS 
    - Suas libs
        - Express 
        - Cors
        - mssql
        - msnodesqlv8
    - Para instalar pode usar:
        - ``` node express cors mssql msnodesqlv8 ```
    - Caso de tudo certo verifique as instalações no arquivo:
        - ``` backend/package.json```
        - Propriedade: ``` dependencies ```
- Gráficos
    - Usando API do [google charts](https://developers.google.com/chart)
  
## Execução do projeto
- Clone o projeto
- Tenha um banco de dados 
    - O que foi usado o SQL SERVER
    - Crie as tabelas e preencha com os dados da pasta ``` SCRIPTS ```
- Conecte o banco com a aplicação NodeJS
    - A partir do arquivo ``` backend/src/repository/dbconfig.js ```
- Conexão feita,
    - ligue o servidor ``` backend/src/server ```  
        - comando: ``` node server ``` 

    - Abra o projeto front-end no seu navegador
        - ``` frontend/index.html ``` 
        - obs: para uma visualização inicial, setamos o primeiro filtro para o estado de SP(são paulo)
- Tratativa do front-end
    - Caso o servidor não esteja ligado ou, se os dados não chegaram no front-end, uma mensagem de erro genérica será mostrada na tela para o usuário.
         ![image](https://user-images.githubusercontent.com/62751571/193364534-df8bc14e-ac36-469b-a670-d7decd892e71.png)
<hr>
<h3 align='center'>É ISSO APROVEITE O PROJETO 👊</h3>
