const mapsPrintfullEarth = require('./../Functions/Printfull/Maps/Earth Tone/earthPreviewSelector');
const setNumberMaps = require('./../Functions/RegionNumbers/setRegionNumberMaps');
const toArray = require('lodash.toarray');
const axios = require('axios');

module.exports = product = async (env, cantidad, req, nameFile, orderInfo) => {
    return await mapsPrintfullEarth(setNumberMaps(toArray(cantidad).length), req, nameFile, orderInfo);
};

