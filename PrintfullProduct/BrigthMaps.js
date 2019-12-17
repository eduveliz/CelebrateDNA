const mapsPrintfullBright = require('./../Functions/Printfull/Maps/BrigthMaps/brigthPreviewSelector');
const setNumberMaps = require('./../Functions/RegionNumbers/setRegionNumberMaps');
const toArray = require('lodash.toarray');
const axios = require('axios');

module.exports = product = async (env, cantidad, req, nameFile, orderInfo) => {
    return await mapsPrintfullBright(setNumberMaps(toArray(cantidad).length), req, nameFile, orderInfo)
};


