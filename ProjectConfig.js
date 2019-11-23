const printfullSelected = require('./PrintfullProduct/PrintFullSelected.js');

module.exports = env = (config, req) => {
    const {line_items, shipping_address} = req.body;
    line_items.map(async order => {
        const orderInfo = order;
        const itemsNumber = order.properties;
        const nameFile = Date.now();
        const id = order.product_id.toString();
        const sku = order.sku;  // line_items[0].title.split('- ')[1] === "11oz" ? "1320" : "4830";

        const env = {
            name: config === "dev" ? "EduardoTest" : shipping_address.first_name,
            address1: config === "dev" ? "19749 Dearborn St" : shipping_address.address1,
            city: config === "dev" ? "Chatsworth" : shipping_address.city,
            stateCode: config === "dev" ? "CA" : shipping_address.province_code,
            countryCode: config === "dev" ? "US" : shipping_address.country_code,
            zip: config === "dev" ? "91311" : shipping_address.zip,
            sku: sku,
            host: config === "dev" ? "https://www.moolab.ml/" : "https://www.moolab.ml/",
        };

        // console.log(order.properties);
        await printfullSelected(id, env, itemsNumber, order.properties, nameFile, orderInfo)
    });
};
