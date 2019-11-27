const puppeteer = require('puppeteer');
const colorBackground = require('../../ColorsBackground/BrightMap');
const regionNames = require('../../RegionNames/RegionNames');
const fontStyle = require('../../FontStyle/FontStyle');
const ancestryMap = require('../../MapsSVG/AncestryMap');
const ttMap = require('../../MapsSVG/TTMap');
const MyHeritageMap = require('../../MapsSVG/MyHeritageMap');

module.exports = createPreview = async (nameFile, propiedades, orderInfo) => {
    const properties = toArray(propiedades);

    const name = propiedades.nameFile;

    const firstRegionName = properties[1];
    const firstRegionNameSelector = regionNames(properties[1]);
    const firstRegionNumber = properties[2];

    const secondRegionName = properties[3];
    const secondRegionNameSelector = regionNames(properties[3]);
    const secondRegionNumber = properties[4];

    const threeRegionName = properties[5];
    const threeRegionNameSelector = regionNames(properties[5]);
    const threeRegionNumber = properties[6];

    const fourRegionName = properties[7];
    const fourRegionNameSelector = regionNames(properties[7]);
    const fourRegionNumber = properties[8];

    const fiveRegionName = properties[9];
    const fiveRegionNameSelector = regionNames(properties[9]);
    const fiveRegionNumber = properties[10];

    const sixRegionName = properties[11];
    const sixRegionNameSelector = regionNames(properties[11]);
    const sixRegionNumber = properties[12];

    const sevenRegionName = properties[13];
    const sevenRegionNameSelector = regionNames(properties[13]);
    const sevenRegionNumber = properties[14];

    const eightRegionName = properties[15];
    const eightRegionNameSelector = regionNames(properties[15]);
    const eightRegionNumber = properties[16];

    const nineRegionName = properties[17];
    const nineRegionNameSelector = regionNames(properties[17]);
    const nineRegionNumber = properties[18];

    const tenRegionName = properties[19];
    const tenRegionNameSelector = regionNames(properties[20]);
    const tenRegionNumber = properties[21];

    const backgroundColor = colorBackground(propiedades.color);
    const backgroundLineWorld = backgroundColor === "transparent" ? "black" : "none";
    const colorProduct = propiedades.fontColor;
    //Headline
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
            return "18pt"
        }
        if (font === "MyriadPro-Bold") {
            return "18pt"
        }
        if (font === "Funnier") {
            return "13pt"
        }
        if (font === "Noteworhty Bold") {
            return "20pt"
        }
    };

    fontSizeNumber = () => {
        if (font === "Noteworthy") {
            return "16pt"
        }
        if (font === "MyriadPro-Bold") {
            return "20pt"
        }
        if (font === "Funnier") {
            return "16pt"
        }
        if (font === "Noteworhty Bold") {
            return "35pt"
        }
    };

    fontStatement = () => {
        if (font === "Noteworthy") {
            return "100pt"
        }
        if (font === "Funnier") {
            return "120pt";
        }
        if (font === "MyriadPro-Bold") {
            return "100pt"
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
    .fontColor {
        color:#A7A9AB;
        font-family:${font};
        text-align: center;
        font-size: ${fontSizeRegion(font)};
    }
    .fontColorRegion {
        color:white;
        font-family:${font};
    }
    
    .fontColorNumber{
        color: #FFFFFF;
        font-size: ${fontSizeNumber()};
        border: 2px solid #BBBDC0;
        font-family:${font};
    }
    
    .fontStatement{
        color:#A7A9AB;
        font-family:${statement === "Replicate the map on both sides" ? "MyriadPro-Bold" : font};
        font-size:${fontStatement()};
        text-align: center;
        justify-content: center;
        align-items: center;
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
<body style="width:13in;height:11in;background-color: black">
<div style="width: 100%;text-align: center;">
    ${map}
</div>

<div style="display: flex; justify-content:space-between;width:98%;margin-top: 90px;padding: 10px">
    <div id="firstGroup" style="width: 100%;">
        <div style="height:60px; width:100%;display: flex; justify-content: initial;margin-bottom:7pt">
            <div class="fontColor" style="width: 50%;text-align: center;display: flex;justify-content: center;align-items: center ">${firstRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px;">
            <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px;background-color: #0a3542;align-items: center;text-align: center;display: flex;justify-content: center;">
                ${firstRegionNumber}%
            </div>
            <div class="fontColorNumber" style="height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #851f62;align-items: center;text-align: center;display: flex;justify-content: center;">
                ${secondRegionNumber}%
            </div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="width:50%;text-align: center;display: flex;justify-content: center;align-items: center">${secondRegionName}</div>
        </div>
    </div>

   <div id="secondGroup" style="width: 100%;">
        <div style="height:60px; width:100%;display: flex; justify-content: initial;margin-bottom:7pt ">
            <div class="fontColor" style="width: 50%;text-align: center;display: flex;justify-content: center;align-items: center ">${threeRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px;">
            <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px;background-color: #68672b;align-items: center;text-align: center;display: flex;justify-content: center;">
                ${threeRegionNumber}%
            </div>
            <div class="fontColorNumber" style="height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #1b224e;align-items: center;text-align: center;display: flex;justify-content: center;">
                 ${fourRegionNumber}%
            </div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="width:50%;text-align: center;display: flex;justify-content: center;align-items: center">${fourRegionName}</div>
        </div>
    </div>
     
   <div id="threeGroup" style="width: 100%;">
        <div style="height:60px; width:100%;display: flex; justify-content: initial;margin-bottom:7pt">
            <div class="fontColor" style="width: 50%;text-align: center;display: flex;justify-content: center;align-items: center ">${fiveRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px;">
            <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px;background-color: #096f8e;align-items: center;text-align: center;display: flex;justify-content: center;">
                 ${fiveRegionNumber}%
            </div>
            <div class="fontColorNumber" style="height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #823d3e;align-items: center;text-align: center;display: flex;justify-content: center;">
                  ${sixRegionNumber}%
            </div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="width:50%;text-align: center;display: flex;justify-content: center;align-items: center">${sixRegionName}</div>
        </div>
    </div>

   <div id="fourGroup" style="width: 100%;">
        <div style="height:60px; width:100%;display: flex; justify-content: initial;margin-bottom:7pt ">
            <div class="fontColor" style="width: 50%;text-align: center;display: flex;justify-content: center;align-items: center ">${sevenRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px; ">
            <div  class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px;background-color: #350f29;align-items: center;text-align: center;display: flex;justify-content: center;">
                ${sevenRegionNumber}%
            </div>
            <div  class="fontColorNumber" style="height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #a4469a;align-items: center;text-align: center;display: flex;justify-content: center;">
                ${eightRegionNumber}%
            </div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="width: 50%;text-align: center;display: flex;justify-content: center;align-items: center">${eightRegionName}</div>
        </div>
    </div>

    <div id="fiveGroup" style="width: 100%; ">
        <div style="height:60px; width:100%;display: flex; justify-content: initial;margin-bottom:7pt ">
            <div class="fontColor" style="text-align: center;width: 50%;display: flex;justify-content: center;align-items: center ">${nineRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px; ">
            <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px;background-color: #731512;align-items: center;text-align: center;display: flex;justify-content: center;">
                ${nineRegionNumber}%
            </div>
            <div  class="fontColorNumber" style="height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #1c4f34;align-items: center;text-align: center;display: flex;justify-content: center;">
                ${tenRegionNumber}%
            </div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="width: 50%;text-align: center;display: flex;justify-content: center;align-items: center">${tenRegionName}</div>
        </div>
    </div>
</div>

<div    >
    <h1 style="text-align: center;color: white;margin-bottom: 0px">Flip side</h1>
    <div class="fontStatement" style="width:13in;">
        <div >${personalStatementOne}</div>
        <div >${personalStatementTwo}</div>
        <div >${personalStatementThree}</div>
    </div>
</div>

<script>    
    $(function () {
        $(document).ready(function () {
            $("#worldMap").attr("fill", "${backgroundColor}").attr("stroke","#BBBDC0");
            $("#regions").attr("fill", "transparent");
            
            //Primary color
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
            
            $("${tenRegionNameSelector}").attr("fill", "#1C4F34");
             $("${tenRegionNameSelector}").attr("stroke", "#BBBDC0");    
        });
    });
</script>
</body>
</html>
`);
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
