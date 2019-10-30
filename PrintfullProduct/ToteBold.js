const boldPrintfullSelector = require('./../Functions/Printfull/ToteBold/RegionSelector');
const setNumberMaps = require('../Functions/RegionNumbers/setRegionNumberTotesBold');
const toArray = require('lodash.toarray');
const axios = require('axios');

module.exports = product = (env, cantidad, req, nameFile) => {
    boldPrintfullSelector(setNumberMaps(toArray(cantidad).length), nameFile, req.body).then(() => {
        return axios.post('https://api.printful.com/orders', {
                "recipient": {
                    "name": env.name,
                    "address1": env.address1,
                    "city": env.city,
                    "state_code": env.stateCode,
                    "country_code": env.countryCode,
                    "zip": env.zip
                },
                "items": [{
                    "variant_id": env.sku,
                    "quantity": 1,
                    "files": [{
                        "url": env.host + nameFile + ".png"
                    }]
                }]
            },
            {
                headers: {Authorization: "Basic b3JrY3VkYm8tcXVqcS0wYzBzOnM4ZWItbW1iZzN5ajRzNjNj"}
            }
        ).catch(reason => console.log("Error" + reason));
    });
};
