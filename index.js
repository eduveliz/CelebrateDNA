const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();
const path = require('path');
const ttSelector = require('./Functions/Maps/TshirtAndHoddies/BrigthMaps/23andMe/ttSelector');
//brigth
const ttPreviewSelector = require('./Functions/Maps/TshirtAndHoddiesPreview/BrigthMaps/23andMe/ttPreviewSelector');
const ancestryPreviewSelector = require('./Functions/Maps/TshirtAndHoddiesPreview/BrigthMaps/Ancestry/AncestryPreviewSelector');
const myHeritagePreviewSelector = require('./Functions/Maps/TshirtAndHoddiesPreview/BrigthMaps/MyHeritage/MyHeritagePreviewSelector');
//earth
const ancestryPreviewSelectorEarth = require('./Functions/Maps/TshirtAndHoddiesPreview/Earth Tone/Ancestry/AncestryPreviewSelector');
const ttPreviewSelectorEarth = require('./Functions/Maps/TshirtAndHoddiesPreview/Earth Tone/23andMe/ttPreviewSelector');
const myHeritagePreviewSelectorEarth = require('./Functions/Maps/TshirtAndHoddiesPreview/Earth Tone/MyHeritage/MyHeritagePreviewSelector');
//Helix
const helixSelector = require('./Functions/Helix/HelixSelector');
const helixVerticalSelector = require('./Functions/HelixVertical/HelixVerticalSelector');

//Donut
const donut = require('./Functions/Donut/DonutSelector');

const toArray = require('lodash.toarray');
const colors = require('colors');
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));

app.get("/", jsonParser, function (req, res) {
    res.send("Server on");
});

app.get('/previews/:id', jsonParser, function (req, res) {
    const id = req.params.id;
    console.log("created ".yellow + id.blue);
    res.sendFile(path.join(__dirname + '/previews/' + id + '.png'));
});

app.post('/brigth', jsonParser, function (req, res) {
    console.log("creating...");
    console.log(req.body);
    const id = 123;
    const regionNumber = req.body.regions.length;
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

app.post('/earth', jsonParser, function (req, res) {
    console.log("creating Earth...");
    const id = 123;
    const regionNumber = req.body.regions.length;
    if (req.body.company === "Ancestry") {
        return ancestryPreviewSelectorEarth(regionNumber, id, req.body).then(() => {
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        });
    }
    if (req.body.company === "23andMe") {
        return ttPreviewSelectorEarth(regionNumber, id, req.body).then(() => {
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        });
    }
    if (req.body.company === "MyHeritageDNA") {
        return myHeritagePreviewSelectorEarth(regionNumber, id, req.body).then(() => {
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        });
    }
});

app.post('/helixHorizontal', jsonParser, function (req, res) {
    console.log("creating Helix... " + req.body.nameFile);
    console.log(req.body);
    const regionNumber = req.body.regions.length;
    return helixSelector(regionNumber, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});

app.post('/helixVertical', jsonParser, function (req, res) {
    console.log("creating Helix Vertical... " + req.body.nameFile);
    console.log(req.body);
    const regionNumber = req.body.regions.length;
    return helixVerticalSelector(regionNumber, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});

app.post('/donut', jsonParser, function (req, res) {
    console.log("creating Helix Vertical... " + req.body.nameFile);
    console.log(req.body);
    const regionNumber = req.body.regions.length;
    return donut(regionNumber, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
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


