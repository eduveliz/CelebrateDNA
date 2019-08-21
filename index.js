const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();
const path = require('path');
const ttSelector = require('./Functions/BrigthMaps/23andMe/ttSelector');
const ttPreviewSelector = require('./Functions/PreviewBrigthMaps/23andMe/ttPreviewSelector');
const toArray = require('lodash.toarray');
const cors = require('cors');

app.use(cors());

app.get('/previews', jsonParser, function (req, res) {
    res.sendFile(path.join(__dirname + '/previews/29640056471649.png'));
});

app.post('/test', jsonParser, function (req, res) {
    console.log("Revived a preview");
    const id = 123;
    const regionNumber = req.body.regions.length;
    if (!regionNumber) {
    } else {
        ttPreviewSelector(regionNumber, id, req.body);
    }
});

app.post('/', jsonParser, function (req, res) {
    const regionNumber = toArray(req.body.line_items[0].properties).length;
    if (!regionNumber) {
    } else {
        ttSelector(regionNumber, req.body.line_items[0].id, req.body.line_items);
    }
    console.log(Date.now());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});


