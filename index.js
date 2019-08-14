const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();
const puppeteer = require('puppeteer');
const path = require('path');
const router = express.Router();
const fs = require('fs');
const tt1 = require('./Functions/23andMe/23andMe1');

app.post('/', jsonParser, function (req, res) {

    console.log("get");
    // console.log("datos completos ", req.body);
    // console.log("propeties ", req.body.line_items[0].properties);
    tt1(req.body.line_items[0].id, req.body.line_items);
    res.sendFile(path.join(__dirname + '/Maps/Ancestry/Ancestry14.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
