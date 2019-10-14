const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../Functions/ColorsBackground/BrightMap');
const fontStyle = require('../../Functions/FontStyle/FontStyle');
const fontColor = require('../PreviewHelix/FontColor');
const colorProductSelect = require('../../Functions/Color/Color');
const imageHelix = require('../PreviewHelix/ImageHelix');


module.exports = createPreview = async (nameFile, propiedades) => {
    //Regions  */ RegionsNamesSelectors is for Jquery/*
    const name = nameFile;
    const datos = toArray(propiedades.line_items[0].properties);

    const firstRegionName = datos[1].value;
    const firstRegionNumber = datos[2].value;

    const secondRegionName = datos[3].value;
    const secondRegionNumber = datos[4].value;

    const threeRegionName = datos[5].value;
    const threeRegionNumber = datos[6].value;

    const backgroundColor = colorBackground(propiedades.color);

    const colorProduct = propiedades.line_items[0].title.split('- ').pop().split('/')[0];
    //Headline
    const headline = datos[7].value;
    //FontSize
    const font = fontStyle(datos[8].value);

    fontSize = (font) => {
        if (font === "Noteworthy") {
            return "90pt"
        }
        if (font === "Baskerville") {
            return "80pt"
        }
        if (font === "Funnier") {
            return "62pt"
        }
    };

    fontSizeRegion = (font) => {
        if (font === "Noteworthy") {
            return "35pt"
        }
        if (font === "Baskerville") {
            return "42pt"
        }
        if (font === "Myriad Pro Bold") {
            return "42pt"
        }
        if (font === "Funnier") {
            return "30pt"
        }
    };

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1152,
        height: 1536,
        deviceScaleFactor: 3,
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
        color: ${fontColor(colorProduct)};
        font-size: ${fontSizeRegion(font)};
        font-family:${font};
        text-align: center;
    }

    .firstLevel {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 30px;
    }

    .secondLevel {
        display: flex;
        margin-top: 30px;
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

<body style="width: 12in;height:16.04in;">
<div style="margin-top: 2in">
    <div class="firstLevel">
    </div>
    <div style="display: flex">
        <div style="width: 12in">
            <img style="width: 12in" src="${imageHelix(headline)}">
        </div>
    </div>
    <div class="secondLevel">
        <div style="width: 100%">
        <div class="region">${firstRegionNumber}%</div>
        <div class="region">${firstRegionName}</div>
    </div>
    <div style="width: 100%">
        <div class="region">${secondRegionNumber}%</div>
        <div class="region">${secondRegionName}</div>
    </div> 
     <div style="width: 100%">
         <div class="region">${threeRegionNumber}%</div>
        <div class="region">${threeRegionName}</div>
    </div>
    </div>
</div>
</body>
</body>
</html>`);
    await page.evaluate(() => document.body.style.background = 'transparent');
    await page.screenshot({path: `public/${name}.png`, omitBackground: true});
    await browser.close();
};