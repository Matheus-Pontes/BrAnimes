-- Busca titulo dos clubes por estado

SELECT T.Nome,
        TT.BrasileiraoQuantidade,
        TT.LibertadoresQuantidade,
        TT.CopaDoBrasilQuantidade,
        TT.SulamericanaQuantidade,
        TT.MundialQuantidade
FROM    TimesTitulos TT
        INNER JOIN Times T on t.TimeId = TT.TimeId
        INNER JOIN Estados E on E.EstadoId = T.EstadoId

WHERE E.EstadoId = 1
ORDER BY T.Nome 

-- Busca todos os estados
SELECT E.EstadoId,
       E.Descricao
FROM   Estados E