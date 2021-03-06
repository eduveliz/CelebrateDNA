const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../../ColorsBackground/BrightMap');
const regionNames = require('../../../RegionNames/RegionNames');
const fontStyle = require('../../../FontStyle/FontStyle');
const fontColor = require('../../../FontColor/FontColor');
const colorProductSelect = require('../../../Color/Color');
const lineMaps = require('../../../LinesMap/LineMaps');
const ancestryMap = require('../../../MapsSVG/AncestryMap');
const ttMap = require('../../../MapsSVG/TTMap');
const myHeritageMap = require('../../../MapsSVG/MyHeritageMap');

module.exports = createPreview = async (propiedades) => {
    const name = propiedades.nameFile;
    const firstRegionName = propiedades.regions[0].region;
    const firstRegionNameSelector = regionNames(propiedades.regions[0].region);
    const firstRegionNumber = propiedades.regions[0].porcentaje;

    const secondRegionName = propiedades.regions[1].region;
    const secondRegionNameSelector = regionNames(propiedades.regions[1].region);
    const secondRegionNumber = propiedades.regions[1].porcentaje;

    const threeRegionName = propiedades.regions[2].region;
    const threeRegionNameSelector = regionNames(propiedades.regions[2].region);
    const threeRegionNumber = propiedades.regions[2].porcentaje;

    const fourRegionName = propiedades.regions[3].region;
    const fourRegionNameSelector = regionNames(propiedades.regions[3].region);
    const fourRegionNumber = propiedades.regions[3].porcentaje;

    const fiveRegionName = propiedades.regions[4].region;
    const fiveRegionNameSelector = regionNames(propiedades.regions[4].region);
    const fiveRegionNumber = propiedades.regions[4].porcentaje;

    const sixRegionName = propiedades.regions[5].region;
    const sixRegionNameSelector = regionNames(propiedades.regions[5].region);
    const sixRegionNumber = propiedades.regions[5].porcentaje;

    const sevenRegionName = propiedades.regions[6].region;
    const sevenRegionNameSelector = regionNames(propiedades.regions[6].region);
    const sevenRegionNumber = propiedades.regions[6].porcentaje;

    const eightRegionName = propiedades.regions[7].region;
    const eightRegionNameSelector = regionNames(propiedades.regions[7].region);
    const eightRegionNumber = propiedades.regions[7].porcentaje;

    const nineRegionName = propiedades.regions[8].region;
    const nineRegionNameSelector = regionNames(propiedades.regions[8].region);
    const nineRegionNumber = propiedades.regions[8].porcentaje;

    const colorProduct = propiedades.colorProduct;
    const backgroundColor = colorBackground(propiedades.color);
    const backgroundLineWorld = fontColor(colorProduct);
    //Headline
    const headline = propiedades.headLine === "Personalized headline" ? propiedades.personalHeadline : propiedades.headLine;
    //FontSize
    const font = fontStyle(propiedades.fontStyle);
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
    const map = companyMap(propiedades.company);

    fontSizeRegion = (font) => {
        if (font === "Noteworthy") {
            return "16pt"
        }
        if (font === "MyriadPro-Bold") {
            return "14pt"
        }
        if (font === "Funnier") {
            return "10pt"
        }
    };

    fontSizeNumber = () => {
        if (font === "Noteworthy") {
            return "16pt"
        }
        if (font === "MyriadPro-Bold") {
            return "18pt"
        }
        if (font === "Funnier") {
            return "12pt"
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
        deviceScaleFactor: 1,
    });

    await page.setContent(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>23andMe</title>
    <style>
    .RegionName {
    font-size: 22px;
    text-align: center;
    color: ${fontColor(colorProduct)};    
    font-family:${font};   
    }  
    
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
        font-family:${font} ;
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
<body style="width:1152px;height:1536px;background-color: ${colorProductSelect(colorProduct)} ">
<h1 class='fontColorHeadline'>${headline}</h1>

<div style="width: 100%;text-align: center;">
    ${map}
</div>

<div style="margin-top: 50px;margin-right: 20px">
    <div style="display: flex; justify-content: space-around;">
        <div class="fontColorNumber" style="color:white;height:38px; width:100%; border-radius: 20px; background-color: #616c44;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${firstRegionNumber}%
        </div>
        <div class="fontColorNumber"  style="color:white;height:38px; width:100%; border-radius: 20px; background-color: #6d0008;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${secondRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:38px; width:100%; border-radius: 20px; background-color: #a25562;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${threeRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:38px; width:100%; border-radius: 20px; background-color: #5c4955;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
             ${fourRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:38px; width:100%; border-radius: 20px; background-color: #b19e3f;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${fiveRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:38px; width:100%; border-radius: 20px; background-color: #603813;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${sixRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:38px; width:100%; border-radius: 20px; background-color: #2e4b30;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
             ${sevenRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:38px; width:100%; border-radius: 20px; background-color: #7e4148;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
             ${eightRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:38px; width:100%; border-radius: 20px; background-color: #d2852d;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${nineRegionNumber}%
        </div>
    </div>
    <div style="display: flex; justify-content: space-around;margin-top:${font === "Funnier" ? " 9pt" : "5pt"}">
        <div style="height:60px; width:100%;display: flex; justify-content: center">
            <div class='fontColor' >${firstRegionName}</div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: center">
            <div class='fontColor' >${secondRegionName}</div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: center">
            <div class='fontColor' >${threeRegionName}</div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: center">
            <div class='fontColor'>${fourRegionName}</div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: center">
            <div class='fontColor' >${fiveRegionName}</div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: center">
            <div class='fontColor' >${sixRegionName}</div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: center">
            <div class='fontColor' >${sevenRegionName}</div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: center">
            <div class='fontColor' >${eightRegionName}</div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: center">
            <div class='fontColor' >${nineRegionName}</div>
        </div>
    </div>
</div>
</div>

<script>    
    $(function () {
        $(document).ready(function () {
            $("#worldMap").attr("fill", "${backgroundColor}").attr("stroke","${backgroundLineWorld}");
            $("#regions").attr("fill", "transparent");
            
            //Primary color
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
        });
    });
</script>
</body>
</html>
`);
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
