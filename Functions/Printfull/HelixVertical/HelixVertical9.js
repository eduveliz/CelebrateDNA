const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../ColorsBackground/BrightMap');
const fontStyle = require('../../FontStyle/FontStyle');
const fontColor = require('../../FontStyle/FontStyle');
const colorProductSelect = require('../../Color/Color');

module.exports = createPreview = async (nameFile, propiedades) => {
    const name = nameFile;
    const datos = toArray(propiedades.line_items[0].properties);

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

    const eightRegionName = datos[15].value;
    const eightRegionNumber = datos[16].value;

    const nineRegionName = datos[17].value;
    const nineRegionNumber = datos[18].value;


    //Background Map
    const colorProduct = propiedades.line_items[0].title.split('- ').pop().split('/')[0];
    //Headline
    const headline = datos[19].value === "Personalized headline" ? datos[20].value : datos[19].value;

    //FontSize
    const font = fontStyle(datos[21].value);

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
            return "40pt"
        }
        if (font === "Baskerville") {
            return "38pt"
        }
        if (font === "Funnier") {
            return "30pt"
        }
    };

    colorFont = () => {
        if (colorProduct === "Navy " || colorProduct === "Black " || colorProduct === "Steel Blue ") {
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
        <div style="margin-left: 10%;color:${colorFont(font)}; flex: 1; width: 700px;height: 40px">
            ${firstRegionName} ${firstRegionNumber}%
        </div>
        <div style="margin-left:-4%;color:${colorFont(font)};flex: 1;width: 700px;height: 40px">
             ${secondRegionName} ${secondRegionNumber}%
        </div>
        <div style="margin-left: -15%;  color:${colorFont(font)};flex: 1;width: 700px;height: 40px">
            ${threeRegionName} ${threeRegionNumber}%
        </div>
        <div style="margin-left: -25%;  color:${colorFont(font)};flex: 1;width: 700px;height: 40px">
            ${fourRegionName} ${fourRegionNumber}%
        </div>
        <div style="margin-left: -20%;  color:${colorFont(font)};flex: 1;width: 700px;height: 40px">
            ${fiveRegionName} ${fiveRegionNumber}%
        </div>
        <div style="margin-left: -15%;   color:${colorFont(font)};flex: 1;width: 700px;height: 40px">
            ${sixRegionName} ${sixRegionNumber}%
        </div>
        <div style="margin-left: -10%;  color:${colorFont(font)};flex: 1;width: 700px;height: 40px">
            ${sevenRegionName} ${sevenRegionNumber}%
        </div>
        <div style="margin-left: -5%;  color:${colorFont(font)};flex: 1;width: 700px;height: 40px">
            ${eightRegionName} ${eightRegionNumber}%
        </div>
        <div style="margin-left: 5%;color:${colorFont(font)};flex: 1;width: 700px;height: 40px"> 
            ${nineRegionName} ${nineRegionNumber}%
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
