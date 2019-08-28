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

    const sixRegionName = propiedades.regions[5].region;
    const sixRegionNumber = propiedades.regions[5].porcentaje;

    const sevenRegionName = propiedades.regions[6].region;
    const sevenRegionNumber = propiedades.regions[6].porcentaje;

    const eightRegionName = propiedades.regions[7].region;
    const eightRegionNumber = propiedades.regions[7].porcentaje;

    const nineRegionName = propiedades.regions[8].region;
    const nineRegionNumber = propiedades.regions[8].porcentaje;

    const tenRegionName = propiedades.regions[9].region;
    const tenRegionNumber = propiedades.regions[9].porcentaje;

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
        font-size: 30pt;
    }

    .headline {
        color: white;
        font-size: 50pt;
        display: flex;
        justify-content: center;
        z-index: 1;
        position: relative;
        align-items: center;
        text-align: center;
        top: 561px;
    }

</style>

<body style="width: 12in;height:16in;background-color: black;border: solid 1px white">
<div class="headline">${headline}</div>

<div class="donutContainer">
    <div class="donut" id="chart"></div>
</div>


<script>
    $(function () {
       let data = [
            {"Region": "${firstRegionName}", "Porcentaje": ${firstRegionNumber}},
            {"Region": "${sevenRegionName}", "Porcentaje": ${secondRegionNumber}},
            {"Region": "${threeRegionName}", "Porcentaje": ${threeRegionNumber}},
            {"Region": "${fourRegionName}", "Porcentaje": ${fourRegionNumber}},
            {"Region": "${fiveRegionName}", "Porcentaje": ${fiveRegionNumber}},
            {"Region": "${sixRegionName}", "Porcentaje": ${sixRegionNumber}},
            {"Region": "${sevenRegionName}", "Porcentaje": ${sevenRegionNumber}},
            {"Region": "${eightRegionName}", "Porcentaje": ${eightRegionNumber}},
            {"Region": "${nineRegionName}", "Porcentaje": ${nineRegionNumber}},
            {"Region": "${tenRegionName}", "Porcentaje": ${tenRegionNumber}},
        ];
        let chartColours = ["#58585A", "#818285", "#BDBEC0", "#939598", "#3A3A3B", "#616265", "#898A8D", "#E7E8E9", "#BDBEC0", "#818285"];

        $("#chart").igDoughnutChart({
            width: "11in",
            height: "11in",
            series:
                [{
                    name: "Donut",
                    labelMemberPath: "Region",
                    valueMemberPath: "Porcentaje",
                    dataSource: data,
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
