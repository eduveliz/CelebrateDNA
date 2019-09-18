const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../Functions/ColorsBackground/BrightMap');
const fontStyle = require('../../Functions/FontStyle/FontStyle');
const fontSize = require('../FontSize/ILoveMyDNA/FontSizeLove4');
const colorProductSelect = require('../../Functions/Color/Color');

module.exports = createPreview = async (nameFile, propiedades) => {
    const name = nameFile;
    const datos = toArray(propiedades.line_items[0].properties);

    console.log(datos);
    const firstRegionName = datos[0];
    const firstRegionNumber = datos[1];

    const secondRegionName = datos[2];
    const secondRegionNumber = datos[3];

    const threeRegionName = datos[4];
    const threeRegionNumber = datos[5];

    const fourRegionName = datos[6];
    const fourRegionNumber = datos[7];

    const color = propiedades.line_items[0].title.split('- ').pop().split('/')[0].toString();

    imageColor = (color) => {
        if (color === "Navy ") {
            return 'https://moolab.ml/DNA/rojo.png';
        }
        if (color === "White ") {
            return "https://moolab.ml/DNA/white.png"
        }
        if (color === "Black ") {
            return "https://moolab.ml/DNA/amarillo.png"
        }
        if (color === "White with Green") {
            return "https://moolab.ml/DNA/verde.png"
        }
        if (color === "Navy with Orange & White ") {
            return "https://moolab.ml/DNA/naranja.png"
        }
        if (color === "Navy with Grey & White ") {
            return "https://moolab.ml/DNA/azul.png"
        }
    };

    fontColor = (color) => {
        if (color === "Navy ") {
            return "white";
        }
        if (color === "White ") {
            return "#72709A"
        }
        if (color === "Black ") {
            return "#E0AC3B"
        }
        if (color === "White with Green") {
            return "#1D6A50"
        }
        if (color === "Navy with Orange & White ") {
            return "#DD613B"
        }
        if (color === "Navy with Grey & White ") {
            return "#B6B5B8"
        }
    };

    fontTop = (font) => {
        if (font === "Embossing") {
            return "500px";
        }
        if (font === "Funnier") {
            return "500px"
        } else {
            return "450px"
        }
    };


    const fontColors = fontColor(color);
    const font = fontStyle(datos[8].toString());
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
        width: 755px;
        height: 528px;
        text-align: center;
        color: ${fontColors};
        left: ${font === "Embossing" || font === "Funnier" ? "400px" : "380px"};
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
<div style="margin-top: 1.1in">
<div style="display: flex;margin-left: 70px;">
    <img style="width: 7.14in;height: 12.92in" src="${imageColor(color)}">
    <div class="region">
        <div style="margin-top: 25px">${firstRegionName} ${firstRegionNumber}%</div>
        <div style="margin-top: 25px">${secondRegionName} ${secondRegionNumber}%</div>
        <div style="margin-top: 25px">${threeRegionName} ${threeRegionNumber}%</div>
        <div style="margin-top: 25px">${fourRegionName} ${fourRegionNumber}%</div>
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
