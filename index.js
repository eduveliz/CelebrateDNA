const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();
const path = require('path');
const tt1 = require('./Functions/BrigthMaps/23andMe/23andMe14');

app.get('/previews', jsonParser, function (req, res) {
    //console.log("get");
    //console.log("datos completos ", req.body);
    //tt1(req.body.line_items[0].id, req.body.line_items);
    res.sendFile(path.join(__dirname + '/previews/29640056471649.png'));
});

app.post('/', jsonParser, function (req, res) {
    //console.log("get");
    console.log(Date.now());
    //  console.log("datos completos ", req.body);
    tt1(req.body.line_items[0].id, req.body.line_items);
    //res.sendFile(path.join(__dirname + '/previews/29640056471649.png'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
