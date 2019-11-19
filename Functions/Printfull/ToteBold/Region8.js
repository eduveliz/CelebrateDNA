const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../ColorsBackground/BrightMap');
const regionNames = require('../../RegionNames/RegionNames');
const fontStyle = require('../../FontStyle/FontStyle');
const fontColor = require('../../FontColor/FontColor');
const companyMap = require('../../CompanyMap/CompanyMap');

module.exports = createPreview = async (nameFile, propiedades, orderInfo) => {
    const properties = toArray(propiedades);
    const name = nameFile;
    const map = companyMap(properties[0]);

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

    const backgroundColor = colorBackground(properties[17]);
    const font = fontStyle(properties[18]);
    const statement = properties[19];
    const personalStatementOne = statement === "Replicate the map on both sides" ? "" : properties[20];
    const personalStatementTwo = statement === "Replicate the map on both sides" ? "" : properties[21];
    const personalStatementThree = statement === "Replicate the map on both sides"
        ? "The image will be duplicated on both sides of tote."
        : properties[22];

    fontSizeRegion = (font) => {
        if (font === "Noteworthy") {
            return "16pt"
        }
        if (font === "MyriadPro-Bold") {
            return "16pt"
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
            return "16pt"
        }
        if (font === "MyriadPro-Bold") {
            return "18pt"
        }
        if (font === "Funnier") {
            return "14pt"
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
            return "120px"
        }
        if (font === "Funnier") {
            return "120px"
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

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1632,
        height: 3168,
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
    font-size: 20px;
    font-family:${font}; 
    text-align: center;
    color: ${fontColor(colorProduct)};       
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
    
    .fontColorHeadline {
        color:${fontColor(colorProduct)};
        font-family:${font} ;
        text-align: center; 
        font-size:${fontHeadline()};
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
    
    .fontColorNumber {
        font-family:${font};
        color: #FFFFFF;
        font-size: ${fontSizeNumber()};
        border: 2px solid #BBBDC0;
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
<body style="height:33in;width: 17in;background-color: black;align-items: center;text-align: center;justify-content: center">
<div style="width: 13in;height: 11in;margin-left: 2in;margin-top:${font === "Funnier" ? "3.2in" : "4in"};">

<div style="width: 100%;text-align: center;">
    ${map}
</div>

<div style="margin-top: 50px;margin-right: 20px">
    <div style="display: flex; justify-content: space-around;">
        <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px; background-color: #0a3542;align-items: center;text-align: center;display: flex;justify-content: center;">
        ${firstRegionNumber}%
        </div>
        <div class="fontColorNumber" style="height:38px; width:100%;  border-radius: 20px; background-color: #851f62;align-items: center;text-align: center;display: flex;justify-content: center;">
         ${secondRegionNumber}%
        </div>
        <div class="fontColorNumber" style="height:38px; width:100%;  border-radius: 20px; background-color: #68672b;align-items: center;text-align: center;display: flex;justify-content: center;">
        ${threeRegionNumber}%
        </div>
        <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px; background-color: #1b224e;align-items: center;text-align: center;display: flex;justify-content: center;">
         ${fourRegionNumber}%
        </div>
        <div class="fontColorNumber" style="height:38px; width:100%; border-radius: 20px;background-color: #096f8e;align-items: center;text-align: center;display: flex;justify-content: center;">
         ${fiveRegionNumber}%
        </div>
        <div class="fontColorNumber" style="height:38px; width:100%;  border-radius: 20px; background-color: #823d3e;align-items: center;text-align: center;display: flex;justify-content: center;">
         ${sixRegionNumber}%
        </div>
        <div class="fontColorNumber" style="height:38px; width:100%;  border-radius: 20px;background-color: #350f29;align-items: center;text-align: center;display: flex;justify-content: center;">
       ${sevenRegionNumber}%
        </div>
        <div class="fontColorNumber" style="height:38px; width:100%;  border-radius: 20px; background-color: #a4469a;align-items: center;text-align: center;display: flex;justify-content: center;">
      ${eightRegionNumber}%
        </div>
    </div>
    <div style="display: flex; justify-content: space-around;margin-top:${font === "Funnier" ? " 9pt" : "5pt"}">
        <div style="height:60px;width:100%;display: flex; justify-content: center">
            <div class="fontColor" >${firstRegionName}</div>
        </div>
        <div style="width:100%;height:60px; display: flex; justify-content: center">
            <div class="fontColor" >${secondRegionName}</div>
        </div>
        <div style=" width:100%;height:60px;display: flex; justify-content: center">
            <div class="fontColor" >${threeRegionName}</div>
        </div>
        <div style="width:100%; height:60px;display: flex; justify-content: center">
            <div class="fontColor">${fourRegionName}</div>
        </div>
        <div style="width:100%; height:60px;display: flex; justify-content: center">
            <div class="fontColor" >${fiveRegionName}</div>
        </div>
        <div style=" width:100%;height:60px;display: flex; justify-content: center">
            <div class="fontColor" >${sixRegionName}</div>
        </div>
        <div style="width:100%;height:60px;display: flex; justify-content: center">
            <div class="fontColor" >${sevenRegionName}</div>
        </div>
        <div style="width:100%;height:60px;display: flex; justify-content: center">
            <div class ="fontColor" >${eightRegionName}</div>
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
        });
    });
</script>
</body>
</html>
`);
    await page.screenshot({path: `public/${name}.png`});
    await browser.close();
};
