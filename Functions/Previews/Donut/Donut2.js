const puppeteer = require('puppeteer');
const toArray = require('lodash.toarray');
const colorBackground = require('../../ColorsBackground/BrightMap');
const fontStyle = require('../../FontStyle/FontStyle');
const fontColor = require('../../FontStyle/FontStyle');
const colorProductSelect = require('../../Color/Color');

module.exports = createPreview = async (propiedades) => {
    const name = propiedades.nameFile;
    const firstRegionName = propiedades.regions[0].region;
    const firstRegionNumber = propiedades.regions[0].porcentaje;

    const secondRegionName = propiedades.regions[1].region;
    const secondRegionNumber = propiedades.regions[1].porcentaje;

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
    $(function () {
       let data = [
            {"Region": "${firstRegionName}", "Porcentaje": ${firstRegionNumber}},
            {"Region": "${secondRegionName}", "Porcentaje": ${secondRegionNumber}},
        ];
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
