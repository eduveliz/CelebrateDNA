const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../../ColorsBackground/BrightMap');
const regionNames = require('../../../RegionNames/RegionNames');
const fontStyle = require('../../../FontStyle/FontStyle');
const fontColor = require('../../../FontColor/FontColor');
const colorProductSelect = require('../../../Color/Color');
const lineMaps = require('../../../LinesMap/LineMaps');
const ancestryMap = require('../../../MapsSVGMug/AncestryMap');
const ttMap = require('../../../MapsSVGMug/TTMap');
const myHeritageMap = require('../../../MapsSVGMug/MyHeritageMap');
const compasSelector = require('../compassSelector');

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

    const colorProduct = propiedades.colorProduct;
    const backgroundColor = colorBackground(propiedades.color);
    const backgroundLineWorld = backgroundColor === "transparent" ? "#6D6E70" : "none";
    //Headline
    const font = fontStyle(propiedades.fontStyle);
    const headline = compasSelector(propiedades.headLine, font);
    let personalHeadline = propiedades.headLine === "First name / DNA" ? propiedades.personalHeadline : "";
    //FontSize
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
    const map = companyMap(propiedades.company);

    fontSizeRegion = () => {
        if (font === "Noteworthy") {
            return size === "11oz" ? "12pt" : "9pt";
        }
        if (font === "MyriadPro-Bold") {
            return size === "11oz" ? "10pt" : "9pt";
        }
        if (font === "Funnier") {
            return size === "11oz" ? "8pt" : "7pt";
        }
    };

    fontSizeNumber = () => {
        if (font === "Noteworthy") {
            return size === "11oz" ? "13.5pt" : "10pt";
        }
        if (font === "MyriadPro-Bold") {
            return size === "11oz" ? "11pt" : "14pt";
        }
        if (font === "Funnier") {
            return size === "11oz" ? "9pt" : "9pt"
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

    compassTop = () => {
        if (propiedades.headLine === "First name / DNA") {
            let down = font !== "Funnier" ? "1.8in" : "1.9in";
            return down;
        } else {
            return "1.9in"
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

    regionUp = () => {
        if (font === "Noteworthy") {
            return "4pt";
        }
        if (font === "MyriadPro-Bold") {
            return "5pt";
        }
        if (font === "Funnier") {
            return "6pt"
        }
    };

    compasHeadline = () => {
        return font === "Funnier" ? "11pt" : "17pt";
    };

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 873,
        height: 358,
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
        font-family: ${font};
        text-align: center;
        color: ${fontColor(colorProduct)};
    }
    
    .fontColorNumber {
        color:${fontColor(colorProduct)};
        font-family:${font};
        border: 2px solid ${lineMaps(colorProduct)};
        font-size: ${fontSizeNumber()};
        height: ${size === "11oz" ? "0.1788in" : "0.1788"};
        width:${size === "11oz" ? "2.9622in" : "4.4381in"};
    }
    
    .fontColor {
        color: #6D6E70;
        font-family:${font};
        text-align: center;
        font-size: ${fontSizeRegion()};
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
        margin-bottom:${compassHeadlineBottom()} ;
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

<div style="margin-right: 8px;margin-top: ${regionUp()}">
     <div style="display: flex; justify-content: space-around;">
        <div class="fontColorNumber" style="color:white;border-radius: 20px; background-color: #616c44;align-items: center;text-align: center;display: flex;justify-content: center;">
         ${firstRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;border-radius: 20px; background-color: #6d0008;align-items: center;text-align: center;display: flex;justify-content: center;">
         ${secondRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;border-radius: 20px; background-color: #a25562;align-items: center;text-align: center;display: flex;justify-content: center;">
        ${threeRegionNumber}%
        </div>
        <div  class="fontColorNumber" style="color:white;  border-radius: 20px; background-color: #5c4955;align-items: center;text-align: center;display: flex;justify-content: center;">
       ${fourRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;border-radius: 20px;background-color: #b19e3f;align-items: center;text-align: center;display: flex;justify-content: center;">
       ${fiveRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white; border-radius: 20px; background-color: #603813;align-items: center;text-align: center;display: flex;justify-content: center;">
        ${sixRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white; border-radius: 20px;background-color: #2e4b30;align-items: center;text-align: center;display: flex;justify-content: center;">
        ${sevenRegionNumber}%
        </div>
    </div>
    
    <div style="display: flex; justify-content: space-around;margin-top:${font === "Funnier" ? " 2pt" : "0pt"}">
        <div style="width:100%;height:60px;display: flex; justify-content: center   ">
            <div class="fontColor" >${firstRegionName}</div>
        </div>
        <div style="width:100%;height:60px; display: flex; justify-content: center">
            <div class="fontColor" >${secondRegionName}</div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: center">
            <div class="fontColor" >${threeRegionName}</div>
        </div>
        <div style=" width:100%;height:60px;display: flex; justify-content: center">
            <div class="fontColor" >${fourRegionName}</div>
        </div>
        <div style=" width:100%;height:60px;display: flex; justify-content: center">
            <div class="fontColor" >${fiveRegionName}</div>
        </div>
        <div style="width:100%; height:60px;display: flex; justify-content: center">
             <div class="fontColor">${sixRegionName}</div>
        </div>
        <div style="width:100%;height:60px;display: flex; justify-content: center">
            <div  class="fontColor">${sevenRegionName}</div>
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
        });
    });
</script>
</body>
</html>
`);
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
