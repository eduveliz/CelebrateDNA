const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../ColorsBackground/BrightMap');
const fontStyle = require('../../FontStyle/FontStyle');
const fontSize = require('../../FontSize/ILoveMyDNA/FontSizeLove6');
const colorProductSelect = require('../../Color/Color');

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

    const colorProduct = colorProductSelect(propiedades.colorProduct);

    imageColor = (color) => {
        if (color === "Navy") {
            return 'https://moolab.ml/DNA/rojo.png';
        }
        if (color === "White") {
            return "https://moolab.ml/DNA/white.png"
        }
        if (color === "Black") {
            return "https://moolab.ml/DNA/amarillo.png"
        }
        if (color === "White with Green/Yellow") {
            return "https://moolab.ml/DNA/verde.png"
        }
        if (color === "Navy with Orange & White") {
            return "https://moolab.ml/DNA/naranja.png"
        }
        if (color === "Navy with Grey & White") {
            return "https://moolab.ml/DNA/azul.png"
        }
    };

    fontColor = (color) => {
        if (color === "Navy") {
            return "white";
        }
        if (color === "White") {
            return "#2C2B6E"
        }
        if (color === "Black") {
            return "#E0AC3B"
        }
        if (color === "White with Green/Yellow") {
            return "#1D6A50"
        }
        if (color === "Navy with Orange & White") {
            return "#DD613B"
        }
        if (color === "Navy with Grey & White") {
            return "#B6B5B8"
        }
    };

    fontTop = (font) => {
        if (font === "Embossing") {
            return "350px";
        }
        if (font === "Funnier") {
            return "350px"
        } else {
            return "260px"
        }
    };

    shadow = () => {
        if (propiedades.colorProduct === 'Navy with Orange & White') {
            return 'text-shadow:3px 3px 0 #DE603C,-1px -1px 0 #DE603C,1px -1px 0 #DE603C,-1px 1px 0 #DE603C,1px 1px 0 #DE603C;'
        }
        if (propiedades.colorProduct === 'Navy') {
            return 'text-shadow:3px 3px 0 #AFB4B9,-1px -1px 0 #AFB4B9,1px -1px 0 #AFB4B9,-1px 1px 0 #AFB4B9,1px 1px 0 #AFB4B9;'
        }
        if (propiedades.colorProduct === 'Navy with Grey & White') {
            return 'text-shadow:3px 3px 0 #AFB4B9,-1px -1px 0 #AFB4B9,1px -1px 0 #AFB4B9,-1px 1px 0 #AFB4B9,1px 1px 0 #AFB4B9;'
        }
    };

    const fontColors = fontColor(propiedades.colorProduct);
    const font = fontStyle(propiedades.fontStyle);
    const top = fontTop(font);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1152,
        height: 1536,
        deviceScaleFactor: 1,
    });
    await page.setContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
   .region {
        z-index: 1;
        position: absolute;
        width: 720px;   
        height: 528px;
        text-align: center;
        ${shadow()};    
        left: ${font === "Embossing" || font === "Funnier" ? "410px" : "400px"};
        color: ${fontColors};
        top: ${top};
        font-family: ${font};
        font-size: ${fontSize(font)};
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
        src: url('https://moolab.ml/Fonts/MyriadPro-Bold.eot') format('embedded-opentype'), url('https://moolab.ml/Fonts/MyriadPro-Bold.otf') format('opentype'),
        url('https://moolab.ml/Fonts/MyriadPro-Bold.woff') format('woff'), url('https://moolab.ml/Fonts/MyriadPro-Bold.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
</style>
<body style="width: 12in;height:16in;background-color:${colorProduct}">
<div style="display: flex;margin-left: 70px">
    <img style="width: 7.14in;height: 12.92in" src="${imageColor(propiedades.colorProduct)}">
    <div class="region">
        <div style="margin-top: 25px">${firstRegionName} ${firstRegionNumber}%</div>
        <div style="margin-top: 25px">${secondRegionName} ${secondRegionNumber}%</div>
        <div style="margin-top: 25px">${threeRegionName} ${threeRegionNumber}%</div>
        <div style="margin-top: 25px">${fourRegionName} ${fourRegionNumber}%</div>
        <div style="margin-top: 25px">${fiveRegionName} ${fiveRegionNumber}%</div>
        <div style="margin-top: 25px">${sixRegionName} ${sixRegionNumber}%</div>
    </div>
</div>
<div style="margin-top: 20px;color: ${fontColors};">
<h1>1.  T-shirt colors are approximated and not actual color. </h1>
<h1>2.  Image is not actual size so the font may appear much smaller than in actuality.  </h1>
<h1>3.  See models on the product page for better representation of graphic size and position.</h1>
<h1 style="text-align: center">Intellectual Property. All Rights Reserved 2019.  CelebrateDNA™</h1>
</div>
</body>
</html>
`);
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
