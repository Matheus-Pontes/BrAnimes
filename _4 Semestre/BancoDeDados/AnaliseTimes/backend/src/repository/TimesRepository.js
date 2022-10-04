const dbconfig = require('./dbconfig');
const sql = require("mssql/msnodesqlv8");

const Getters = {
    async getTimesTitulos(estadoId) {
        try {
            let pool = await sql.connect(dbconfig);
            let result = await pool.request().query(`
                SELECT T.Nome,
                       TT.BrasileiraoQuantidade,
                       TT.LibertadoresQuantidade,
                       TT.CopaDoBrasilQuantidade,
                       TT.SulamericanaQuantidade,
                       TT.MundialQuantidade
                FROM   TimesTitulos TT
                       INNER JOIN Times T on t.TimeId = TT.TimeId
                       INNER JOIN Estados E on E.EstadoId = T.EstadoId
            
                WHERE E.EstadoId = ${estadoId}
                ORDER BY T.Nome `
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