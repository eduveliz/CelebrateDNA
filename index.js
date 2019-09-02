const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');
const jsonParser = bodyParser.json();
const path = require('path');
const axios = require('axios');

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

//IlovemyDna

const love = require('./Functions/ILoveMyDNA/LoveSelector');

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

app.post('/loveDNA', jsonParser, function (req, res) {
    console.log(req.body);
    const regionNumber = req.body.regions.length;
    return love(regionNumber, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});


app.post('/printfull', jsonParser, function (req, res) {

    //const regionNumber = toArray(req.body.line_items[0].properties).length;
    const {line_items, shipping_address} = req.body;
    const productos = line_items;

    const name = shipping_address.first_name;
    const address1 = shipping_address.address1;
    const city = shipping_address.city;
    const stateCode = shipping_address.province_code;
    const countryCode = shipping_address.country_code;
    const zip = shipping_address.zip;

    productos.map((producto) => {
        axios.post(' https://api.printful.com/orders', {
            "recipient": {
                "name": name,
                "address1": address1,
                "city": city,
                "state_code": stateCode,
                "country_code": countryCode,
                "zip": zip
            },
            "items": [{
                "variant_id": 1320,
                "quantity": producto.quantity,
                "files": [{
                    "url": "https://b52b2a64.ngrok.io/DNA/amarillo.png"
                }]
            }]
        }, {headers: {Authorization: "Basic b3JrY3VkYm8tcXVqcS0wYzBzOnM4ZWItbW1iZzN5ajRzNjNj"}});
        //  console.log(producto)
    });
    //console.log(req.body.line_items.length);
    //console.log(toArray(req.body.line_items[0].properties));

    // const name = "eduardo";
    // const address1 = "Guatemala 355";
    // const city = "Lima";
    // const stateCode = "Li";
    // const countryCode = "PE";
    // const zip = "1253";

    console.log(colors.yellow(Date.now()));
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});


