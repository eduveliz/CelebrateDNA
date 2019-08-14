const puppeteer = require('puppeteer');
const path = require('path');
const toArray = require('lodash.toarray');


module.exports = createPreview = async (nameFile, propiedades) => {

    const properties = propiedades[0].properties;
    const generalData = toArray(properties);
    console.log(generalData);

    const company = generalData[0];
    // const region number

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1152,
        height: 1536,
        deviceScaleFactor: 1,
    });

    await page.setContent(`<html>
<body>
<h1>${generalData[4]} - ${generalData[5]}</h1>
<div>Numero:${nameFile}</div>
<hr/> 
<div>region :  ${generalData[1]}</div>
<p>
<div>region :  ${generalData[2]}</div>
</p>
<p>
<div>color background :  ${generalData[3]}</div>
<div>font style :  ${generalData[6]}</div>
</p>
</body>
</html>`);
    //  fs.mkdirSync(ubicacion); create directories
    await page.screenshot({path: `previews//${nameFile}.png`});
    await browser.close();
};
