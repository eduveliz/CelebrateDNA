const helixVerticalSelectorPrintFull = require('./../Functions/Printfull/HelixVertical/HelixVerticalSelector');
const setNumber = require('./../Functions/RegionNumbers/setRegionNumberHelixVertical');
const toArray = require('lodash.toarray');
const axios = require('axios');

module.exports = product = async (env, cantidad, req, nameFile, orderInfo) => {
    return await helixVerticalSelectorPrintFull(setNumber(toArray(cantidad).length), req, nameFile, orderInfo);
};
