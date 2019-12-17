const helixSelectorPrintFull = require('./../Functions/Printfull/Helix/HelixSelector');
const setNumber = require('./../Functions/RegionNumbers/setRegionNumberHelix');
const toArray = require('lodash.toarray');
const axios = require('axios');

module.exports = product = async (env, cantidad, req, nameFile, orderInfo) => {
    return await helixSelectorPrintFull(setNumber(toArray(cantidad).length), req, nameFile, orderInfo)
};
