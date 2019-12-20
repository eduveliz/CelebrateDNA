const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();
const path = require('path');
const moment = require('moment');
const projectConfig = require('./ProjectConfig');
const previewSelector = require('./Functions/Previews/Maps/BrigthMaps/ttPreviewSelector');
const earthSelector = require('./Functions/Previews/Maps/Earth Tone/earthPreviewSelector');
const helixSelector = require('./Functions/Previews/Helix/HelixSelector');
const helixVerticalSelector = require('./Functions/Previews/HelixVertical/HelixVerticalSelector');
const helixSelectorMug = require('./Functions/Previews/HelixMug/HelixSelector');
const donut = require('./Functions/Previews/Donut/DonutSelector');
const love = require('./Functions/Previews/ILoveMyDNA/LoveSelector');
const YellowSelector = require('./Functions/Previews/Totes/Yellow/RegionSelector');
const RegionSelector = require('./Functions/Previews/Totes/Black/RegionSelector');

const mugMapSelector = require('./Functions/Previews/MapsMug/BrigthMaps/ttPreviewSelector');
const mugMapEartSelector = require('./Functions/Previews/MapsMug/Earth Tone/earthPreviewSelector');
const colors = require('colors');
const cors = require('cors');

process.setMaxListeners(100);

app.use(cors());
app.use(express.static('public'));
app.use(express.json({limit: '50mb'}));


app.get("/", jsonParser, function (req, res) {
    res.send("Server on");
});

app.get('/previews/:id', jsonParser, function (req, res) {
    const id = req.params.id;
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log("created ".yellow + id.blue);
    setTimeout(() => {
        res.sendFile(path.join(__dirname + '/previews/' + id + '.png'));
    }, 6000)
});

app.post('/brigth', jsonParser, function (req, res) {
    console.log("creating...".red);
    console.log(req.body);
    const regionNumber = req.body.regions.length;

    return previewSelector(regionNumber, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});

app.post('/earth', jsonParser, function (req, res) {
    console.log("creating Earth Tones...".red);
    console.log(req.body);
    const regionNumber = req.body.regions.length;

    return earthSelector(regionNumber, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});

app.post('/helixHorizontal', jsonParser, function (req, res) {
    console.log("creating Helix... ".red + req.body.nameFile);
    console.log(req.body);
    const regionNumber = req.body.regions.length;
    return helixSelector(regionNumber, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});

app.post('/helixVertical', jsonParser, function (req, res) {
    console.log("creating Helix Vertical...".red + req.body.nameFile);
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

app.post('/loveDNA', jsonParser, function (req, res) {
    console.log("creating I Love My DNA...".red + req.body.nameFile);
    console.log(req.body);
    const regionNumber = req.body.regions.length;
    return love(regionNumber, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});

app.post('/Yellow', jsonParser, function (req, res) {
    console.log("creating...");
    console.log(req.body);
    const id = 123;
    const regionNumber = req.body.regions.length;
    return YellowSelector(regionNumber, id, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});

app.post('/black', jsonParser, function (req, res) {
    console.log("creating...");
    console.log(req.body);
    const id = 123;
    const regionNumber = req.body.regions.length;
    RegionSelector(regionNumber, id, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});

app.post('/mugHelix', jsonParser, function (req, res) {
    console.log("creating Mug Helix... ".red + req.body.nameFile);
    console.log(req.body);
    const regionNumber = req.body.regions.length;
    return helixSelectorMug(regionNumber, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});

app.post('/mugMap', jsonParser, function (req, res) {
    console.log("creating Mug Map... ".red + req.body.nameFile);
    console.log(req.body);
    const regionNumber = req.body.regions.length;
    return mugMapSelector(regionNumber, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});

app.post('/mugMapEart', jsonParser, function (req, res) {
    console.log("creating Mug Map Eart... ".red + req.body.nameFile);
    console.log(req.body);
    const regionNumber = req.body.regions.length;
    return mugMapEartSelector(regionNumber, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});

app.post('/printfull', jsonParser, function (req, res) {
    projectConfig("dev", req);
    return res.end('{"success" : "Updated Successfully", "status" : 200}');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
