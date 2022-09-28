const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 3000;

const repos = require('./repository/TimesRepository');

// Para evitar problemas de origem 
app.use(cors({
    origin: '*'
}));

app.get('/sulamericana/:id', async function(req, res) {
    const estadoId = req.params.id;

    const times = await repos.getSulamerica(estadoId).then(data => data);

    return res.send(times);
});

app.get('/copadobrasil/:id', async function(req, res) {
    const estadoId = req.params.id;

    const times = await repos.getCopaDoBrasil(estadoId).then(data => data);

    return res.send(times);
});

app.get('/libertadores/:id', async function(req, res) {
    const estadoId = req.params.id;

    const times = await repos.getLibertadores(estadoId).then(data => data);

    return res.send(times);
});

app.get('/mundial/:id', async function(req, res) {
    const estadoId = req.params.id;

    const times = await repos.getMundial(estadoId).then(data => data);

    return res.send(times);
});

app.get('/brasileirao/:id', async function(req, res) {
    const estadoId = req.params.id;

    const times = await repos.getBrasileirao(estadoId).then(data => data);

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