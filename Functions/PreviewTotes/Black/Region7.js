const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../ColorsBackground/BrightMap');
const regionNames = require('../../RegionNames/RegionNames');
const fontStyle = require('../../FontStyle/FontStyle');
const fontColor = require('../../FontColor/FontColor');
const colorProductSelect = require('../../Color/Color');

module.exports = createPreview = async (nameFile, propiedades) => {
    //Regions  */ RegionsNamesSelectors is for Jquery/*
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

    const backgroundColor = colorBackground(propiedades.color);
    const backgroundLineWorld = backgroundColor === "transparent" ? "black" : "none";
    const colorProduct = propiedades.fontColor;
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
            return MyHeritageMap;
        }
    };

    fontSizeRegion = (font) => {
        if (font === "Noteworthy") {
            return "20pt"
        }
        if (font === "MyriadPro-Bold") {
            return "18pt"
        }
        if (font === "Funnier") {
            return "12pt"
        }
        if (font === "Noteworhty Bold") {
            return "20pt"
        }
    };

    fontSizeNumber = () => {
        if (font === "Noteworthy") {
            return "17pt"
        }
        if (font === "MyriadPro-Bold") {
            return "20pt"
        }
        if (font === "Funnier") {
            return "15pt"
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

    fontStatement = () => {
        if (sizeStatement === "Small") {
            return "100pt"
        }
        if (sizeStatement === "Medium") {
            return "110px";
        }
        if (sizeStatement === "Large") {
            return "85px"
        }
    };

    const map = companyMap(propiedades.company);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1270,
        height: 1280,
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
    
    .fontColor {
        color:${fontColor(colorProduct)};
        font-family:${font};
    }
    .fontColorRegion {
        color:white;
        font-family:${font};
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
<body style="width:13in;height:11in;background-color: ${colorProductSelect(colorProduct)}">
<h1 class='fontColor' style="text-align: center;font-size:89px;">${headline} </h1>

<div style="width: 100%;text-align: center;">
    ${map}
</div>

<div style="margin-top: 50px;margin-right: 20px">
     <div style="display: flex; justify-content: space-around;">
        <div class="fontColorRegion" style="height:38px; width:100%;border-radius: 20px; background-color: #27A9E1;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
         ${firstRegionNumber} %
        </div>
        <div class="fontColorRegion" style="height:38px; width:100%; border-radius: 20px; background-color: #6C61AA;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
         ${secondRegionNumber}
        </div>
        <div class="fontColorRegion" style="height:38px; width:100%; border-radius: 20px; background-color: #BE1E2D;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
        ${threeRegionNumber} %
        </div>
        <div  class="fontColorRegion" style="height:38px; width:100%;  border-radius: 20px; background-color: #F9AF41;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
       ${fourRegionNumber} %
        </div>
        <div class="fontColorRegion" style="height:38px; width:100%; border-radius: 20px;background-color: #00833D;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
       ${fiveRegionNumber} %
        </div>
        <div class="fontColorRegion" style="height:38px; width:100%;  border-radius: 20px; background-color: #9794D2;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
        ${sixRegionNumber} %
        </div>
        <div class="fontColorRegion" style="height:38px; width:100%;  border-radius: 20px;background-color: #699279;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
        ${sevenRegionNumber} %
        </div>
    </div>
    
    <div style="display: flex; justify-content: space-around;">
        <div style="width:100%;height:60px;display: flex; justify-content: center   ">
            <div class="RegionName" >${firstRegionName}</div>
        </div>
        <div style="width:100%;height:60px; display: flex; justify-content: center">
            <div class="RegionName" >${secondRegionName}</div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: center">
            <div class="RegionName" >${threeRegionName}</div>
        </div>
        <div style=" width:100%;height:60px;display: flex; justify-content: center">
            <div class="RegionName" >${fourRegionName}</div>
        </div>
        <div style=" width:100%;height:60px;display: flex; justify-content: center">
            <div class="RegionName" >${fiveRegionName}</div>
        </div>
        <div style="width:100%; height:60px;display: flex; justify-content: center">
             <div class="RegionName">${sixRegionName}</div>
        </div>
        <div style="width:100%;height:60px;display: flex; justify-content: center">
            <div  class="RegionName">${sevenRegionName}</div>
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
            $("${secondRegionNameSelector}").attr("fill", "#6C61AA");
            //second color
            $("${threeRegionNameSelector}").attr("fill", "#BE1E2D");
            $("${fourRegionNameSelector}").attr("fill", "#F9AF41");
            //three color
            $("${fiveRegionNameSelector}").attr("fill", "#00833D");
            $("${sixRegionNameSelector}").attr("fill", "#9794D2");
            //four color
            $("${sevenRegionNameSelector}").attr("fill", "#699279");
        });
    });
</script>
</body>
</html>
`);
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
