const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../Functions/ColorsBackground/BrightMap');
const fontStyle = require('../../Functions/FontStyle/FontStyle');
const fontColor = require('../../Functions/FontStyle/FontStyle');
const colorProductSelect = require('../../Functions/Color/Color');

module.exports = createPreview = async (nameFile, propiedades) => {
    const name = propiedades.nameFile;
    const firstRegionName = propiedades.regions[0].region;
    // const firstRegionNameSelector = regionNames(propiedades.regions[0].region);
    const firstRegionNumber = propiedades.regions[0].porcentaje;
    //Background Map
    const colorProduct = propiedades.colorProduct;
    //Headline
    const headline = propiedades.headLine === "Personalized headline" ? propiedades.personalHeadline : propiedades.headLine;
    //FontSize
    const font = fontStyle(propiedades.fontStyle);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(`
    <!DOCTYPE html> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
    .textDNA {
        font-size: 24pt;
        width: 260px;
        font-family: "Bangla MN", serif;
        margin-top: 289px;
        transform-origin: 0 0;
        transform: rotate(270deg);
        z-index: 1;
        position: absolute;
        left: 2%;
        text-align: center;
        height: 300px;
    }

    .dna {
        color: red;
    }

    .name {
        color: blue;
    }

    .region {
        font-size: 42pt;
        color: white;
        text-align: center;
    }

</style>
<body style="width: 12in;height:16.04in;background-color: #233B37">
<div style="display: flex;margin-top: 30%">
    <div class="textDNA">
        <div><label class="name">Eduardo </label><label class="dna">DNA</label></div>
    </div>
    <div style="width: 12in">
        <img style="width: 12in" src="https://moolab.ml/Helix.png">
    </div>
</div>
<div style="width: 100%">
    <div class="region">${firstRegionName} ${firstRegionNumber}  %</div>
</div>
</body>
</html>
`);

    await page.setViewport({
        width: 1152,
        height: 1536,
        deviceScaleFactor: 1,
    });
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
