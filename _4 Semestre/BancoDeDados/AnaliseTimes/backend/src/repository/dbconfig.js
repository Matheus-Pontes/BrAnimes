const sqlConfig = {
    database: "master", // O banco de dados
    server: "DESKTOP-Q0NTQBI\\MEUBANCODEDADOS", // Connection string
    port: 55490, // qual porta o serviço do DB está funcionando
    driver: 'msnodesqlv8', // driver para conexão
    options: {
        trustedConnection: true,
    }
};

module.exports = sqlConfig;