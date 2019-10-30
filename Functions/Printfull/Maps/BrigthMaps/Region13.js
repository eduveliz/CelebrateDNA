const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../../ColorsBackground/BrightMap');
const regionNames = require('../../../RegionNames/RegionNames');
const fontStyle = require('../../../FontStyle/FontStyle');
const fontColor = require('../../../FontColor/FontColor');
const colorProductSelect = require('../../../Color/Color');
const ancestryMap = require('../../../MapsSVG/AncestryMap');
const ttMap = require('../../../MapsSVG/TTMap');
const myHeritageMap = require('../../../MapsSVG/MyHeritageMap');


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

    const tenRegionName = propiedades.regions[9].region;
    const tenRegionNameSelector = regionNames(propiedades.regions[9].region);
    const tenRegionNumber = propiedades.regions[9].porcentaje;

    const elevenRegionName = propiedades.regions[10].region;
    const elevenRegionNameSelector = regionNames(propiedades.regions[10].region);
    const elevenRegionNumber = propiedades.regions[10].porcentaje;

    const twelveRegionName = propiedades.regions[11].region;
    const twelveRegionNameSelector = regionNames(propiedades.regions[11].region);
    const twelveRegionNumber = propiedades.regions[11].porcentaje;

    const thirteenRegionName = propiedades.regions[12].region;
    const thirteenRegionNameSelector = regionNames(propiedades.regions[12].region);
    const thirteenRegionNumber = propiedades.regions[12].porcentaje;

    //Background Map
    const colorProduct = propiedades.colorProduct;
    const backgroundColor = colorBackground(propiedades.color);
    const backgroundLineWorld = backgroundColor === "transparent" ? fontColor(colorProduct) : "none";
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
            return myHeritageMap;
        }
    };
    const map = companyMap(propiedades.company);

    fontSizeRegion = (font) => {
        if (font === "Noteworthy") {
            return "15pt"
        }
        if (font === "MyriadPro-Bold") {
            return "15pt"
        }
        if (font === "Funnier") {
            return "11pt"
        }
        if (font === "Noteworhty Bold") {
            return "20pt"
        }
    };

    fontSizeNumber = () => {
        if (font === "Noteworthy") {
            return "30pt"
        }
        if (font === "MyriadPro-Bold") {
            return "30pt"
        }
        if (font === "Funnier") {
            return "18pt"
        }
        if (font === "Noteworhty Bold") {
            return "35pt"
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
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1152,
        height: 1536,
        deviceScaleFactor: 1,
    });

    await page.setContent(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>23andMe</title>
    <style>
    .fontColorNumber {
        color:${fontColor(colorProduct)};
        font-family:${font} ;
        font-size: ${fontSizeNumber()};
    }
    
    .fontColor {
        color:${fontColor(colorProduct)};
        font-family:${font};
        text-align: center;
        font-size: ${fontSizeRegion(font)};
    }
    
    
    .fontColorHeadline {
        color:${fontColor(colorProduct)};
        font-family:${font} ;
        text-align: center; 
        font-size:${fontHeadline()};
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
<body style="width:1152px;height:1536px;background-color: ${colorProductSelect(colorProduct)} ">
<h1 class='fontColorHeadline'>${headline}</h1>

<div style="width: 100%;text-align: center;">
    ${map}
</div>

<div style="display: flex; justify-content:space-around;width:98%;margin-top: 50px;margin-left: 35px;">
    <div id="firstGroup" style="width: 100%;">
        <div style="height:60px; width:100%;display: flex; justify-content: initial; ">
            <div class="fontColor" style="font-size: 25px;width: 50%;text-align: center;display: flex;justify-content: center;align-items: center ">${firstRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px;">
            <div class="fontColor" style="color:white;height:38px; width:100%; border-radius: 20px;background-color: #27A9E1;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
                ${firstRegionNumber}%
            </div>
            <div class="fontColor" style="color:white;height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #6C61AA;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
                ${secondRegionNumber}%
            </div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="width:50%;font-size: 25px;margin-bottom: 20px;text-align: center;display: flex;justify-content: center;align-items: center">${secondRegionName}</div>
        </div>
    </div>

       <div id="secondGroup" style="width: 100%;">
        <div style="height:60px; width:100%;display: flex; justify-content: initial; ">
            <div class="fontColor" style="font-size: 25px;width: 50%;text-align: center;display: flex;justify-content: center;align-items: center ">${secondRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px;">
            <div class="fontColor" style="color:white;height:38px; width:100%; border-radius: 20px;background-color: #BE1E2D;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
                ${threeRegionNumber}%
            </div>
            <div class="fontColor" style="color:white;height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #F9AF41;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
                 ${fourRegionNumber}%
            </div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="width:50%;font-size: 25px;margin-bottom: 20px;text-align: center;display: flex;justify-content: center;align-items: center">${threeRegionName}</div>
        </div>
    </div>
     
   <div id="secondGroup" style="width: 100%;">
        <div style="height:60px; width:100%;display: flex; justify-content: initial; ">
            <div class="fontColor" style="font-size: 25px;width: 50%;text-align: center;display: flex;justify-content: center;align-items: center ">${fiveRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px;">
            <div class="fontColor" style="color:white;height:38px; width:100%; border-radius: 20px;background-color: #00833D;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
                 ${fiveRegionNumber}%
            </div>
            <div class="fontColor" style="color:white;height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #9794D2;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
                  ${sixRegionNumber}%
            </div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="width:50%;font-size: 25px;margin-bottom: 20px;text-align: center;display: flex;justify-content: center;align-items: center">${sixRegionName}</div>
        </div>
    </div>

    <div id="fourGroup" style="width: 100% ; ">
        <div style="height:60px; width:100%;display: flex; justify-content: initial; ">
            <div class="fontColor" style="font-size: 25px;width: 50%;text-align: center;display: flex;justify-content: center;align-items: center ">${sevenRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px; ">
            <div  class="fontColor" style="color:white;height:38px; width:100%; border-radius: 20px;background-color: #699279;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
                ${sevenRegionNumber}%
            </div>
            <div  class="fontColor" style="color:white;height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #A4469A;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
                ${eightRegionNumber}%
            </div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="font-size: 25px; width: 50%;text-align: center;display: flex;justify-content: center;align-items: center">${eightRegionName}</div>
        </div>
    </div>

    <div id="fiveGroup" style="width: 100%; ">
        <div style="height:60px; width:100%;display: flex; justify-content: initial; ">
            <div class="fontColor" style="font-size: 25px;text-align: center;width: 50%;display: flex;justify-content: center;align-items: center ">${nineRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px; ">
            <div class="fontColor" style="color:white;height:38px; width:100%; border-radius: 20px;background-color: #CB8DBE;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
                ${nineRegionNumber}%
            </div>
            <div  class="fontColor" style="color:white;height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #58A7B1;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
                ${tenRegionNumber}%
            </div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="font-size: 25px;width: 50%;text-align: center;display: flex;justify-content: center;align-items: center">${tenRegionName}</div>
        </div>
    </div>

    <div id="sixGroup" style="width: 100%; ">
        <div style="height:60px; width:100%;display: flex; justify-content: initial; ">
            <div class="fontColor" style="font-size: 25px;text-align: center;width: 50%;display: flex;justify-content: center;align-items: center ">${nineRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="display: flex; justify-content: space-around;height: 80px; ">
            <div class="fontColor" style="color:white;height:38px; width:100%; border-radius: 20px;background-color: #98985F;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
                ${elevenRegionNumber}%
            </div>
            <div  class="fontColor" style="color:white;height:38px;width: 100%; border-radius: 20px;margin-top: 32px; background-color: #EC008B;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
                ${twelveRegionNumber}%
            </div>
        </div>
        <div style="height:60px; width:100%;display: flex; justify-content: flex-end;">
            <div style="width: 50%"></div>
            <div class="fontColor" style="font-size: 25px;width: 50%;text-align: center;display: flex;justify-content: center;align-items: center">${twelveRegionName}</div>
        </div>
    </div>
    <div id="sevenGroup" style="width: 100% ;">
        <div style="height:60px; width:100%;display: flex; justify-content: initial; ">
            <div class="fontColor" style="font-size: 25px;width: 50%; text-align: center;display: flex;justify-content: center;align-items: center">${thirteenRegionName}</div>
            <div style="width: 50%"></div>
        </div>
        <div style="height: 80px; ">
            <div class="fontColor" style="color:white;height:38px; width:50%; border-radius: 20px;background-color: #52C4D2;align-items: center;text-align: center;display: flex;justify-content: center;font-size: 30px;">
                ${thirteenRegionNumber}%
            </div>
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
            $("${eightRegionNameSelector}").attr("fill", "#A4469A");
            //five color
            $("${nineRegionNameSelector}").attr("fill", "#CB8DBE");
            $("${tenRegionNameSelector}").attr("fill", "#58A7B1");
            //six color
            $("${elevenRegionNameSelector}").attr("fill", "#98985F");
            $("${twelveRegionNameSelector}").attr("fill", "#EC008B");
            //seven color
            $("${thirteenRegionNameSelector}").attr("fill", "#52C4D2").attr("stroke-width", "2");
        });
    });
</script>
</body>
</html>
`);
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
