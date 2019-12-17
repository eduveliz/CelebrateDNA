const boldPrintfullSelector = require('./../Functions/Printfull/ToteBold/RegionSelector');
const setNumberMaps = require('../Functions/RegionNumbers/setRegionNumberTotesBold');
const toArray = require('lodash.toarray');

module.exports = product = async (env, cantidad, req, nameFile, orderInfo) => {
    return await boldPrintfullSelector(setNumberMaps(toArray(cantidad).length), nameFile, req, orderInfo)
};
