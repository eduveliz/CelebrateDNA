const YellowPrintfullSelector = require('./../Functions/Printfull/ToteYellowRed/RegionSelector');
const setNumberMaps = require('../Functions/RegionNumbers/setRegionNumberTotes');
const toArray = require('lodash.toarray');
const axios = require('axios');

module.exports = product = async (env, cantidad, req, nameFile, orderInfo) => {
    return await YellowPrintfullSelector(setNumberMaps(toArray(cantidad).length), nameFile, req, orderInfo)
};
