const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 3000;

const repos = require('./repository/TimesRepository');

// Para evitar problemas de origem 
app.use(cors({
    origin: '*'
}));

app.get("/", function(req, res) {
    return res.send({ conexaoFeita: true});
});

app.get('/timesTitulos/:id', async function(req, res) {
    const estadoId = req.params.id;

    const times = await repos.getTimesTitulos(estadoId).then(data => data);

    return res.send(times);
});

app.get('/estados', async function(req, res) {
    const estados = await repos.getEstados().then(data => data);

    return res.send(estados);
});
// 
app.listen(PORT, function(){
    console.log("Server funcionando");
});