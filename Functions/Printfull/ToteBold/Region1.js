const puppeteer = require('puppeteer');
const colorBackground = require('../../ColorsBackground/BrightMap');
const regionNames = require('../../RegionNames/RegionNames');
const fontStyle = require('../../FontStyle/FontStyle');
const fontColor = require('../../FontColor/FontColor');
const companyMap = require('../../CompanyMap/CompanyMap');
const toArray = require('lodash.toarray');

module.exports = createPreview = async (nameFile, propiedades) => {
    const properties = toArray(propiedades.line_items[0].properties);
    const name = nameFile;
    const map = companyMap(properties[0]);
    const firstRegionName = properties[1];
    const firstRegionNameSelector = regionNames(properties[1]);
    const firstRegionNumber = properties[2];
    //Background Map
    const backgroundColor = colorBackground(properties[3]);
    const font = fontStyle(properties[4]);
    const statement = properties[5];
    const personalStatementOne = statement === "Replicate the map on both sides" ? "" : properties[6];
    const personalStatementTwo = statement === "Replicate the map on both sides" ? "" : properties[7];
    const personalStatementThree = statement === "Replicate the map on both sides"
        ? "The image will be duplicated on both sides of tote."
        : properties[8];

    fontSizeNumber = () => {
        if (font === "Noteworthy") {
            return "35pt"
        }
        if (font === "MyriadPro-Bold") {
            return "35pt"
        }
        if (font === "Funnier") {
            return "30pt"
        }
        if (font === "Noteworhty Bold") {
            return "35pt"
        }
    };

    fontSizeRegion = (font) => {
        if (font === "Noteworthy") {
            return "40pt"
        }
        if (font === "MyriadPro-Bold") {
            return "40pt"
        }
        if (font === "Funnier") {
            return "30pt"
        }
        if (font === "Noteworhty Bold") {
            return "40pt"
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
        border: 2px solid #BBBDC0;
        font-size: ${fontSizeNumber()};  
    }
    
    .fontColorHeadline {
        color:${fontColor(colorProduct)};
        font-family:${font} ;
        text-align: center; 
        font-size:${fontHeadline()};
    }
    
   .fontColorNumber {
        color: #FFFFFF;
        font-size: ${fontSizeNumber()};
        border: 2px solid #BBBDC0;
        font-family:${font};
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
 <body style="height:33in;width: 17in;align-items: center;text-align: center;justify-content: center">
 
<div style="width: 13in;height: 11in;margin-left: 2in;margin-top:${font === "Funnier" ? "3.2in" : "4in"};">  
<div style="text-align: center;">
    ${map}
</div>
        <div style="margin-top: 50px;margin-right: 20px">
            <div style="display: flex; justify-content: space-around;">
                <div class="fontColorNumber" style="height:60px; width:100%;border-radius: 20px; background-color: #0a3542;align-items: center;text-align: center;display: flex;justify-content: center;">
                    ${firstRegionNumber}%
                </div>
            </div>
             <div style="display: flex; justify-content: space-around;margin-top:${font === "Funnier" ? " 9pt" : "0"}">
                <div style="width:100%;height:60px;display: flex; justify-content: center">
                    <div class="fontColor">${firstRegionName}</div>
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
            //Primary color
            $("${firstRegionNameSelector}").attr("fill", "#0A3542");
            $("${firstRegionNameSelector}").attr("stroke", "#BBBDC0");
          });
    });
</script>
</body>
</html>
`);

    await page.setViewport({
        width: 1632,
        height: 3168,
        deviceScaleFactor: 3,
    });
    await page.screenshot({path: `public/${name}.png`});
    await browser.close();
};
