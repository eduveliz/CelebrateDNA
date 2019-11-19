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

    const colorProduct = propiedades.colorProduct;
    const backgroundColor = colorBackground(propiedades.color);
    const backgroundLineWorld = fontColor(colorProduct);
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


    fontSizeRegion = (font) => {
        if (font === "Noteworthy") {
            return size === "11oz" ? "12pt" : "14pt";
        }
        if (font === "MyriadPro-Bold") {
            return size === "11oz" ? "12pt" : "14pt";
        }
        if (font === "Funnier") {
            return size === "11oz" ? "10pt" : "10pt";
        }
    }

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
            return "1.63in"
        } else {
            return "1.9in"
        }
    };
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>23andMe</title>
    <style>
    .fontColor {
        color: #6D6E70;
        font-family:${font} ;
        font-size: ${fontSizeRegion(font)};
    }
    
    .fontRegion {
      font-size:${fontSizeRegion(font)} ;
      font-family:${font};
    }
    
    .fontColorNumber {
        color:${fontColor(colorProduct)};
        font-family:${font} ;
        height: ${size === "11oz" ? "0.1788in" : "0.1788"};
        width:${size === "11oz" ? "2.9622in" : "4.4381in"};
        border: 2px solid ${lineMaps(colorProduct)};
        font-size: ${fontSizeNumber()};
    }
    
    .fontColorHeadline {
        color:${fontColor(colorProduct)};
        font-family:${font} ;
        text-align: center; 
        font-size:${fontHeadline()};
    }
    
    .perosnalHeadline{
        font-family: ${font} ;
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

    <div style="height: 0.668in; width: 0.716in;position: absolute;top: ${compassTop()}; left: ${compassLeft()}">
          <div class="perosnalHeadline">${personalHeadline}</div>
          <img height=${compassH()} width=${compassW()} src="${headline}">
    </div>


<div>
    <div style="display: flex; justify-content: space-around;margin-right: 20px">
        <div class="fontColorNumber" style="color:white;border-radius: 20px; background-color: #616c44;align-items: center;text-align: center;display: flex;justify-content: center;">
        ${firstRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white; border-radius: 20px; background-color: #6d0008;align-items: center;text-align: center;display: flex;justify-content: center;">
         ${secondRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;  border-radius: 20px; background-color: #a25562;align-items: center;text-align: center;display: flex;justify-content: center;">
         ${threeRegionNumber}%
        </div>
    </div>
    <div style="display: flex; justify-content: space-around;margin-right: 20px">
        <div style="width:100%;height:60px;display: flex; justify-content: center;margin-top:${font === "Funnier" ? " 9pt" : "0"}">
            <div class="fontColor">${firstRegionName}</div>
        </div>
        <div style="width:100%;height:60px; display: flex; justify-content: center;margin-top:${font === "Funnier" ? " 9pt" : "0"}">
            <div class="fontColor">${secondRegionName}</div>
        </div>
        <div style="width:100%;height:60px;display: flex; justify-content: center;margin-top:${font === "Funnier" ? " 9pt" : "0"}">
            <div class="fontColor">${threeRegionName}</div>
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
        });
    });
</script>
</body>
</html>
`);

    await page.setViewport({
        width: 864,
        height: 350,
        deviceScaleFactor: 1,
    });
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
