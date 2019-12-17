const region7 = require('./Region7');
const region6 = require('./Region6');
const region5 = require('./Region5');
const region4 = require('./Region4');
const region3 = require('./Region3');
const region2 = require('./Region2');

module.exports = helixSelector = async (regionNumber, properties, nameFile, orderInfo) => {
    if (regionNumber === 2) {
        return await region2(nameFile, properties, orderInfo)
    }
    if (regionNumber === 3) {
        return await region3(nameFile, properties, orderInfo)
    }
    if (regionNumber === 4) {
        return await region4(nameFile, properties, orderInfo)
    }
    if (regionNumber === 5) {
        return region5(nameFile, properties, orderInfo)
    }
    if (regionNumber === 6) {
        return region6(nameFile, properties, orderInfo)
    }
    if (regionNumber === 7) {
        return region7(nameFile, properties, orderInfo)
    }
};
