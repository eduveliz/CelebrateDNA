const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();
const puppeteer = require('puppeteer');
const path = require('path');
const router = express.Router();
const fs = require('fs')

createPreview = async (ubicacion, data) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1152,
        height: 1536,
        deviceScaleFactor: 1,
    });

    await page.setContent(``);
    fs.mkdirSync(ubicacion);

    await page.screenshot({path: `${ubicacion}//screenshot1.png`});
    await browser.close();
};


app.get('/', jsonParser, function (req, res) {
    createPreview("papu", "Central_Asia");
    console.log("get");
    //console.log("datos completos ", req.body);
    //console.log("propeties ", req.body.line_items[0].properties);
    res.sendFile(path.join(__dirname + '/Maps/Ancestry/Ancestry14.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
