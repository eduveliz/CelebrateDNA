const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../ColorsBackground/BrightMap');
const regionNames = require('../../RegionNames/RegionNamesClass');
const fontStyle = require('../../FontStyle/FontStyle');
const fontColor = require('../../FontColor/FontColor');
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
    const fiveRegionNameSelector = regionNames(properties[9]);
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

    const tenRegionName = properties[19].value;
    const tenRegionNameSelector = regionNames(properties[19].value);
    const tenRegionNumber = properties[20].value;

    const backgroundColor = colorBackground(properties[21].value);
    const font = fontStyle(properties[22].value);
    const statement = properties[23].value;
    const personalStatementOne = statement === "Replicate the map on both sides" ? "" : properties[24].value;
    const personalStatementTwo = statement === "Replicate the map on both sides" ? "" : properties[25].value;
    const personalStatementThree = statement === "Replicate the map on both sides"
        ? "The image will be duplicated on both sides of tote."
        : properties[26].value;


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

    bottomStatementMap = () => {
        if (font === "MyriadPro-Bold") {
            return "2in";
        }
        if (font === "Funnier") {
            return "2in";
        }
        if (font === "Noteworthy") {
            return "2in";
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
    
    .secondMap {
        align-items: center;
        text-align: center;
        justify-content: center;
        transform: rotate(180deg);
        margin-top:${bottomStatementMap()};
        display: ${statement === "Replicate the map on both sides" ? '' : 'none'};
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
<body style="height:33in;width: 17in;align-items: center;text-align: center;justify-content: center;background-color: black">
<div style="width: 13in;height: 11in;margin-left: 1.9in;margin-top:${font === "Funnier" ? "3.2in" : "4in"};">  
<div style="width: 100%;text-align: center;">
    ${map}
</div>

<div style="display: flex; justify-content:space-between;width:98%;margin-top: 60px;padding: 5px">
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
</div>


<div class="secondMap">
<div style="width: 13in;height: 11in;margin-left: 1.9in;margin-top:${font === "Funnier" ? "3.2in" : "3.2in"};">  
<div style="width: 100%;text-align: center;">
    ${map}
</div>

<div style="display: flex; justify-content:space-between;width:98%;margin-top: 60px;padding: 5px">
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
</div>
</div>

<div class="secondPart">  
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
            $(".worldMap").attr("fill", "${backgroundColor}").attr("stroke","#BBBDC0");
              $("#regions").attr("fill", "transparent");
                $(".regions").attr("fill", "transparent");
            
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
`, {waitUntil: 'load', timeout: 0})
    } catch (e) {
        console.log(e);
    }


    ;
    await page.screenshot({path: `public/${name}.png`});
    await browser.close();
};
