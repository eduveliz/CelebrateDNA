const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../../ColorsBackground/BrightMap');
const regionName = require('../../../RegionNames/RegionNames');
const fontStyle = require('../../../FontStyle/FontStyle');
const fontColor = require('../../../FontColor/FontColor');
const colorProductSelect = require('../../../Color/Color');
const lineMaps = require('../../../LinesMap/LineMaps');
const ancestryMap = require('../../../MapsSVG/AncestryMap');
const ttMap = require('../../../MapsSVG/TTMap');
const myHeritageMap = require('../../../MapsSVG/MyHeritageMap');

module.exports = createPreview = async (nameFile, propiedades, orderInfo) => {
    const datos = toArray(propiedades);
    const name = nameFile;

    const firstRegionName = datos[1].value;
    const firstRegionNameSelector = regionName(datos[1].value);
    const firstRegionNumber = datos[2].value;

    const secondRegionName = datos[3].value;
    const secondRegionNameSelector = regionName(datos[3].value);
    const secondRegionNumber = datos[4].value;

    const threeRegionName = datos[5].value;
    const threeRegionNameSelector = regionName(datos[5].value);
    const threeRegionNumber = datos[6].value;

    const fourRegionName = datos[7].value;
    const fourRegionNameSelector = regionName(datos[7].value);
    const fourRegionNumber = datos[8].value;

    const fiveRegionName = datos[9].value;
    const fiveRegionNameSelector = regionName(datos[9].value);
    const fiveRegionNumber = datos[10].value;

    const sixRegionName = datos[11].value;
    const sixRegionNameSelector = regionName(datos[11].value);
    const sixRegionNumber = datos[12].value;

    const sevenRegionName = datos[13].value;
    const sevenRegionNameSelector = regionName(datos[13].value);
    const sevenRegionNumber = datos[14].value;

    const eightRegionName = datos[15].value;
    const eightRegionNameSelector = regionName(datos[15].value);
    const eightRegionNumber = datos[16].value;

    const nineRegionName = datos[17].value;
    const nineRegionNameSelector = regionName(datos[17].value);
    const nineRegionNumber = datos[18].value;

    const tenRegionName = datos[19].value;
    const tenRegionNameSelector = regionName(datos[19].value);
    const tenRegionNumber = datos[20].value;

    const colorProduct = orderInfo.name.split('- ').pop().split('/')[0].toString();
    const backgroundColor = colorBackground(datos[21].value);
    const backgroundLineWorld = fontColor(colorProduct);
    //Headline
    const headline = datos[22].value === "Personalized headline" ? datos[23].value : datos[22].value;
    //FontSize
    const font = fontStyle(datos[24].value);
    companyMap = (company) => {
        if (company === "Ancestry") {
            return ancestryMap;
        }
        if (company === "23andMe") {
            return ttMap;
        }
        if (company === "MyHeritageDNA") {
            return myHeritageMap;
        }
    };
    const map = companyMap(datos[0].value);
    fontSizeRegion = (font) => {
        if (font === "Noteworthy") {
            return "18pt"
        }
        if (font === "MyriadPro-Bold") {
            return "18pt"
        }
        if (font === "Funnier") {
            return "13pt"
        }
        if (font === "Noteworhty Bold") {
            return "20pt"
        }
    };

    fontSizeNumber = () => {
        if (font === "Noteworthy") {
            return "16pt"
        }
        if (font === "MyriadPro-Bold") {
            return "20pt"
        }
        if (font === "Funnier") {
            return "16pt"
        }
        if (font === "Noteworhty Bold") {
            return "35pt"
        }
    };

    fontHeadline = () => {
        if (font === "Noteworthy") {
            return "110px"
        }
        if (font === "MyriadPro-Bold") {
            return "110px"
        }
        if (font === "Funnier") {
            return "85px"
        }
        if (font === "Noteworhty Bold") {
            return "110px"
        }
    };
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1152,
        height: 1536,
        deviceScaleFactor: 3,
    });

    try {
        await page.setContent(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>23andMe</title>
    <style>
    .fontColorNumber {
        color:${fontColor(colorProduct)};
        font-family:${font} ;
        border: 2px solid ${lineMaps(colorProduct)};
        font-size: ${fontSizeNumber()};
    }
    
    .fontColor {
        color:${fontColor(colorProduct)};
        font-family:${font};
        text-align: center;
        font-size: ${fontSizeRegion(font)};
    }
    
    .fontColorHeadline {
        color:${fontColor(colorProduct)};
        font-family:${font};
        margin-bottom: 0px;
        text-align: center; 
        font-size:${fontHeadline()};
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
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body style="width:100%;height:1536px;background-color: ${colorProductSelect(colorProduct)} ">
<div style="margin-top: 120pt">
<h1 class='fontColorHeadline'>${headline}</h1>
<div style="width: 100%;text-align: center;">
    ${map}
</div>
<div style="display: flex; justify-content:space-between;width:98%;margin-top: 50px;padding: 5px">
    <div id="firstGroup" style="width: 100%;">
        <div style="height:60px; width:100%;display: flex; justify-content: initial;margin-bottom:7pt">
            <div class="fontColor" style="width: 50%;text-align: center;display: flex;justify-content: center;align-items:center ">${firstRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px;">
            <div class="fontColorNumber" style="color:white;height:38px; width:100%; border-radius: 20px;background-color: #616c44;align-items: center;text-align: center;display: flex;justify-content: center;">
                ${firstRegionNumber}%
            </div>
            <div class="fontColorNumber" style="color:white;height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #6d0008;align-items: center;text-align: center;display: flex;justify-content: center;">
                ${secondRegionNumber}%
            </div>
        </div>
        <div style="width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="width:50%;margin-bottom: 20px;text-align: center;display: flex;justify-content: center;align-items: center">${secondRegionName}</div>
        </div>
    </div>

    <div id="secondGroup" style="width: 100%;">
        <div style="height:60px; width:100%;display: flex; justify-content: initial;margin-bottom:7pt">
            <div class="fontColor" style="width: 50%;text-align: center;display: flex;justify-content: center;align-items: center ">${threeRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px;">
            <div class="fontColorNumber" style="color:white;height:38px; width:100%; border-radius: 20px;background-color: #a25562;align-items: center;text-align: center;display: flex;justify-content: center;">
                ${threeRegionNumber}%
            </div>
            <div class="fontColorNumber" style="color:white;height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #5c4955;align-items: center;text-align: center;display: flex;justify-content: center;">
                 ${fourRegionNumber}%
            </div>
        </div>
        <div style=" width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="width:50%;margin-bottom: 20px;text-align: center;display: flex;justify-content: center;align-items: center">${fourRegionName}</div>
        </div>
    </div>
     
    <div id="secondGroup" style="width: 100%;">
        <div style="height:60px; width:100%;display: flex; justify-content: initial;margin-bottom:7pt ">
            <div class="fontColor" style="width: 50%;text-align: center;display: flex;justify-content: center;align-items: center ">${fiveRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px;">
            <div class="fontColorNumber" style="color:white;height:38px; width:100%; border-radius: 20px;background-color: #b19e3f;align-items: center;text-align: center;display: flex;justify-content: center;">
                 ${fiveRegionNumber}%
            </div>
            <div class="fontColorNumber" style="color:white;height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #603813;align-items: center;text-align: center;display: flex;justify-content: center;">
                  ${sixRegionNumber}%
            </div>
        </div>
        <div style="width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="width:50%;text-align: center;display: flex;justify-content: center;align-items: center">${sixRegionName}</div>
        </div>
    </div>

    <div id="fourGroup" style="width: 100%;">
        <div style="height:60px; width:100%;display: flex; justify-content: initial;margin-bottom:7pt ">
            <div class="fontColor" style="width: 50%;text-align: center;display: flex;justify-content: center;align-items: center ">${sevenRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px; ">
            <div  class="fontColorNumber" style="color:white;height:38px; width:100%; border-radius: 20px;background-color: #2e4b30;align-items: center;text-align: center;display: flex;justify-content: center;">
                ${sevenRegionNumber}%
            </div>
            <div class="fontColorNumber" style="color:white;height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #7e4148;align-items: center;text-align: center;display: flex;justify-content: center;">
                ${eightRegionNumber}%
            </div>
        </div>
         <div style=" width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="width:50%;text-align: center;display: flex;justify-content: center;align-items: center">${eightRegionName}</div>
        </div>
    </div>

    <div id="fiveGroup" style="width: 100%; ">
        <div style="height:60px; width:100%;display: flex; justify-content: initial;margin-bottom:7pt ">
            <div class="fontColor" style="text-align: center;width: 50%;display: flex;justify-content: center;align-items: center ">${nineRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px; ">
            <div class="fontColorNumber" style="color:white;height:38px; width:100%; border-radius: 20px;background-color: #d2852d;align-items: center;text-align: center;display: flex;justify-content: center;">
                ${nineRegionNumber}%
            </div>
            <div  class="fontColorNumber" style="color:white;height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #b25538;align-items: center;text-align: center;display: flex;justify-content: center;">
                ${tenRegionNumber}%
            </div>
        </div>
        <div style="width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="width: 50%;text-align: center;display: flex;justify-content: center;align-items: center">${tenRegionName}</div>
        </div>
    </div>
</div>
</div>

<script>    
    $(function () {
        $(document).ready(function () {
            $("#worldMap").attr("fill", "${backgroundColor}").attr("stroke","${backgroundLineWorld}");
            $("#regions").attr("fill", "transparent");
            
            $("${firstRegionNameSelector}").attr("fill", "#616C44");
            $("${firstRegionNameSelector}").attr("stroke", "${lineMaps(colorProduct)}");
          
            $("${secondRegionNameSelector}").attr("fill", "#6D0008");
            $("${secondRegionNameSelector}").attr("stroke", "${lineMaps(colorProduct)}");
            //second color
            $("${threeRegionNameSelector}").attr("fill", "#A25562");
            $("${threeRegionNameSelector}").attr("stroke", "${lineMaps(colorProduct)}");
            
            $("${fourRegionNameSelector}").attr("fill", "#5C4955");
            $("${fourRegionNameSelector}").attr("stroke","${lineMaps(colorProduct)}");
            //three color
            $("${fiveRegionNameSelector}").attr("fill", "#B19E3F");
            $("${fiveRegionNameSelector}").attr("stroke", "${lineMaps(colorProduct)}");
            
            $("${sixRegionNameSelector}").attr("fill", "#603813");
            $("${sixRegionNameSelector}").attr("stroke", "${lineMaps(colorProduct)}");
            //four color
            $("${sevenRegionNameSelector}").attr("fill", "#2E4B30");
            $("${sevenRegionNameSelector}").attr("stroke","${lineMaps(colorProduct)}");
            
            $("${eightRegionNameSelector}").attr("fill", "#7E4148");
            $("${eightRegionNameSelector}").attr("stroke", "${lineMaps(colorProduct)}");
            //five color
            $("${nineRegionNameSelector}").attr("fill", "#D2852D");
            $("${nineRegionNameSelector}").attr("stroke","${lineMaps(colorProduct)}");
            
            $("${tenRegionNameSelector}").attr("fill", "#B25538");
            $("${tenRegionNameSelector}").attr("stroke","${lineMaps(colorProduct)}");
        });
    });
</script>
</body>
</html>
`, {waitUntil: 'load', timeout: 0});
    } catch (e) {
        console.log(e);
    }

    await page.evaluate(() => document.body.style.background = 'transparent');
    await page.screenshot({path: `public/${name}.png`, omitBackground: true});
    await browser.close();
};
