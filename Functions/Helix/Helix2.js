const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../Functions/ColorsBackground/BrightMap');
const fontStyle = require('../../Functions/FontStyle/FontStyle');
const fontColor = require('../../Functions/FontStyle/FontStyle');
const colorProductSelect = require('../../Functions/Color/Color');
const imageHelix = require('../Helix/ImageHelix');


module.exports = createPreview = async (propiedades) => {
    //Regions  */ RegionsNamesSelectors is for Jquery/*
    const name = propiedades.nameFile;
    const firstRegionName = propiedades.regions[0].region;
    const firstRegionNumber = propiedades.regions[0].porcentaje;

    const secondRegionName = propiedades.regions[1].region;
    const secondRegionNumber = propiedades.regions[1].porcentaje;

    const backgroundColor = colorBackground(propiedades.color);
    const backgroundLineWorld = backgroundColor === "transparent" ? "black" : "none";
    const colorProduct = propiedades.colorProduct;
    //Headline
    const headline = propiedades.headLine;
    const firstName = propiedades.personalHeadline;
    //FontSize
    const font = fontStyle(propiedades.fontStyle);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1152,
        height: 1536,
        deviceScaleFactor: 1,
    });

    await page.setContent(`<html lang="en">
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
        color: white;
        font-family:${font};
        font-size: 42pt;
        text-align: center;
    }

    .firstLevel {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 30%;
    }

    .secondLevel {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
      @font-face {
    font-family: 'Futura';
    src: url('https://moolab.ml/Fonts/Futura-Bold.woff2') format('woff2'),
        url('https://moolab.ml/Fonts/Futura-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    }
    
    @font-face {
        font-family: 'Embossing';
        src: url('https://moolab.ml/Fonts/EmbossingTape3BRK.woff2') format('woff2'),
            url('https://moolab.ml/Fonts/EmbossingTape3BRK.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Noteworthy';
        src: url('https://moolab.ml/Fonts/Noteworthy-Bold.woff2') format('woff2'),
            url('https://moolab.ml/Fonts/Noteworthy-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Funnier';
        src: url('https://moolab.ml/Fonts/Funnier.woff2') format('woff2'),
            url('https://moolab.ml/Fonts/Funnier.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Cooper Std';
        src: url('https://moolab.ml/Fonts/CooperBlackStd.woff2') format('woff2'),
            url('https://moolab.ml/Fonts/CooperBlackStd.woff') format('woff');
        font-weight: 900;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Baskerville';
        src: url('https://moolab.ml/Fonts/BaskervilleBT-Bold.woff2') format('woff2'),
            url('https://moolab.ml/Fonts/BaskervilleBT-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
    font-family: 'MyriadPro-Bold';
    src: url('https://moolab.ml/Fonts/MyriadPro-Bold.eot') format('embedded-opentype'),  url('https://moolab.ml/Fonts/MyriadPro-Bold.otf')  format('opentype'),
         url('https://moolab.ml/Fonts/MyriadPro-Bold.woff') format('woff'), url('https://moolab.ml/Fonts/MyriadPro-Bold.ttf')  format('truetype');
    font-weight: normal;
    font-style: normal;
  }
</style>

<body style="width: 12in;height:16.04in;background-color: #231F20">
<div class="firstLevel">
    <div style="width: 100%">
        <div class="region">${firstRegionName}</div>
        <div class="region">${firstRegionNumber} %</div>
    </div>
</div>


<div style="display: flex">
    <div style="width: 12in">
        <img style="width: 12in" src="${imageHelix(headline)}">
    </div>
</div>
<div class="secondLevel">
    <div style="width: 100%">
        <div class="region">${secondRegionNumber} %</div>
        <div class="region">${secondRegionName}</div>
    </div>
</div>
</body>
</html>`);
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
