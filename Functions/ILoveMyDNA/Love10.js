const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../Functions/ColorsBackground/BrightMap');
const fontStyle = require('../../Functions/FontStyle/FontStyle');
const fontSize = require('../../Functions/FontSize/FontSize');
const fontColor = require('../../Functions/FontStyle/FontStyle');
const colorProductSelect = require('../../Functions/Color/Color');


module.exports = createPreview = async (propiedades) => {
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

    const nineRegionName = propiedades.regions[8].region;
    const nineRegionNumber = propiedades.regions[8].porcentaje;

    const tenRegionName = propiedades.regions[9].region;
    const tenRegionNumber = propiedades.regions[9].porcentaje;

    //Headline
    // const headline = propiedades.headLine;
    //const firstName = propiedades.personalHeadline;
    //FontSize
    const font = fontStyle(propiedades.fontStyle);
    // const fontSize = fontSize(propiedades.fontStyle);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1152,
        height: 1536,
        deviceScaleFactor: 1,
    });
    await page.setContent(`
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
    .region{
        border: 1px solid red;
        z-index: 1;
        position: absolute;
        width: 755px;
        height: 528px;
        left: 400px;
        bottom: 63px;
        font-family: ${font};
        font-size: 42pt;
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
<body style="width: 12in;height:16in;border: 1px solid black">
<div style="display: flex">
    <img style="width: 7.14in;height: 12.92in" src="https://f6344f08.ngrok.io/DNA/amarillo.png">
    <div class="region">
        <div>${firstRegionName} ${firstRegionNumber} %</div>
        <div>${secondRegionName} ${secondRegionNumber} %</div>
        <div>${threeRegionName} ${threeRegionNumber} %</div>
        <div>${fourRegionName} ${fourRegionNumber} %</div>
        <div>>${fiveRegionName} ${fiveRegionNumber} %</div>
        <div>${sixRegionName} ${sixRegionNumber} %</div>
        <div>${sevenRegionName} ${sevenRegionNumber}%</div>
        <div>${eightRegionName} ${eightRegionNumber}%</div>
        <div>${nineRegionName} ${nineRegionNumber}%</div>
        <div>${tenRegionName} ${tenRegionNumber}%</div>
    </div>
</div>

</body>
</html>`);
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
