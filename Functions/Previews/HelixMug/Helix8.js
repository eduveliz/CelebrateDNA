const puppeteer = require('puppeteer');
const fontStyle = require('../../FontStyle/FontStyle');
const imageHelix = require('./ImageHelix');

module.exports = createPreview = async (propiedades) => {
    //Regions  */ RegionsNamesSelectors is for Jquery/*
    const name = propiedades.nameFile;
    const firstRegionName = propiedades.regions[0].region;
    const firstRegionNumber = propiedades.regions[0].porcentaje;

    const secondRegionName = propiedades.regions[1].region;
    const secondRegionNumber = propiedades.regions[1].porcentaje;

    const threeRegionName = propiedades.regions[2].region;
    const threeRegionNumber = propiedades.regions[2].porcentaje;

    const fourRegionName = propiedades.regions[3].region;
    const fourRegionNumber = propiedades.regions[3].porcentaje;

    const fiveRegionName = propiedades.regions[4].region;
    const fiveRegionNumber = propiedades.regions[4].porcentaje;

    const sixRegionName = propiedades.regions[5].region;
    const sixRegionNumber = propiedades.regions[5].porcentaje;

    const sevenRegionName = propiedades.regions[6].region;
    const sevenRegionNumber = propiedades.regions[6].porcentaje;

    const eightRegionName = propiedades.regions[7].region;
    const eightRegionNumber = propiedades.regions[7].porcentaje;

    //Headline
    const headline = propiedades.headLine;
    const firstName = propiedades.personalHeadline;

    const font = fontStyle(propiedades.fontStyle);
    let size = propiedades.size;


    fontSizeRegion = (font) => {
        if (font === "Noteworthy") {
            return size === "11oz" ? "16pt" : "20pt";
        }
        if (font === "MyriadPro-Bold") {
            return size === "11oz" ? "16pt" : "18pt";
        }
        if (font === "Funnier") {
            return size === "11oz" ? "12pt" : "20pt";
        }
    };

    fontSpace = () => {
        return font === "Noteworthy" ? '-13px' : '0'
    };

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 864,
        height: 450,
        deviceScaleFactor: 1,
    });

    await page.setContent(`<!DOCTYPE html>
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
        color: #6D6E70;
        font-family:${font};
        font-size: ${fontSizeRegion(font)};
        text-align: center;
    }

    .firstLevel {
        display: flex;
        justify-content: space-around;
        width: 100%;
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

<body style=" 9in; height:3.5in;">
<div class="firstLevel">
    <div style="width: 100%;">
        <div class="region" >${firstRegionName}</div>
        <div class="region" style="margin-top: ${fontSpace()}">${firstRegionNumber}%</div>
    </div>
    <div style="width: 100%;">
        <div class="region">${secondRegionName}</div>
        <div class="region" style="margin-top: ${fontSpace()}">${secondRegionNumber}%</div>
    </div>
    <div style="width: 100%;">
        <div class="region">${threeRegionName}</div>
        <div class="region" style="margin-top: ${fontSpace()}">${threeRegionNumber}%</div>
    </div>
    <div style="width: 100%;">
        <div class="region">${fourRegionName}</div>
        <div class="region" style="margin-top: ${fontSpace()}">${fourRegionNumber}%</div>
    </div>
</div>


<div style="display: flex">
    <div>
        <img style="width: 9in" src="${imageHelix(headline)}">
    </div>
</div>


<div class="secondLevel">
    <div style="width: 100%">
        <div class="region">${fiveRegionNumber}%</div>
        <div class="region" style="margin-top: ${fontSpace()}">${fiveRegionName}</div>
    </div>
    <div style="width: 100%">
        <div class="region">${sixRegionNumber}%</div>
        <div class="region" style="margin-top: ${fontSpace()}">${sixRegionName}</div>
    </div>
    <div style="width: 100%">
        <div class="region">${sevenRegionNumber}%</div>
        <div class="region" style="margin-top: ${fontSpace()}">${sevenRegionName}</div>
    </div>
    <div style="width: 100%">
        <div class="region">${eightRegionNumber}%</div>
        <div class="region" style="margin-top: ${fontSpace()}">${eightRegionName}</div>
    </div>
</div>
</body>
</html>
`);
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
