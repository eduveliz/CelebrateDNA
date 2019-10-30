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
const MyHeritageMap = require('../../../MapsSVG/MyHeritageMap');

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

    const eightRegionName = propiedades.regions[7].region;
    const eightRegionNameSelector = regionNames(propiedades.regions[7].region);
    const eightRegionNumber = propiedades.regions[7].porcentaje;

    const nineRegionName = propiedades.regions[8].region;
    const nineRegionNameSelector = regionNames(propiedades.regions[8].region);
    const nineRegionNumber = propiedades.regions[8].porcentaje;

    const backgroundColor = colorBackground(propiedades.color);
    const backgroundLineWorld = backgroundColor === "transparent" ? "black" : "none";
    const colorProduct = propiedades.fontColor;
    //Headline
    const headline = propiedades.headLine === "Personalized headline" ? propiedades.personalHeadline : propiedades.headLine;

    const statement = propiedades.statement;
    const personalStatementOne = statement === "Replicate the map on both sides" ? "" : propiedades.personalStatementOne;
    const personalStatementTwo = statement === "Replicate the map on both sides" ? "" : propiedades.personalStatementTwo;
    const personalStatementThree = statement === "Replicate the map on both sides" ? "The image will be duplicated on both sides of tote." : propiedades.personalStatementThree;

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
            return "14pt"
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

    fontStatement = () => {
        if (font === "Noteworthy") {
            return "175pt"
        }
        if (font === "Funnier") {
            return "120pt";
        }
        if (font === "MyriadPro-Bold") {
            return "150pt"
        }
    };

    fontSpaceStatement = () => {
        if (font === "Noteworthy") {
            return "-100px"
        }
        if (font === "MyriadPro-Bold") {
            return "-50px";
        }
        if (font === "Funnier") {
            return "30px"
        }
    };

    topStatement = () => {
        if (font === "MyriadPro-Bold") {
            return "100px"
        }
        if (font === "Funnier") {
            return "60px"
        }
        if (font === "Noteworthy") {
            return "100px";
        }
    };

    const map = companyMap(propiedades.company);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1270,
        height: 1620,
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
      
    .fontColor {
        color:#A7A9AB;
        font-family:${font};
        font-size: ${fontSizeRegion(font)};
        text-align: center;
        align-items: center;
    }
    
    .fontColorRegion {
        color: #FFFFFF;
        font-family:${font};
        border: 2px solid #BBBDC0;
        font-size: ${fontSizeNumber()};   
    }
    
    .fontStatement{
        color:#A7A9AB;
        font-family:${statement === "Replicate the map on both sides" ? "MyriadPro-Bold" : font};
        font-size: ${statement === "Replicate the map on both sides" ? "80px" : fontStatement()};
        text-align: center;
        justify-content: center;
        align-items: center;
        margin-top: ${topStatement()};
    }
        
    .fontColorHeadline {
        color:${fontColor(colorProduct)};
        font-family:${font} ;
        text-align: center; 
        font-size:${fontHeadline()};
    }
    
    .fontColorNumber {
        font-family:${font};
        color: #FFFFFF;
        border: 2px solid #BBBDC0;
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
<body style="width:13in;height:11in;background-color: black;padding-top: 70px">
<div>
<div style="width: 100%;text-align: center;">
    ${map}
</div>

<div style="margin-top: 50px;margin-right: 20px">
    <div style="display: flex; justify-content: space-around;">
        <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px; background-color: #0a3542;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${firstRegionNumber}%
        </div>
        <div class="fontColorNumber"  style="height:38px; width:100%; border-radius: 20px; background-color: #851f62;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${secondRegionNumber}%
        </div>
        <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px; background-color: #68672b;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${threeRegionNumber}%
        </div>
        <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px; background-color: #1b224e;align-items: center;text-align: center;display: flex;justify-content: center;">
             ${fourRegionNumber}%
        </div>
        <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px; background-color: #096f8e;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${fiveRegionNumber}%
        </div>
        <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px; background-color: #823d3e;align-items: center;text-align: center;display: flex;justify-content: center;">
            ${sixRegionNumber}%
        </div>
        <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px; background-color: #350f29;align-items: center;text-align: center;display: flex;justify-content: center;">
             ${sevenRegionNumber}%
        </div>
        <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px; background-color: #a4469a;align-items: center;text-align: center;display: flex;justify-content: center;">
             ${eightRegionNumber}%
        </div>
        <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px; background-color: #731512;align-items: center;text-align: center;display: flex;justify-content: center;">
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
   
    <div style="margin-top: 50px">
        <hr>
      <div class="fontStatement" style="width:13in;">
            <div style="margin-top: ${fontSpaceStatement()};" >${personalStatementOne}</div>
            <div style="margin-top: ${statement === "Replicate the map on both sides" ? "200px" : fontSpaceStatement()};" >${personalStatementTwo}</div>
            <div style="margin-top: ${fontSpaceStatement()};" >${personalStatementThree}</div>
        </div>
    </div>

<script>    
    $(function () {
        $(document).ready(function () {
            $("#worldMap").attr("fill", "${backgroundColor}").attr("stroke","#BBBDC0");
            $("#regions").attr("fill", "transparent");
            
            $("${firstRegionNameSelector}").attr("fill", "#0A3542");
            $("${firstRegionNameSelector}").attr("stroke", "#BBBDC0");
            
            $("${secondRegionNameSelector}").attr("fill", "#851F62");
            $("${secondRegionNameSelector}").attr("stroke", "#BBBDC0");
            //second color
            $("${threeRegionNameSelector}").attr("fill", "#68672B");
            $("${threeRegionNameSelector}").attr("stroke", "#BBBDC0");
            
            $("${fourRegionNameSelector}").attr("fill", "#1B224E");
            $("${fourRegionNameSelector}").attr("stroke","#BBBDC0");
            //three color
            $("${fiveRegionNameSelector}").attr("fill", "#096F8E");
            $("${fiveRegionNameSelector}").attr("stroke","#BBBDC0");
            
            $("${sixRegionNameSelector}").attr("fill", "#823D3E");
            $("${sixRegionNameSelector}").attr("stroke", "#BBBDC0");
            //four color
            $("${sevenRegionNameSelector}").attr("fill", "#350F29");
            $("${sevenRegionNameSelector}").attr("stroke","#BBBDC0");
            
            $("${eightRegionNameSelector}").attr("fill", "#A4469A");
            $("${eightRegionNameSelector}").attr("stroke", "#BBBDC0");
            //five color
            $("${nineRegionNameSelector}").attr("fill", "#731512");
            $("${nineRegionNameSelector}").attr("stroke","#BBBDC0");
        });
    });
</script>
</body>
</html>
`);
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
