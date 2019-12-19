const loveSelectorPrintfull = require('./../Functions/Printfull/HelixILoveMyDNA/LoveSelector');
const setNumberMaps = require('../Functions/RegionNumbers/setRegionNumberLove');
const toArray = require('lodash.toarray');
const axios = require('axios');

module.exports = product = async (env, cantidad, req, nameFile, orderInfo) => {
    return await loveSelectorPrintfull(setNumberMaps(toArray(cantidad).length), req, nameFile, orderInfo)
};

