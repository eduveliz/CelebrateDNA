const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../../ColorsBackground/BrightMap');
const regionNames = require('../../../RegionNames/RegionNames');
const fontStyle = require('../../../FontStyle/FontStyle');
const lineMaps = require('../../../LinesMap/LineMaps');
const fontColor = require('../../../FontColor/FontColor');
const colorProductSelect = require('../../../Color/Color');
const ancestryMap = require('../../../MapsMugPrintAnc/AncestryMap.js');
const ttMap = require('../../../MapsMugPrintAnc/TTMap');
const myHeritageMap = require('../../../MapsMugPrintAnc/MyHeritageMap');
const compasSelector = require('../compassSelector');

module.exports = createPreview = async (nameFile, properties, orderInfo) => {
    const name = nameFile;
    const datos = toArray(properties);

    const firstRegionName = datos[1];
    const firstRegionNameSelector = regionNames(datos[1]);
    const firstRegionNumber = datos[2];

    const secondRegionName = datos[3];
    const secondRegionNameSelector = regionNames(datos[3]);
    const secondRegionNumber = datos[4];

    const threeRegionName = datos[5];
    const threeRegionNameSelector = regionNames(datos[5]);
    const threeRegionNumber = datos[6];

    const fourRegionName = datos[7];
    const fourRegionNameSelector = regionNames(datos[7]);
    const fourRegionNumber = datos[8];

    const fiveRegionName = datos[9];
    const fiveRegionNameSelector = regionNames(datos[9]);
    const fiveRegionNumber = datos[10];

    const sixRegionName = datos[11];
    const sixRegionNameSelector = regionNames(datos[11]);
    const sixRegionNumber = datos[12];

    const sevenRegionName = datos[13];
    const sevenRegionNameSelector = regionNames(datos[13]);
    const sevenRegionNumber = datos[14];

    const colorProduct = datos[17];
    const backgroundColor = colorBackground(datos[17]);
    const backgroundLineWorld = backgroundColor === "transparent" ? "#6D6E70" : "none";
    //Headline
    const font = fontStyle(datos[18]);
    const headline = compasSelector(datos[15], font);
    let personalHeadline = datos[15] === "First name / DNA" ? datos[16] : "";
    //FontSize
    const size = orderInfo.title.split('- ').pop().split('/')[0].toString();

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
    const map = companyMap(datos[0]);

    fontSizeRegion = () => {
        if (font === "Noteworthy") {
            return size === "11oz" ? "7pt" : "7pt";
        }
        if (font === "MyriadPro-Bold") {
            return size === "11oz" ? "9pt" : "7pt";
        }
        if (font === "Funnier") {
            return size === "11oz" ? "8pt" : "7pt";
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
            return size === "11oz" ? "10pt" : "9pt"
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
        if (datos[13] === "First name / DNA") {
            let down = font !== "Funnier" ? "1.8in" : "1.9in";
            return down;
        } else {
            return "1.8in"
        }
    };

    compassLeft = () => {
        if (datos[15] === "First name / DNA") {
            return "0.52in"
        } else {
            return "0.32in"
        }
    };

    compassH = () => {
        if (datos[15] === "First name / DNA") {
            return "90.8736px"
        } else {
            return "105.8736px"
        }
    };
    compassW = () => {
        if (datos[15] === "First name / DNA") {
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


    marginTop = () => {

        if (font === "Noteworthy") {
            return "12px";
        }
        if (font === "MyriadPro-Bold") {
            return "12x";
        }
        if (font === "Funnier") {
            return "12px"
        }
    };

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 864,
        height: 336,
        deviceScaleFactor: 3,
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
        height: ${size === "11oz" ? "0.1388in" : "0.1788"};
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
<body style="width:9in;height:3.5in;background-color: ${colorProductSelect(colorProduct)};margin-top: 2px ">
<div style="justify-content:center;text-align: center;align-items: center;margin-top: -1px">
    ${map}
</div>

    <div style="position: absolute;top: ${compassTop()}; left: ${compassLeft()};">
          <div class="perosnalHeadline">${personalHeadline}</div>
          <img height=${compassH()} width=${compassW()} src="${headline}">
    </div>

<div style="margin-right: 10px;margin-top:2px">
     <div style="display: flex; justify-content: space-around;">
        <div class="fontColorNumber" style="color:white;border-radius: 20px; background-color: #27A9E1;align-items: center;text-align: center;display: flex;justify-content: center;">
         ${firstRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white; border-radius: 20px; background-color: #6C61AA;align-items: center;text-align: center;display: flex;justify-content: center;">
         ${secondRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white; border-radius: 20px; background-color: #BE1E2D;align-items: center;text-align: center;display: flex;justify-content: center;">
        ${threeRegionNumber}%
        </div>
        <div  class="fontColorNumber" style="color:white;  border-radius: 20px; background-color: #F9AF41;align-items: center;text-align: center;display: flex;justify-content: center;">
       ${fourRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white; border-radius: 20px;background-color: #00833D;align-items: center;text-align: center;display: flex;justify-content: center;">
       ${fiveRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;  border-radius: 20px; background-color: #9794D2;align-items: center;text-align: center;display: flex;justify-content: center;">
        ${sixRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;  border-radius: 20px;background-color: #699279;align-items: center;text-align: center;display: flex;justify-content: center;">
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
            
            $("${sixRegionNameSelector}").attr("fill", "#9794D2");
            $("${sixRegionNameSelector}").attr("stroke", "${lineMaps(colorProduct)}");
            //four color
            $("${sevenRegionNameSelector}").attr("fill", "#699279");
            $("${sevenRegionNameSelector}").attr("stroke","${lineMaps(colorProduct)}");
            
        });
    });
</script>
</body>
</html>
`);
    await page.screenshot({path: `public/${name}.png`});
    await browser.close();
};
