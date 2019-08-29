const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../Functions/ColorsBackground/BrightMap');
const fontStyle = require('../../Functions/FontStyle/FontStyle');
const fontColor = require('../../Functions/FontStyle/FontStyle');
const colorProductSelect = require('../../Functions/Color/Color');

module.exports = createPreview = async (propiedades) => {
    const name = propiedades.nameFile;
    const firstRegionName = propiedades.regions[0].region;
    const firstRegionNumber = propiedades.regions[0].porcentaje;

    const secondRegionName = propiedades.regions[1].region;
    const secondRegionNumber = propiedades.regions[1].porcentaje;

    const threeRegionName = propiedades.regions[2].region;
    const threeRegionNumber = propiedades.regions[2].porcentaje;

    const fourRegionName = propiedades.regions[3].region;
    const fourRegionNumber = propiedades.regions[3].porcentaje;

    const fiveRegionName = propiedades.regions[4].region;
    const fiveRegionNumber = propiedades.regions[4].porcentaje;

    //Background Map
    const colorProduct = propiedades.colorProduct;
    //Headline

    const headline = propiedades.headLine === "Personalized headline" ? propiedades.personalHeadline : propiedades.headLine;

    //FontSize
    const font = fontStyle(propiedades.fontStyle);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(`<!DOCTYPE html>
<html>
<head>
    <title></title>
    <!-- Ignite UI Required Combined CSS Files -->
    <link href="http://cdn-na.infragistics.com/igniteui/2019.1/latest/css/themes/infragistics/infragistics.theme.css"
          rel="stylesheet"/>
    <link href="http://cdn-na.infragistics.com/igniteui/2019.1/latest/css/structure/infragistics.css" rel="stylesheet"/>

    <script src="http://ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.8.3.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="http://code.jquery.com/ui/1.11.1/jquery-ui.min.js"></script>

    <!-- Ignite UI Required Combined JavaScript Files -->
    <script src="http://cdn-na.infragistics.com/igniteui/2019.1/latest/js/infragistics.core.js"></script>
    <script src="http://cdn-na.infragistics.com/igniteui/2019.1/latest/js/infragistics.dv.js"></script>

</head>

<style>
    .donutContainer {
        display: flex;
        justify-content: center;
    }
    .donut {
        background-color: transparent;
        font-size: 20pt;
        color: white;
        width: 100%;
        font-family: "Bangla MN";
    }

    .headline {
        color: white;
        font-size: 32pt;
        display: flex;
        justify-content: center;
        z-index: 1;
        position: relative;
        align-items: center;
        text-align: center;
        top: 538px;
    }

</style>

<body style="width: 12in;height:16in;background-color: black;">
<div class="headline">${headline}</div>

<div class="donutContainer">
    <div class="donut" id="chart"></div>
</div>


<script>
function reorderData(data){
        var total = 0.0;
        var orderedNumbers = [];
        var greaterMin25;

        for(var i= 0; i < data.length; i++){
            total += data[i].Porcentaje;
        }
        for(var i= 0; i < data.length; i++){
            data[i].RelativeP = data[i].Porcentaje / total;
        }
        for(var i= 0; i < data.length; i++){
            if(data[i].RelativeP < 0.25){
                if(greaterMin25 !== undefined){
                    if(data[i].RelativeP > greaterMin25.RelativeP){
                        greaterMin25 = data[i];
                    }
                }else{
                    greaterMin25 = data[i];
                }
            }
        }
        orderedNumbers = data.sort((a, b) => a.Porcentaje - b.Porcentaje);

        const rIndex = orderedNumbers.findIndex(x => (x.Region === greaterMin25.Region && x.Porcentaje === greaterMin25.Porcentaje));
        if (rIndex !== undefined) orderedNumbers.splice(rIndex, 1);
        orderedNumbers.unshift(greaterMin25);

        return orderedNumbers;
    }

    $(function () {
       let data = [
            {"Region": "${firstRegionName}", "Porcentaje": ${firstRegionNumber}},
            {"Region": "${secondRegionName}", "Porcentaje": ${secondRegionNumber}},
            {"Region": "${threeRegionName}", "Porcentaje": ${threeRegionNumber}},
            {"Region": "${fourRegionName}", "Porcentaje": ${fourRegionNumber}},
            {"Region": "${fiveRegionName}", "Porcentaje": ${fiveRegionNumber}},
        ];
       
       data  = reorderData(data);
        let chartColours = [
             "#58585A",
             "#818285", 
             "#BDBEC0", 
             "#939598",
             "#3A3A3B",
             "#616265",
             "#898A8D",
             "#D3D3D3",
             "#BDBEC0",
             "#818285"];

        $("#chart").igDoughnutChart({
            width: "100%",
            height: "11in",
            series:
                [{
                    name: "Donut",
                    labelMemberPath: "Region",
                    valueMemberPath: "Porcentaje",
                    dataSource: data,
                    othersCategoryThreshold: 0,
                    brushes: chartColours,
                    labelsPosition: "bestFit",
                    formatLabel: function (context) {
                        return context.itemLabel + " " + context.item.Porcentaje + "%";
                    }
                }]
        });
    });
</script>

</body>
</html>`);

    await page.setViewport({
        width: 1152,
        height: 1536,
        deviceScaleFactor: 1,
    });
    await page.screenshot({path: `previews/${name}.png`});
    await browser.close();
};
