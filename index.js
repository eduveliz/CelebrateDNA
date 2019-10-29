const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();
const path = require('path');
const axios = require('axios');
const moment = require('moment');
//brigth
const previewSelector = require('./Functions/Maps/BrigthMaps/ttPreviewSelector');
const mapsPrintfullBrigth = require('./Functions/PrintFullMaps/BrigthMaps/brigthPreviewSelector');

//earth
const earthSelector = require('./Functions/Maps/Earth Tone/earthPreviewSelector');
const mapsPrintfullEarth = require('./Functions/PrintFullMaps/Earth Tone/earthPreviewSelector');

//PreviewHelix
const helixSelector = require('./Functions/PreviewHelix/HelixSelector');
const helixVerticalSelector = require('./Functions/PreviewHelixVertical/HelixVerticalSelector');

//printFull horizontal helix
const helixSelectorPrintfull = require('./Functions/PrintfullHelix/HelixSelector');
const setNumberRegionsHelix = require('./Functions/RegionNumbers/setRegionNumberHelix');
//printFull Vertical
const helixVerticalSelectorPrintfull = require('./Functions/PrintfullHelixVertical/HelixVerticalSelector');
const setNumberRegionsHelixVertical = require('./Functions/RegionNumbers/setRegionNumberHelixVertical');
//printfull I love my dna
const loveSelectorPrintfull = require('./Functions/PrintfullILoveMyDNA/LoveSelector');
const setNumberRegionsLove = require('./Functions/RegionNumbers/setRegionNumberLovel');

const setNumberMaps = require('./Functions/RegionNumbers/setRegionNumberMaps');

//PreviewDonut
const donut = require('./Functions/PreviewDonut/DonutSelector');

//IloveMyDna
const love = require('./Functions/PreviewILoveMyDNA/LoveSelector');

//Yellow
const YellowSelector = require('./Functions/PreviewTotes/Yellow/RegionSelector');
const YellowPrintfullSelector = require('./Functions/PrintfullYellowTotes/RegionSelector');
const setNumberRegionTotes = require('./Functions/RegionNumbers/setRegionNumberTotes');


const boldPrintfullSelector = require('./Functions/PrintfullBoldTotes/RegionSelector');
const setNumberRegionTotesBold = require('./Functions/RegionNumbers/setRegionNumberTotesBold');

//Black
const RegionSelector = require('./Functions/PreviewTotes/Black/RegionSelector');

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
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log("created ".yellow + id.blue);
    res.sendFile(path.join(__dirname + '/previews/' + id + '.png'));
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
    console.log("creating PreviewHelix... ".red + req.body.nameFile);
    console.log(req.body);
    const regionNumber = req.body.regions.length;
    return helixSelector(regionNumber, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});

app.post('/helixVertical', jsonParser, function (req, res) {
    console.log("creating PreviewHelix Vertical...".red + req.body.nameFile);
    console.log(req.body);
    const regionNumber = req.body.regions.length;
    return helixVerticalSelector(regionNumber, req.body).then(() => {
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    });
});

app.post('/donut', jsonParser, function (req, res) {
    console.log("creating PreviewHelix Vertical... " + req.body.nameFile);
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

app.post('/printfull', jsonParser, function (req, res) {
    const {line_items, shipping_address} = req.body;
    const cantidad = line_items[0].properties;

    const nameFile = Date.now();
    const sku = line_items[0].sku;
    const id = line_items[0].product_id.toString();

    // const name = shipping_address.first_name;
    // const address1 = shipping_address.address1;
    // const city = shipping_address.city;
    // const stateCode = shipping_address.province_code;
    // const countryCode = shipping_address.country_code;
    // const zip = shipping_address.zip;

    const name = "EduardoTest";
    const address1 = "19749 Dearborn St";
    const city = "Chatsworth";
    const stateCode = "CA";
    const countryCode = "US";
    const zip = "91311";

    if (id === "1857838415915" || id === "1859574300715") {
        mapsPrintfullBrigth(setNumberMaps(toArray(cantidad).length), req.body, nameFile).then(() => {
            axios.post('https://api.printful.com/orders', {
                    "recipient": {
                        "name": name,
                        "address1": address1,
                        "city": city,
                        "state_code": stateCode,
                        "country_code": countryCode,
                        "zip": zip
                    },
                    "items": [{
                        "variant_id": sku,
                        "quantity": 1,
                        "files": [{
                            "url": "https://moolab.ml/" + nameFile + ".png"
                        }]
                    }]
                },
                {
                    headers: {Authorization: "Basic b3JrY3VkYm8tcXVqcS0wYzBzOnM4ZWItbW1iZzN5ajRzNjNj"}
                }
            ).catch(reason => console.log("Error" + reason));

            return res.end('{"success" : "Updated Successfully", "status" : 200}');
        });
    }

    if (id === "1859442409515" || id === "1859617882155") {
        mapsPrintfullEarth(setNumberMaps(toArray(cantidad).length), req.body, nameFile).then(() => {
            axios.post('https://api.printful.com/orders', {
                    "recipient": {
                        "name": name,
                        "address1": address1,
                        "city": city,
                        "state_code": stateCode,
                        "country_code": countryCode,
                        "zip": zip
                    },
                    "items": [{
                        "variant_id": sku,
                        "quantity": 1,
                        "files": [{
                            "url": "https://moolab.ml/" + nameFile + ".png"
                        }]
                    }]
                },
                {
                    headers: {Authorization: "Basic b3JrY3VkYm8tcXVqcS0wYzBzOnM4ZWItbW1iZzN5ajRzNjNj"}
                }
            ).catch(reason => console.log("Error" + reason));

            return res.end('{"success" : "Updated Successfully", "status" : 200}');
        });
    }


    if (id === "1864978006059" || id === "1865315287083") {
        helixSelectorPrintfull(setNumberRegionsHelix(toArray(cantidad).length), req.body, nameFile).then(() => {
            return axios.post('https://api.printful.com/orders', {
                    "recipient": {
                        "name": name,
                        "address1": address1,
                        "city": city,
                        "state_code": stateCode,
                        "country_code": countryCode,
                        "zip": zip
                    },
                    "items": [{
                        "variant_id": sku,
                        "quantity": 1,
                        "files": [{
                            "url": "https://moolab.ml/" + nameFile + ".png"
                        }]
                    }]
                },
                {
                    headers: {Authorization: "Basic b3JrY3VkYm8tcXVqcS0wYzBzOnM4ZWItbW1iZzN5ajRzNjNj"}
                }
            ).catch(reason => console.log("Error" + reason));

        }).then(() => {
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        });
    }

    if (id === "1865318268971" || id === "1864993439787") {
        helixVerticalSelectorPrintfull(setNumberRegionsHelixVertical(toArray(cantidad).length), req.body, nameFile).then(() => {
            return axios.post('https://api.printful.com/orders', {
                    "recipient": {
                        "name": name,
                        "address1": address1,
                        "city": city,
                        "state_code": stateCode,
                        "country_code": countryCode,
                        "zip": zip
                    },
                    "items": [{
                        "variant_id": sku,
                        "quantity": 1,
                        "files": [{
                            "url": "https://moolab.ml/" + nameFile + ".png"
                        }]
                    }]
                },
                {
                    headers: {Authorization: "Basic b3JrY3VkYm8tcXVqcS0wYzBzOnM4ZWItbW1iZzN5ajRzNjNj"}
                }).then(() => {
                res.end('{"success" : "Updated Successfully", "status" : 200}');
            }).catch(reason => console.log("Error" + reason));
        });
        return res.end('{"success" : "Updated Successfully", "status" : 200}')
    }

    if (id === "1865350643755" || id === "1865381838891") {
        loveSelectorPrintfull(setNumberRegionsLove(toArray(cantidad).length), req.body, nameFile).then(() => {
            return axios.post('https://api.printful.com/orders', {
                    "recipient": {
                        "name": name,
                        "address1": address1,
                        "city": city,
                        "state_code": stateCode,
                        "country_code": countryCode,
                        "zip": zip
                    },
                    "items": [{
                        "variant_id": sku,
                        "quantity": 1,
                        "files": [{
                            "url": "https://moolab.ml/" + nameFile + ".png"
                        }]
                    }]
                },
                {
                    headers: {Authorization: "Basic b3JrY3VkYm8tcXVqcS0wYzBzOnM4ZWItbW1iZzN5ajRzNjNj"}
                }
            ).catch(reason => console.log("Error" + reason));

        }).then(() => {
            console.log("Diseño enviardo correctamente");
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        })
    }

    if (id === "1860907204651" || id === "4317967155271") {
        YellowPrintfullSelector(setNumberRegionTotes(toArray(cantidad).length), nameFile, req.body).then(() => {
            return axios.post('https://api.printful.com/orders', {
                    "recipient": {
                        "name": name,
                        "address1": address1,
                        "city": city,
                        "state_code": stateCode,
                        "country_code": countryCode,
                        "zip": zip
                    },
                    "items": [{
                        "variant_id": sku,
                        "quantity": 1,
                        "files": [{
                            "url": "https://0bd4377d.ngrok.io/" + nameFile + ".png"
                        }]
                    }]
                },
                {
                    headers: {Authorization: "Basic b3JrY3VkYm8tcXVqcS0wYzBzOnM4ZWItbW1iZzN5ajRzNjNj"}
                }
            ).catch(reason => console.log("Error" + reason));
        }).then(() => {
            console.log("Diseño enviardo correctamente");
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        });
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    }

    if (id === "1859664674859") {
        boldPrintfullSelector(setNumberRegionTotesBold(toArray(cantidad).length), nameFile, req.body).then(() => {
            return axios.post('https://api.printful.com/orders', {
                    "recipient": {
                        "name": name,
                        "address1": address1,
                        "city": city,
                        "state_code": stateCode,
                        "country_code": countryCode,
                        "zip": zip
                    },
                    "items": [{
                        "variant_id": sku,
                        "quantity": 1,
                        "files": [{
                            "url": "https://0bd4377d.ngrok.io/" + nameFile + ".png"
                        }]
                    }]
                },
                {
                    headers: {Authorization: "Basic b3JrY3VkYm8tcXVqcS0wYzBzOnM4ZWItbW1iZzN5ajRzNjNj"}
                }
            ).catch(reason => console.log("Error" + reason));
            console.log(true);
        }).then(() => {
            console.log("Diseño enviardo correctamente");
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        });
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    }


});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});


