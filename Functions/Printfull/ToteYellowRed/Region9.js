const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../ColorsBackground/BrightMap');
const regionNames = require('../../RegionNames/RegionNamesClass');
const fontStyle = require('../../FontStyle/FontStyle');
const fontColor = require('../../FontColor/FontColor');
const lineMaps = require('../../LinesMap/LineMaps');
const companyMap = require('../../CompanyMap/CompanyMap');

module.exports = createPreview = async (nameFile, propiedades, orderInfo) => {
    const properties = toArray(propiedades);
    const map = companyMap(properties[0].value);
    const name = nameFile;

    const firstRegionName = properties[1].value;
    const firstRegionNameSelector = regionNames(properties[1].value);
    const firstRegionNumber = properties[2].value;

    const secondRegionName = properties[3].value;
    const secondRegionNameSelector = regionNames(properties[3].value);
    const secondRegionNumber = properties[4].value;

    const threeRegionName = properties[5].value;
    const threeRegionNameSelector = regionNames(properties[5].value);
    const threeRegionNumber = properties[6].value;

    const fourRegionName = properties[7].value;
    const fourRegionNameSelector = regionNames(properties[7].value);
    const fourRegionNumber = properties[8].value;

    const fiveRegionName = properties[9].value;
    const fiveRegionNameSelector = regionNames(properties[9].value);
    const fiveRegionNumber = properties[10].value;

    const sixRegionName = properties[11].value;
    const sixRegionNameSelector = regionNames(properties[11].value);
    const sixRegionNumber = properties[12].value;

    const sevenRegionName = properties[13].value;
    const sevenRegionNameSelector = regionNames(properties[13].value);
    const sevenRegionNumber = properties[14].value;

    const eightRegionName = properties[15].value;
    const eightRegionNameSelector = regionNames(properties[15].value);
    const eightRegionNumber = properties[16].value;

    const nineRegionName = properties[17].value;
    const nineRegionNameSelector = regionNames(properties[17].value);
    const nineRegionNumber = properties[18].value;

    const backgroundColor = colorBackground(properties[19].value);
    const backgroundLineWorld = backgroundColor === "transparent" ? "black" : "none";
    const colorProduct = properties[22].value;
    //Headline
    const headline = properties[20].value === "Personalized headline" ? properties[21].value : properties[20].value;

    const statement = properties[24].value;
    const personalStatementOne = statement === "Replicate the map on both sides" ? "" : properties[25].value;
    const personalStatementTwo = statement === "Replicate the map on both sides" ? "The image to the left will be duplicated on both sides of tote." : properties[26].value;
    const personalStatementThree = statement === "Replicate the map on both sides" ? "" : properties[27].value;
    //FontSize
    const font = fontStyle(properties[23].value);

    fontSizeRegion = (font) => {
        if (font === "Noteworthy") {
            return "17pt"
        }
        if (font === "MyriadPro-Bold") {
            return "17pt"
        }
        if (font === "Funnier") {
            return "14pt"
        }
    };

    fontSizeNumber = () => {
        if (font === "Noteworthy") {
            return "16pt"
        }
        if (font === "MyriadPro-Bold") {
            return "22pt"
        }
        if (font === "Funnier") {
            return "16pt"
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
            return "150pt"
        }
        if (font === "Funnier") {
            return "115pt";
        }
        if (font === "MyriadPro-Bold") {
            return "145pt"
        }
    };

    fontSpaceStatement = () => {
        if (font === "Noteworthy") {
            return "-60px"
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
            return "50px"
        }
        if (font === "Funnier") {
            return "40px"
        }
        if (font === "Noteworthy") {
            return "60px";
        }
    };

    bottomStatement = () => {
        if (font === "MyriadPro-Bold") {
            return "4in"
        }
        if (font === "Funnier") {
            return "3in"
        }
        if (font === "Noteworthy") {
            return "5in";
        }
    };

    bottomStatementMap = () => {
        if (font === "MyriadPro-Bold") {
            return "5.1in"
        }
        if (font === "Funnier") {
            return "4.7in"
        }
        if (font === "Noteworthy") {
            return "5.1in";
        }
    };

    capsuleAndNumber = () => {
        if (font === "MyriadPro-Bold") {
            return "100px";
        }
        if (font === "Funnier") {
            return "30px";
        }
        if (font === "Noteworthy") {
            return "50px";
        }
    };

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1632,
        height: 3168,
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
    .fontColor {
        color:${fontColor(colorProduct)};
        font-family:${font};
        font-size: ${fontSizeRegion(font)};
        text-align: center;
        align-items: center;
    }
    .fontColorRegion {
        color:white;
        font-family:${font};
        border: 2px solid ${lineMaps(colorProduct)};
        font-size: ${fontSizeNumber()};   
    }
  
    .fontStatement{
        color:${fontColor(colorProduct)};
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
        margin-bottom: ${font === "Funnier" ? "100px" : "0px"};
    }
    
    .fontColorNumber {
        font-family:${font};
        color: white;
        font-size: ${fontSizeNumber()};
    }
    .secondPart{
        text-align: center; 
        justify-content: center;
        align-items: center;
        width: 13in;
        height: 11in;
        margin-left: 1.9in;
        transform: rotate(180deg);
        margin-top:${bottomStatement()};
    }
    
    .secondMap {
        align-items: center;
        text-align: center;
        justify-content: center;
        transform: rotate(180deg);
        margin-top:${bottomStatementMap()};
        display: ${statement === "Replicate the map on both sides" ? '' : 'none'};
    }
    
    .capsulesAndRegions{
    margin-top: ${capsuleAndNumber()};
    margin-right: 20px;
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
<body style="height:33in;width: 17in;align-items: center;text-align: center;justify-content: center">
<div style="width: 13in;height: 11in;margin-left: 2in;margin-top:${font === "Funnier" ? "3.2in" : "3in"};">  
<h1 class='fontColorHeadline' style="text-align: center;">${headline} </h1>

<div style="width: 100%;text-align: center;;margin-top: 12px">
    ${map}
</div>

<div class="capsulesAndRegions">
    <div style="display: flex; justify-content: space-around;">
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #27A9E1;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${firstRegionNumber}%
        </div>
        <div class="fontColorNumber"  style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #6C61AA;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${secondRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #BE1E2D;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${threeRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #F9AF41;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
             ${fourRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #00833D;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${fiveRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #9794D2;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${sixRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #699279;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
             ${sevenRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #A4469A;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
             ${eightRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #CB8DBE;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
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
        <div style="height:60px; width:100%;display: flex; justify-content: center;text-align: center">
            <div class='fontColor' >${nineRegionName}</div>
        </div>
    </div>
</div>
</div>

<div class="secondPart">  
        <div class="fontStatement" style="width:13in;">
            <div style="margin-top: ${fontSpaceStatement()};" >${personalStatementOne}</div>
            <div style="margin-top: ${statement === "Replicate the map on both sides" ? "200px" : fontSpaceStatement()};" >${personalStatementTwo}</div>
            <div style="margin-top: ${fontSpaceStatement()};" >${personalStatementThree}</div>
        </div>
</div>  

<div class="secondMap">
<div style="width: 13in;height: 11in;margin-left: 2.2in;margin-top:${font === "Funnier" ? "3.2in" : "3in"};">  
<h1 class='fontColorHeadline' style="text-align: center;">${headline} </h1>

<div style="width: 100%;text-align: center;;margin-top: 12px">
    ${map}
</div>

<div class="capsulesAndRegions">
    <div style="display: flex; justify-content: space-around;">
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #27A9E1;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${firstRegionNumber}%
        </div>
        <div class="fontColorNumber"  style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #6C61AA;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${secondRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #BE1E2D;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${threeRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #F9AF41;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
             ${fourRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #00833D;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${fiveRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #9794D2;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
            ${sixRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #699279;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
             ${sevenRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #A4469A;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
             ${eightRegionNumber}%
        </div>
        <div class="fontColorNumber" style="color:white;height:0.376in; width:100%; border-radius: 20px; background-color: #CB8DBE;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 20px;">
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
        <div style="height:60px; width:100%;display: flex; justify-content: center;text-align: center">
            <div class='fontColor' >${nineRegionName}</div>
        </div>
    </div>
</div>
</div>
</div>

<script>    
    $(function () {
        $(document).ready(function () {
            $("#worldMap").attr("fill", "${backgroundColor}").attr("stroke","${backgroundLineWorld}");
            $(".worldMap").attr("fill", "${backgroundColor}").attr("stroke","${backgroundLineWorld}");
            
            $("#regions").attr("fill", "transparent");
            $(".regions").attr("fill", "transparent");
            
            
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
            $("${eightRegionNameSelector}").attr("fill", "#A4469A");
            //five color
            $("${nineRegionNameSelector}").attr("fill", "#CB8DBE");
        });
    });
</script>
</body>
</html>
`, {waitUntil: 'load', timeout: 0})
    } catch (e) {
        console.log(e)
    }

    await page.screenshot({path: `public/${name}.png`});
    await browser.close();
};
