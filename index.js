const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();
const path = require('path');

const tt14 = require('./Functions/BrigthMaps/23andMe/23andMe14');
const tt13 = require('./Functions/BrigthMaps/23andMe/23andMe13');
const tt12 = require('./Functions/BrigthMaps/23andMe/23andMe12');
const tt11 = require('./Functions/BrigthMaps/23andMe/23andMe11');
const tt10 = require('./Functions/BrigthMaps/23andMe/23andMe10');
const tt9 = require('./Functions/BrigthMaps/23andMe/23andMe9');
const tt8 = require('./Functions/BrigthMaps/23andMe/23andMe8');
const tt7 = require('./Functions/BrigthMaps/23andMe/23andMe7');
const tt6 = require('./Functions/BrigthMaps/23andMe/23andMe6');
const tt5 = require('./Functions/BrigthMaps/23andMe/23andMe5');
const tt4 = require('./Functions/BrigthMaps/23andMe/23andMe4');
const tt3 = require('./Functions/BrigthMaps/23andMe/23andMe3');
const tt2 = require('./Functions/BrigthMaps/23andMe/23andMe2');
const tt1 = require('./Functions/BrigthMaps/23andMe/23andMe1');

app.get('/previews', jsonParser, function (req, res) {
    res.sendFile(path.join(__dirname + '/previews/29640056471649.png'));
});

app.post('/', jsonParser, function (req, res) {    //console.log("get");
    console.log("datos completos ", req.body.line_items);
    console.log(Date.now());
    tt1(req.body.line_items[0].id, req.body.line_items);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
