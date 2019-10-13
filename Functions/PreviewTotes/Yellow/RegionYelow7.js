const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../ColorsBackground/BrightMap');
const regionNames = require('../../RegionNames/RegionNames');
const fontStyle = require('../../FontStyle/FontStyle');
const fontColor = require('../../FontColor/FontColor');
const lineMaps = require('../../LinesMap/LineMaps');
const colorProductSelect = require('../../Color/Color');
const ancestryMap = require('../../AncestryMap');
const ttMap = require('../../TTMap');
const MyHeritageMap = require('../../MyHeritageMap');

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

    const statement = propiedades.statement;
    const personalStatementOne = statement === "Replicate the map on both sides" ? "" : propiedades.personalStatementOne;
    const personalStatementTwo = statement === "Replicate the map on both sides" ? "The image to the left will be duplicated on both sides of tote." : propiedades.personalStatementTwo;
    const personalStatementThree = statement === "Replicate the map on both sides" ? "" : propiedades.personalStatementThree;
    const sizeStatement = "Small";
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
    const map = companyMap(propiedades.company);

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

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1270 * 2,
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
    .fontColor {
        color:${fontColor(colorProduct)};
        font-family:${font};
        font-size: ${fontSizeRegion(font)};
    }
    .fontColorRegion {
        color:white;
        font-family:${font};
        border: 2px solid ${lineMaps(colorProduct)};
        font-size: ${fontSizeNumber()};   
    }
    
    .fontColorHeadline {
        color:${fontColor(colorProduct)};
        font-family:${font} ;
        text-align: center; 
        font-size:${fontHeadline()};
    }
    
    .fontStatement{
        color:${fontColor(colorProduct)};
        font-family:${font};
        font-size: ${fontStatement()};
        text-align: center;
        justify-content: center;
        align-items: center
    }
    
    .fontColorNumber {
        font-family:${font};
        color: white;
        font-size: ${fontSizeNumber()};
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
<body style="background-color: ${colorProductSelect(colorProduct)};display: flex">
<div>
    <h1 class='fontColorHeadline' style="text-align: center;">${headline} </h1>
    <div style="width: 100%;text-align: center;">
        ${map}
    </div>
    <div style="margin-top: 50px;margin-right: 20px">
         <div style="display: flex; justify-content: space-around;">
            <div class="fontColorNumber" style="height:38px; width:100%;border-radius: 20px; background-color: #27A9E1;align-items: center;text-align: center;display: flex;justify-content: center;">
             ${firstRegionNumber}%
            </div>
            <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px; background-color: #6C61AA;align-items: center;text-align: center;display: flex;justify-content: center;">
             ${secondRegionNumber}%
            </div>
            <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px; background-color: #BE1E2D;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${threeRegionNumber}%
            </div>
            <div  class="fontColorNumber" style="height:38px; width:100%;  border-radius: 20px; background-color: #F9AF41;align-items: center;text-align: center;display: flex;justify-content: center;">
           ${fourRegionNumber}%
            </div>
            <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px;background-color: #00833D;align-items: center;text-align: center;display: flex;justify-content: center;">
           ${fiveRegionNumber}%
            </div>
            <div class="fontColorNumber" style="height:38px; width:100%;  border-radius: 20px; background-color: #9794D2;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${sixRegionNumber}%
            </div>
            <div class="fontColorNumber" style="height:38px; width:100%;  border-radius: 20px;background-color: #699279;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${sevenRegionNumber}%
            </div>
        </div>
        
        <div style="display: flex; justify-content: space-around;margin-top:${font === "Funnier" ? " 9pt" : "0"}">
            <div style="width:100%;height:60px;display: flex; justify-content: center">
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
</div>

    <div>
        <h1 style="text-align: center">Flip side</h1>
        <div class="fontStatement" style="width:13in;height:11in;">
            <p>${personalStatementOne}</p>
            <p>${personalStatementTwo}</p>
            <p>${personalStatementThree}</p>
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
