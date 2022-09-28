const dbconfig = require('./dbconfig');
const sql = require("mssql/msnodesqlv8");

const Getters = {
    async getBrasileirao(estadoId) {
        try {
            let pool = await sql.connect(dbconfig);
            let result = await pool.request().query(`
                SELECT T.Nome, 
                       TT.BrasileiraoQuantidade
                FROM   TimesTitulos TT
                       INNER JOIN Times T on t.TimeId = TT.TimeId
                       INNER JOIN Estados E on E.EstadoId = T.EstadoId
            
                WHERE E.EstadoId = ${estadoId}`
            );
            return result.recordsets;
        }
        catch (error) {
            return error;
        }
    },
    async getLibertadores(estadoId) {
        try {
            let pool = await sql.connect(dbconfig);
            let result = await pool.request().query(`
                SELECT T.Nome, 
                       TT.LibertadoresQuantidade
                FROM   TimesTitulos TT
                       INNER JOIN Times T on t.TimeId = TT.TimeId
                       INNER JOIN Estados E on E.EstadoId = T.EstadoId
            
                WHERE E.EstadoId = ${estadoId}`
            );
            return result.recordsets;
        }
        catch (error) {
            return error;
        }
    },
    async getMundial(estadoId) {
        try {
            let pool = await sql.connect(dbconfig);
            let result = await pool.request().query(`
                SELECT T.Nome, 
                       TT.MundialQuantidade
                FROM   TimesTitulos TT
                       INNER JOIN Times T on t.TimeId = TT.TimeId
                       INNER JOIN Estados E on E.EstadoId = T.EstadoId
            
                WHERE E.EstadoId = ${estadoId}`
            );
            return result.recordsets;
        }
        catch (error) {
            return error;
        }
    },
    async getSulamerica(estadoId) {
        try {
            let pool = await sql.connect(dbconfig);
            let result = await pool.request().query(`
                SELECT T.Nome, 
                       TT.SulamericanaQuantidade
                FROM   TimesTitulos TT
                       INNER JOIN Times T on t.TimeId = TT.TimeId
                       INNER JOIN Estados E on E.EstadoId = T.EstadoId
            
                WHERE E.EstadoId = ${estadoId}`
            );
            return result.recordsets;
        }
        catch (error) {
            return error;
        }
    },
    async getCopaDoBrasil(estadoId) {
        try {
            let pool = await sql.connect(dbconfig);
            let result = await pool.request().query(`
                SELECT T.Nome, 
                       TT.CopaDoBrasilQuantidade
                FROM   TimesTitulos TT
                       INNER JOIN Times T on t.TimeId = TT.TimeId
                       INNER JOIN Estados E on E.EstadoId = T.EstadoId
            
                WHERE E.EstadoId = ${estadoId}`
            );
            return result.recordsets;
        }
        catch (error) {
            return error;
        }
    },
    async getEstados() {
        try {
            let pool = await sql.connect(dbconfig);
            let result = await pool.request().query(`
                SELECT E.EstadoId,
                       E.Descricao
                FROM   Estados E`
            );

            return result.recordsets;
        }
        catch (error) {
            return error;
        }
    }
};

module.exports = Getters;