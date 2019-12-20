const printfullSelected = require('./PrintfullProduct/PrintFullSelected.js');
const axios = require('axios');

module.exports = env = async (config, req) => {
    const {line_items, shipping_address} = req.body;
    const env = config === "prod" ? "https://a654362a.ngrok.io/" : "https://www.moolab.ml/";

    createItems = () => {
        try {
            let order = [];
            line_items.map(async (orderInfo, index) => {
                let itemsNumber = orderInfo.properties;
                const nameFile = Date.now() + "z" + index;
                const id = orderInfo.product_id.toString();
                const link = printfullSelected(id, env, itemsNumber, orderInfo.properties, nameFile, orderInfo);
                link.then(data => {
                    order.push({
                        "variant_id": orderInfo.sku,
                        "quantity": orderInfo.quantity,
                        "files": [{"url": data.toString()}]
                    });
                });
            });
            return order
        } catch (e) {
            console.log(e);
        }
    };


    const order = await createItems();

    sendOrder = () => {
        console.log("send");
        return setTimeout(() => {
            return axios.post('https://api.printful.com/orders', {
                    "recipient": {
                        "name": shipping_address.name.toString(),
                        "address1": shipping_address.address1.toString(),
                        "city": shipping_address.city.toString(),
                        "state_code": shipping_address.province_code.toString(),
                        "country_code": shipping_address.country_code.toString(),
                        "zip": shipping_address.zip.toString(),
                    },
                    "items": order
                },
                {
                    headers: {Authorization: "Basic b3JrY3VkYm8tcXVqcS0wYzBzOnM4ZWItbW1iZzN5ajRzNjNj"}
                }).then(() => {
                console.log("order".random, JSON.stringify(order));
                console.log("Order Complete!")
            }).catch(reason => console.log("Error" + reason));
        }, 20000)
    };

    return setTimeout(() => sendOrder(), 20000)
};


