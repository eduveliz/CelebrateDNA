const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');
const jsonParser = bodyParser.json();
const path = require('path');
const axios = require('axios');

const ttSelector = require('./Functions/Maps/TshirtAndHoddies/BrigthMaps/23andMe/ttSelector');
//brigth
const ttPreviewSelector = require('./Functions/Maps/TshirtAndHoddiesPreview/BrigthMaps/ttPreviewSelector');
//earth
const ancestryPreviewSelectorEarth = require('./Functions/Maps/TshirtAndHoddiesPreview/Earth Tone/Ancestry/AncestryPreviewSelector');
const ttPreviewSelectorEarth = require('./Functions/Maps/TshirtAndHoddiesPreview/Earth Tone/23andMe/ttPreviewSelector');
const myHeritagePreviewSelectorEarth = require('./Functions/Maps/TshirtAndHoddiesPreview/Earth Tone/MyHeritage/MyHeritagePreviewSelector');
//Helix
const helixSelector = require('./Functions/Helix/HelixSelector');
const helixVerticalSelector = require('./Functions/HelixVertical/HelixVerticalSelector');

//printFull horizontal helix
const helixSelectorPrintfull = require('./Functions/HelixPrintfull/HelixSelector');
const setNumberRegionsHelix = require('./Functions/RegionNumbers/setRegionNumberHelix');
//printFull Vertical



//Donut
const donut = require('./Functions/Donut/DonutSelector');

//IlovemyDna
const love = require('./Functions/ILoveMyDNA/LoveSelector');

//Yellow
const YelloeSelector = require('./Functions/Totes/Yellow/RegionYellowPreview');


//Black
const RegionSelector = require('./Functions/Totes/Black/Maps/RegionSelector');


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

    return ttPreviewSelector(regionNumber, id, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});

app.post('/earth', jsonParser, function (req, res) {
    console.log("creating Earth...");
    const id = 123;
    const regionNumber = req.body.regions.length;
    if (req.body.company === "Maps") {
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

app.post('/loveDNA', jsonParser, function (req, res) {
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
    return YelloeSelector(regionNumber, id, req.body).then(() => {
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

app.post('/printfull', jsonParser, function (req, res) {
    const {line_items, shipping_address} = req.body;
    const cantidad = line_items[0].properties;
    const nameFile = Date.now();
    const sku = req.body.line_items[0].sku;
    const id = line_items[0].id;
    console.log("dato regiones", toArray(cantidad).length);

    // const name = shipping_address.first_name;
    // const address1 = shipping_address.address1;
    // const city = shipping_address.city;
    // const stateCode = shipping_address.province_code;
    // const countryCode = shipping_address.country_code;
    // const zip = shipping_address.zip;

    helixSelectorPrintfull(setNumberRegionsHelix(toArray(cantidad).length), req.body, nameFile).then(() => {
        return axios.post('https://api.printful.com/orders', {
                "recipient": {
                    "name": "Alex",
                    "address1": "19749 Dearborn St",
                    "city": "Chatsworth",
                    "state_code": "CA",
                    "country_code": "US",
                    "zip": "91311"
                },
                "items": [{
                    "variant_id": sku,
                    "quantity": 1,
                    "files": [{
                        "url": "https://987560b2.ngrok.io/" + nameFile + ".png"
                    }]
                }]
            },
            {
                headers: {Authorization: "Basic b3JrY3VkYm8tcXVqcS0wYzBzOnM4ZWItbW1iZzN5ajRzNjNj"}
            }
        ).catch(reason => console.log("asd" + reason));

    }).catch(error => console.log('este es el error', error));

    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});


