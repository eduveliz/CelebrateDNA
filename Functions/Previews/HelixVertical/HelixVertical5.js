const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../ColorsBackground/BrightMap');
const fontStyle = require('../../FontStyle/FontStyle');
const fontColor = require('../../FontColor/FontColor');
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

    //Background Map
    const colorProduct = propiedades.colorProduct;
    //Headline

    const headline = propiedades.headLine === "Personalized headline" ? propiedades.personalHeadline : propiedades.headLine;

    //FontSize
    const font = fontStyle(propiedades.fontStyle);

    fontSize = (font) => {
        if (font === "Noteworthy") {
            return "80pt"
        }
        if (font === "Baskerville") {
            return "70pt"
        }
        if (font === "Funnier") {
            return "52pt"
        }
    };

    fontSizeRegion = (font) => {
        if (font === "Noteworthy") {
            return "42pt"
        }
        if (font === "Baskerville") {
            return "42pt"
        }
        if (font === "Funnier") {
            return "34pt"
        }
    };

    colorFont = () => {
        if (colorProduct === "Navy" || colorProduct === "Black" || colorProduct === "Steel Blue" || colorProduct === "Indigo Blue" || colorProduct === "Heather Prism Dusty Blue") {
            return "White"
        } else {
            return "#58585B"
        }
    };
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
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<style>
  .regions {
        z-index: 1;            
        position: relative;
        right: 250px;
        top: 480px;
        height: 758px;
        width: 735px;
        display: flex;
        flex-direction: column;
        font-size: ${fontSizeRegion(font)};
        font-family: ${font};
    }
    
    .headline{
    font-size: ${fontSize(font)};
    font-family: ${font};
    text-align: center;
        color:${fontColor(colorProduct)}
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
<body style="width: 12in;height:16in;background-color: ${colorProductSelect(colorProduct)}">
<div style="display: flex">
    <div style="margin-left: 50px">
        <img style="width: 7.14in;height: 12.92in" src="https://moolab.ml/Twister.png">
    </div>
    <div class="regions">
        <div style="margin-left: 10%;  color:${fontColor(colorProduct)}; flex: 1; width: 700px;height: 40px">
            ${firstRegionName} ${firstRegionNumber}%
        </div>
        <div style="margin-left:-15%;   color:${fontColor(colorProduct)};flex: 1;width: 700px;height: 40px">
             ${secondRegionName} ${secondRegionNumber}%
        </div>
        <div style="margin-left:-20%;  color:${fontColor(colorProduct)};flex: 1;width: 700px;height: 40px">
            ${threeRegionName} ${threeRegionNumber}%
        </div>
        <div style="margin-left: -15%;  color:${fontColor(colorProduct)};flex: 1;width: 700px;height: 40px">
            ${fourRegionName} ${fourRegionNumber}%
        </div>
        <div style="margin-left: -10%;  color:${fontColor(colorProduct)};flex: 1;width: 700px;height: 40px">
            ${fiveRegionName} ${fiveRegionNumber}%
        </div>
    </div>
</div>
<div class="headline">${headline}</div>
</body>
</html>
`);

    await page.setViewport({
        width: 1152,
        height: 1836,
        deviceScaleFactor: 1,
    });
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
