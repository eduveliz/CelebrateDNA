const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../Functions/ColorsBackground/BrightMap');
const fontStyle = require('../../Functions/FontStyle/FontStyle');
const fontSize = require('../FontSize/ILoveMyDNA/FontSizeLove3');
const colorProductSelect = require('../../Functions/Color/Color');

module.exports = createPreview = async (propiedades) => {
    const name = propiedades.nameFile;
    const firstRegionName = propiedades.regions[0].region;
    const firstRegionNumber = propiedades.regions[0].porcentaje;

    const secondRegionName = propiedades.regions[1].region;
    const secondRegionNumber = propiedades.regions[1].porcentaje;

    const threeRegionName = propiedades.regions[2].region;
    const threeRegionNumber = propiedades.regions[2].porcentaje;
    const colorProduct = colorProductSelect(propiedades.colorProduct);

    imageColor = (color) => {
        if (color === "Navy") {
            return 'https://moolab.ml/DNA/white.png';
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
            return "#72709A"
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


    const fontColors = fontColor(propiedades.colorProduct);
    const font = fontStyle(propiedades.fontStyle);
    const top = font === "Embossing" || font === "Funnier" ? "500px" : "400px";

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
        width: 755px;
        height: 528px;
        left: 450px;
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
        <div>${firstRegionName} ${firstRegionNumber}%</div>
        <div style="margin-top: 50px">${secondRegionName} ${secondRegionNumber}%</div>
        <div style="margin-top: 50px">${threeRegionName} ${threeRegionNumber}%</div>
    </div>
</div>
</body>
</html>
`);
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
