const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const fontStyle = require('../../FontStyle/FontStyle');
const imageHelix = require('./ImageHelix');

module.exports = createPreview = async (nameFile, propiedades, orderInfo) => {
    const name = nameFile;
    const datos = toArray(propiedades);

    const firstRegionName = datos[1];
    const firstRegionNumber = datos[2];

    const secondRegionName = datos[3];
    const secondRegionNumber = datos[4];

    const threeRegionName = datos[5];
    const threeRegionNumber = datos[6];

    const fourRegionName = datos[7];
    const fourRegionNumber = datos[8];

    const fiveRegionName = datos[9];
    const fiveRegionNumber = datos[10];

    const sixRegionName = datos[11];
    const sixRegionNumber = datos[12];

    const sevenRegionName = datos[13];
    const sevenRegionNumber = datos[14];

    const eightRegionName = datos[15];
    const eightRegionNumber = datos[16];

    //Headline
    const headline = datos[17];

    let size = orderInfo.name.split('- ')[1];
    let h = size === "11oz" ? 336 : 364.8;
    const font = fontStyle(datos[18]);


    fontSizeRegion = (font) => {
        if (font === "Noteworthy") {
            return size === "11oz" ? "18pt" : "20pt";
        }
        if (font === "MyriadPro-Bold") {
            return size === "11oz" ? "17pt" : "19.5pt";
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
        height: parseInt(h, 10),
        deviceScaleFactor: 3,
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
        margin-top: ${font === "MyriadPro-Bold" ? "-10px" : '0px'};
        margin-bottom:${font === "Funnier" ? "18px" : '0px'}; 
        justify-content: space-around;
        width: 100%;
    }

    .secondLevel {    
        display: flex;
        margin-top: ${font === "MyriadPro-Bold" ? "8px" : '0px'};
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

<body style="width: 9in; height:${size === "11oz" ? 336 : 364.8}">
<div style="margin-top:${font === "Funnier" ? "0.4in" : "0"}">
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
    <img style="width: 9in;height: 2.2in" src="${imageHelix(headline)}">       
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
</div>
</body>
</html>
`);
    await page.screenshot({path: `public/${name}.png`, omitBackground: true});
    console.log("Complete");
    await browser.close();
};
