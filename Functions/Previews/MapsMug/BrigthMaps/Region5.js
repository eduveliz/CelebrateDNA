const puppeteer = require('puppeteer');
const colorBackground = require('../../../ColorsBackground/BrightMap');
const regionNames = require('../../../RegionNames/RegionNames');
const fontStyle = require('../../../FontStyle/FontStyle');
const fontColor = require('../../../FontColor/FontColor');
const lineMaps = require('../../../LinesMap/LineMaps');
const colorProductSelect = require('../../../Color/Color');
const ancestryMap = require('../../../MapsSVGMug/AncestryMap');
const ttMap = require('../../../MapsSVGMug/TTMap');
const myHeritageMap = require('../../../MapsSVGMug/MyHeritageMap');
const compasSelector = require('../compassSelector');

module.exports = createPreview = async (propiedades) => {
    const name = propiedades.nameFile;
    //Regions  */ RegionsNamesSelectors is for Jquery/*
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

    const colorProduct = propiedades.colorProduct;
    const backgroundColor = colorBackground(propiedades.color);
    const backgroundLineWorld = backgroundColor === "transparent" ? "#6D6E70" : "none";
    //Headline
    const font = fontStyle(propiedades.fontStyle);
    const headline = compasSelector(propiedades.headLine, font);
    let personalHeadline = propiedades.headLine === "First name / DNA" ? propiedades.personalHeadline : "";

    let size = "11oz";

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

    const map = companyMap(propiedades.company);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 873,
        height: 350,
        deviceScaleFactor: 1,
    });

    fontSizeRegion = (font) => {
        if (font === "Noteworthy") {
            return size === "11oz" ? "12pt" : "9pt";
        }
        if (font === "MyriadPro-Bold") {
            return size === "11oz" ? "14pt" : "9pt";
        }
        if (font === "Funnier") {
            return size === "11oz" ? "10pt" : "7pt";
        }
    };

    fontSizeNumber = () => {
        if (font === "Noteworthy") {
            return size === "11oz" ? "10pt" : "10pt";
        }
        if (font === "MyriadPro-Bold") {
            return size === "11oz" ? "14pt" : "14pt";
        }
        if (font === "Funnier") {
            return size === "11oz" ? "10pt" : "10pt"
        }
    };

    compassTop = () => {
        if (propiedades.headLine === "First name / DNA") {
            let down = font !== "Funnier" ? "1.8in" : "1.9in";
            return down;
        } else {
            return "1.8in"
        }
    };

    compassLeft = () => {
        if (propiedades.headLine === "First name / DNA") {
            return "0.52in"
        } else {
            return "0.42in"
        }
    };

    compassH = () => {
        if (propiedades.headLine === "First name / DNA") {
            return "90.8736px"
        } else {
            return "105.8736px"
        }
    };
    compassW = () => {
        if (propiedades.headLine === "First name / DNA") {
            return "69.3984px"
        } else {
            return "105.3984px"
        }
    };

    compassHeadlineBottom = () => {
        if (font === "Noteworthy") {
            return "-1px";
        }
        if (font === "MyriadPro-Bold") {
            return "2px";
        }
        if (font === "Funnier") {
            return "5px"
        }
    };

    compasHeadline = () => {
        return font === "Funnier" ? "11pt" : "17pt";
    };
    await page.setContent(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>23andMe</title>
    <style>
    .fontColor {
        color: #6D6E70;
        font-family:${font};
        text-align: center;
        font-size: ${fontSizeRegion(font)};
    }
    
    .fontColorNumber {
        color:${fontColor(colorProduct)};
        font-family:${font} ;
        border: 2px solid ${lineMaps(colorProduct)};
        font-size: ${fontSizeNumber()};
        height: ${size === "11oz" ? "0.1788in" : "0.1788"};
        width:${size === "11oz" ? "2.9622in" : "4.4381in"};
    }
    
    .fontColorHeadline {
        color:${fontColor(colorProduct)};
        font-family:${font} ;
        text-align: center; 
        font-size:${fontHeadline()};
    }
    
    .perosnalHeadline{
        font-family: ${font} ;
        align-items: center;
        margin-left: -8px;
        text-align: center;
        margin-bottom:${compassHeadlineBottom()};
        font-size: ${compasHeadline()};
        color: #6D6E70;
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
<body style="width:9in;height:3.5in;background-color: ${colorProductSelect(colorProduct)} ">
<div style="width: 100%;text-align: center;">
    ${map}
</div>
    <div style="position: absolute;top: ${compassTop()}; left: ${compassLeft()};">
          <div class="perosnalHeadline">${personalHeadline}</div>
          <img height=${compassH()} width=${compassW()} src="${headline}">
    </div>

<div style="margin-right: 8px;margin-top: ${font === "Funnier" || font === "MyriadPro-Bold" ? "4pt" : "3.2pt"}">
    <div style="display: flex; justify-content: space-around;">
        <div class='fontColorNumber' style="color:white;border-radius: 20px; background-color: #27A9E1;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${firstRegionNumber}%
        </div>
        <div class='fontColorNumber' style="color:white; border-radius: 20px; background-color: #6C61AA;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${secondRegionNumber}%
        </div>
        <div class='fontColorNumber' style="color:white;  border-radius: 20px; background-color: #BE1E2D;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${threeRegionNumber}%
        </div>
        <div class='fontColorNumber' style="color:white;  border-radius: 20px; background-color: #F9AF41;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${fourRegionNumber}%
        </div>
        <div class='fontColorNumber' style="color:white; border-radius: 20px;background-color: #00833D;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${fiveRegionNumber}%
        </div>
    </div>
    <div style="display: flex; justify-content: space-around;margin-top:${font === "Funnier" ? " 2pt" : "0pt"}">
        <div style="width:100%;height:60px;display: flex; justify-content: center;">
            <div class='fontColor'>${firstRegionName}</div>
        </div>
        <div style="width:100%;height:60px; display: flex; justify-content: center">
            <div class='fontColor'>${secondRegionName}</div>
        </div>
        <div style="width:100%;height:60px;display: flex; justify-content: center">
            <div class='fontColor'>${threeRegionName}</div>
        </div>
        <div style="width:100%;height:60px; display: flex; justify-content: center">
            <div class='fontColor'>${fourRegionName}</div>
        </div>
        <div style="width:100%;height:60px;display: flex; justify-content: center">
            <div class='fontColor'>${fiveRegionName}</div>
        </div>
    </div>
</div>
<script>    
    $(function () {
        $(document).ready(function () {
            $("#worldMap").attr("fill", "${backgroundColor}").attr("stroke","${backgroundLineWorld}");
            $("#regions").attr("fill", "transparent");
            
            $("${firstRegionNameSelector}").attr("fill", "#27A9E1");
            $("${firstRegionNameSelector}").attr("stroke", "${lineMaps(colorProduct)}");
            
            $("${secondRegionNameSelector}").attr("fill", "#6C61AA");
            $("${secondRegionNameSelector}").attr("stroke", "${lineMaps(colorProduct)}");
            //second color
            $("${threeRegionNameSelector}").attr("fill", "#BE1E2D");
            $("${threeRegionNameSelector}").attr("stroke", "${lineMaps(colorProduct)}");
            
            $("${fourRegionNameSelector}").attr("fill", "#F9AF41");    
            $("${fourRegionNameSelector}").attr("stroke","${lineMaps(colorProduct)}");
            //three color
            $("${fiveRegionNameSelector}").attr("fill", "#00833D");
            $("${fiveRegionNameSelector}").attr("stroke", "${lineMaps(colorProduct)}");
        });
    });
</script>
</body>
</html>
`);
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
