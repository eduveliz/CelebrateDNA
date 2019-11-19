const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../ColorsBackground/BrightMap');
const fontStyle = require('../../FontStyle/FontStyle');
const fontColor = require('../../FontStyle/FontStyle');
const colorProductSelect = require('../../Color/Color');

module.exports = createPreview = async (nameFile, propiedades, orderInfo) => {
    const name = nameFile;
    const datos = toArray(propiedades);

    const firstRegionName = datos[1].value;
    const firstRegionNumber = datos[2].value;

    const secondRegionName = datos[3].value;
    const secondRegionNumber = datos[4].value;

    const threeRegionName = datos[5].value;
    const threeRegionNumber = datos[6].value;

    //Background Map
    const colorProduct = orderInfo.name.split('- ').pop().split('/')[0].toString();
//Headline

    const headline = datos[7].value === "Personalized headline" ? datos[8].value : datos[7].value;

    //FontSize
    const font = fontStyle(datos[9].value);


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

    colorFont = () => {
        if (colorProduct === "Navy " || colorProduct === "Black " || colorProduct === "Steel Blue ") {
            return "White"
        } else {
            return "#58585B"
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
        top: 500px;
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
        color:${colorFont(font)}
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
<body style="width: 12in;height:16in;">
<div style="margin-top: 0.5in">
<div style="display: flex">
    <div style="margin-left: 50px">
        <img style="width: 7.14in;height: 12.92in" src="https://moolab.ml/Twister.png">
    </div>
    <div class="regions">
        <div style="margin-left: 10%;color:${colorFont(font)}; flex: 1; width: 750px;height: 40px">
            ${firstRegionName} ${firstRegionNumber}%
        </div>
        <div style="margin-left:-15%; color: ${colorFont(font)};flex: 1;width: 750px;height: 40px">
             ${secondRegionName} ${secondRegionNumber}%
        </div>
        <div style="margin-left: -5%;color:${colorFont(font)};flex: 1;width: 750px;height: 40px">
            ${threeRegionName} ${threeRegionNumber}%
        </div>
    </div>
</div>
<div class="headline">${headline}</div>
</div>
</body>
</html>
`);

    await page.setViewport({
        width: 1152,
        height: 1536,
        deviceScaleFactor: 3,
    });
    await page.evaluate(() => document.body.style.background = 'transparent');
    await page.screenshot({path: `public/${name}.png`, omitBackground: true});
    await browser.close();
};
