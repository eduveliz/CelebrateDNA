const puppeteer = require('puppeteer');
const colorBackground = require('../../../ColorsBackground/BrightMap');
const regionNames = require('../../../RegionNames/RegionNames');
const fontStyle = require('../../../FontStyle/FontStyle');
const fontColor = require('../../../FontColor/FontColor');
const lineMaps = require('../../../LinesMap/LineMaps');
const colorProductSelect = require('../../../Color/Color');
const toArray = require('lodash.toarray');
const ancestryMap = require('../../../MapsMugPrintAnc/AncestryMap.js');
const ttMap = require('../../../MapsMugPrintAnc/TTMap');
const myHeritageMap = require('../../../MapsMugPrintAnc/MyHeritageMap');
const compasSelector = require('../compassSelector');

module.exports = createPreview = async (nameFile, properties, orderInfo) => {
    const name = nameFile;
    const datos = toArray(properties);
    //Regions  */ RegionsNamesSelectors is for Jquery/*
    const firstRegionName = datos[1].value;
    const firstRegionNameSelector = regionNames(datos[1].value);
    const firstRegionNumber = datos[2].value;

    const secondRegionName = datos[3].value;
    const secondRegionNameSelector = regionNames(datos[3].value);
    const secondRegionNumber = datos[4].value;

    const threeRegionName = datos[5].value;
    const threeRegionNameSelector = regionNames(datos[5].value);
    const threeRegionNumber = datos[6].value;

    const fourRegionName = datos[7].value;
    const fourRegionNameSelector = regionNames(datos[7].value);
    const fourRegionNumber = datos[8].value;

    //Background Map
    const colorProduct = datos[11].value;
    const backgroundColor = colorBackground(datos[11].value);
    const backgroundLineWorld = backgroundColor === "transparent" ? "#6D6E70" : "none";
    //Headline
    const font = fontStyle(datos[12].value);
    const headline = compasSelector(datos[9].value, font);
    let personalHeadline = datos[9].value === "First name / DNA" ? datos[10].value : "";

    const size = orderInfo.name.split('- ').pop().split('/')[0].toString();

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
            return size === "11oz" ? "12pt" : "11pt";
        }
        if (font === "MyriadPro-Bold") {
            return size === "11oz" ? "12pt" : "11pt";
        }
        if (font === "Funnier") {
            return size === "11oz" ? "10pt" : "8pt";
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
        if (datos[9].value === "First name / DNA") {
            let down = font !== "Funnier" ? "1.8in" : "1.9in";
            return down;
        } else {
            return "1.7in"
        }
    };

    compassLeft = () => {
        if (datos[9].value === "First name / DNA") {
            return "0.52in"
        } else {
            return "0.32in"
        }
    };

    compassH = () => {
        if (datos[9].value === "First name / DNA") {
            return "90.8736px"
        } else {
            return "105.8736px"
        }
    };
    compassW = () => {
        if (datos[9].value === "First name / DNA") {
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

    marginTopRegion = () => {
        if (font === "Noteworthy") {
            return "-2pt";
        }
        if (font === "MyriadPro-Bold") {
            return "0.2pt";
        }
        if (font === "Funnier") {
            return "2pt"
        }
    };

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
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
        height: ${size === "11oz" ? "0.1388in" : "0.1788"};
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
<div style="width: 100%;text-align: center;">
    ${map}
</div>
    <div style="position: absolute;top: ${compassTop()}; left: ${compassLeft()};">
          <div class="perosnalHeadline">${personalHeadline}</div>
          <img height=${compassH()} width=${compassW()} src="${headline}">
    </div>
    
       <div style="position: absolute;top:112px; right: 1.5px;height: 100px">
      <img height="100px" src="https://www.moolab.ml/page.png">
     </div>

<div style="margin-right: 10px;margin-top:2px">
    <div style="display: flex; justify-content: space-around;margin-right: 8px;margin-top:${font === "Funnier" ? " 2pt" : "-2pt"}">
        <div class='fontColorNumber' style="color:white; width:100%;border-radius: 20px; background-color: #27A9E1;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${firstRegionNumber}%
        </div>
        <div class='fontColorNumber' style="color:white; width:100%; border-radius: 20px; background-color: #6C61AA;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${secondRegionNumber}%
        </div>
        <div class='fontColorNumber' style="color:white; width:100%;  border-radius: 20px; background-color: #BE1E2D;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${threeRegionNumber}%
        </div>
        <div class='fontColorNumber' style="color:white; width:100%;  border-radius: 20px; background-color: #F9AF41;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${fourRegionNumber}%
        </div>
    </div>
    <div style="display: flex; justify-content: space-around;margin-right: 8px;margin-top:${marginTopRegion()}">
        <div style="width:100%;height:60px;display: flex; justify-content: center;">
            <div class='fontColor'>${firstRegionName}</div>
        </div>
        <div style="width:100%;height:60px; display: flex; justify-content: center">
            <div class='fontColor'>${secondRegionName}</div>
        </div>
        <div style="width:100%;height:60px;display: flex; justify-content: center">
            <div class='fontColor'>${threeRegionName}</div>
        </div>
        <div style=" width:100%;height:60px;display: flex; justify-content: center;">
            <div class='fontColor'>${fourRegionName}</div>
        </div>
    </div>
</div>
<script>    
    $(function () {
        $(document).ready(function () {
            $("#worldMap").attr("fill", "${backgroundColor}").attr("stroke","${backgroundLineWorld}");
            $("#regions").attr("fill", "transparent");
            //Primary color
            $("${firstRegionNameSelector}").attr("fill", "#27A9E1");
            $("${firstRegionNameSelector}").attr("stroke", "${lineMaps(colorProduct)}");
            
            $("${secondRegionNameSelector}").attr("fill", "#6C61AA");
            $("${secondRegionNameSelector}").attr("stroke", "${lineMaps(colorProduct)}");
            //second color
            $("${threeRegionNameSelector}").attr("fill", "#BE1E2D");
            $("${threeRegionNameSelector}").attr("stroke", "${lineMaps(colorProduct)}");
            
            $("${fourRegionNameSelector}").attr("fill", "#F9AF41");    
            $("${fourRegionNameSelector}").attr("stroke","${lineMaps(colorProduct)}");
        });
    });
</script>
</body>
</html>
`, {waitUntil: 'load', timeout: 0});
    } catch (e) {
        console.log(e);
    }

    await page.setViewport({
        width: 864,
        height: 336,
        deviceScaleFactor: 3,
    });
    await page.screenshot({path: `public/${name}.png`});
    await browser.close();
};
