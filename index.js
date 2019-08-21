const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();
const path = require('path');
const ttSelector = require('./Functions/BrigthMaps/23andMe/ttSelector');
const ttPreviewSelector = require('./Functions/PreviewBrigthMaps/23andMe/ttPreviewSelector');
const ancestryPreviewSelector = require('./Functions/PreviewBrigthMaps/Ancestry/AncestryPreviewSelector');
const myHeritagePreviewSelector = require('./Functions/PreviewBrigthMaps/MyHeritage/MyHeritagePreviewSelector');
const toArray = require('lodash.toarray');
const cors = require('cors');

app.use(cors());

app.get('/previews', jsonParser, function (req, res) {
    res.sendFile(path.join(__dirname + '/previews/29640056471649.png'));
});

app.post('/test', jsonParser, function (req, res) {
    const id = 123;
    const regionNumber = req.body.regions.length;

    if (req.body.company === "Ancestry") {
        return ancestryPreviewSelector(regionNumber, id, req.body);
    }

    if (req.body.company === "23andMe") {
        return ttPreviewSelector(regionNumber, id, req.body);
    }

    if (req.body.company === "MyHeritageDNA") {
        return myHeritagePreviewSelector(regionNumber, id, req.body);
    }
    console.log("Revived a preview");
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


