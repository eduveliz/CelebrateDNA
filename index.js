const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();
const path = require('path');
const ttSelector = require('./Functions/Maps/TshirtAndHoddies/BrigthMaps/23andMe/ttSelector');
const ttPreviewSelector = require('./Functions/Maps/TshirtAndHoddiesPreview/PreviewBrigthMaps/23andMe/ttPreviewSelector');
const ancestryPreviewSelector = require('./Functions/Maps/TshirtAndHoddiesPreview/PreviewBrigthMaps/Ancestry/AncestryPreviewSelector');
const myHeritagePreviewSelector = require('./Functions/Maps/TshirtAndHoddiesPreview/PreviewBrigthMaps/MyHeritage/MyHeritagePreviewSelector');
const toArray = require('lodash.toarray');
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));


app.get('/previews', jsonParser, function (req, res) {
    res.sendFile(path.join(__dirname + '/previews/123.png'));
});

app.post('/test', jsonParser, function (req, res) {
    console.log("create preview");
    const id = 123;
    const regionNumber = req.body.regions.length;
    console.log(req.body);
    if (req.body.company === "Ancestry") {
        return ancestryPreviewSelector(regionNumber, id, req.body).then(() => {
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        });
    }
    if (req.body.company === "23andMe") {
        return ttPreviewSelector(regionNumber, id, req.body).then(() => {
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        });
    }

    if (req.body.company === "MyHeritageDNA") {
        return myHeritagePreviewSelector(regionNumber, id, req.body).then(() => {
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        });
    }

});

app.get("/", jsonParser, function (req, res) {
    res.send("hola soy el servidor");
});


app.post('/printfull', jsonParser, function (req, res) {
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


