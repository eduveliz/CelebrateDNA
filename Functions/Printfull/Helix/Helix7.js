const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../ColorsBackground/BrightMap');
const fontStyle = require('../../FontStyle/FontStyle');
const fontColor = require('../../Previews/Helix/FontColor');
const colorProductSelect = require('../../Color/Color');
const imageHelix = require('../../Previews/Helix/ImageHelix');


module.exports = createPreview = async (nameFile, propiedades, orderInfo) => {
    //Regions  */ RegionsNamesSelectors is for Jquery/*
    const datos = toArray(propiedades);
    const name = nameFile;

    const firstRegionName = datos[1].value;
    const firstRegionNumber = datos[2].value;

    const secondRegionName = datos[3].value;
    const secondRegionNumber = datos[4].value;

    const threeRegionName = datos[5].value;
    const threeRegionNumber = datos[6].value;

    const fourRegionName = datos[7].value;
    const fourRegionNumber = datos[8].value;

    const fiveRegionName = datos[9].value;
    const fiveRegionNumber = datos[10].value;

    const sixRegionName = datos[11].value;
    const sixRegionNumber = datos[12].value;

    const sevenRegionName = datos[13].value;
    const sevenRegionNumber = datos[14].value;

    const colorProduct = orderInfo.name.split('- ').pop().split('/')[0].toString();
    //Headline
    const headline = datos[15].value;
    //FontSize
    const font = fontStyle(datos[16].value);

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
            return "30pt"
        }
        if (font === "Baskerville") {
            return "42pt"
        }
        if (font === "MyriadPro-Bold") {
            return "36pt"
        }
        if (font === "Funnier") {
            return "24pt"
        }
    };

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1152,
        height: 1536,
        deviceScaleFactor: 3,
    });

    await page.setContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">    <title>Title</title>
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
        justify-content: space-between;
        margin-top: 30px;
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
<div style="margin-top: 1.2in">
<div class="firstLevel">
    <div style="width: 100%">
        <div class="region">${firstRegionName}</div>
        <div class="region">${firstRegionNumber}%</div>
    </div>
    <div style="width: 100%">
        <div class="region">${secondRegionName}</div>
        <div class="region">${secondRegionNumber}%</div>
    </div>
    <div style="width: 100%">
        <div class="region">${threeRegionName}</div>
        <div class="region">${threeRegionNumber}%</div>
    </div>
</div>


<div style="display: flex">
    <div style="width: 12in">
        <img style="width: 12in" src="${imageHelix(headline)}">
    </div>
</div>


<div class="secondLevel">
    <div style="width: 100%">
        <div class="region">${fourRegionNumber} %</div>
        <div class="region">${fourRegionName}</div>
    </div>
    <div style="width: 100%">
        <div class="region">${fiveRegionNumber} %</div>
        <div class="region">${fiveRegionName}</div>
    </div>
    <div style="width: 100%">
        <div class="region">${sixRegionNumber} %</div>
        <div class="region">${sixRegionName}</div>
    </div>
    <div style="width: 100%">
        <div class="region">${sevenRegionNumber} %</div>
        <div class="region">${sevenRegionName}</div>
    </div>
</div>
</div>
</body>
</html>
`);
    await page.evaluate(() => document.body.style.background = 'transparent');
    await page.screenshot({path: `public/${name}.png`, omitBackground: true});
    await browser.close();
};
