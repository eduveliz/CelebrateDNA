const printfullSelected = require('./PrintfullProduct/PrintFullSelected.js');

module.exports = env = (config, req) => {
    const {line_items, shipping_address} = req.body;
    const itemsNumber = line_items[0].properties;

    const nameFile = Date.now();
    const sku = line_items[0].sku;
    const id = line_items[0].product_id.toString();

    const env = {
        name: config === "dev" ? "EduardoTest" : shipping_address.first_name,
        address1: config === "dev" ? "19749 Dearborn St" : shipping_address.address1,
        city: config === "dev" ? "Chatsworth" : shipping_address.city,
        stateCode: config === "dev" ? "CA" : shipping_address.province_code,
        countryCode: config === "dev" ? "US" : shipping_address.country_code,
        zip: config === "dev" ? "91311" : shipping_address.zip,
        sku: sku,
        host: config === "dev" ? "https://7d2e32f1.ngrok.io/" : "https://moolab.ml/",
    };

    // const prod = {
    //     name: shipping_address.first_name,
    //     address1: shipping_address.address1,
    //     city: shipping_address.city,
    //     stateCode: shipping_address.province_code,
    //     countryCode: shipping_address.country_code,
    //     zip: shipping_address.zip,
    //     sku: sku,
    //     host: "https://moolab.ml/",
    // };

    return printfullSelected(id, env, itemsNumber, req, nameFile);
};
