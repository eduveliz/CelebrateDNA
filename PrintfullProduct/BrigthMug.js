const mapsPrintfullBright = require('./../Functions/Printfull/MapsMug/BrigthMaps/ttPreviewSelector');
const setNumberMaps = require('./../Functions/RegionNumbers/setRegionNumberMug');
const toArray = require('lodash.toarray');

module.exports = product = async (env, cantidad, req, nameFile, orderInfo) => {
    return await mapsPrintfullBright(setNumberMaps(toArray(cantidad).length), req, nameFile, orderInfo)
};


