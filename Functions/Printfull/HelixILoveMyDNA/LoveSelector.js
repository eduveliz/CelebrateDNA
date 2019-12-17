const love1 = require('./Love1');
const love2 = require('./Love2');
const love3 = require('./Love3');
const love4 = require('./Love4');
const love5 = require('./Love5');
const love6 = require('./Love6');
const love7 = require('./Love7');
const love8 = require('./Love8');
const love9 = require('./Love9');
const love10 = require('./Love10');

module.exports = loveMyDNA = async (regionNumber, properties, nameFile, orderInfo) => {

    console.log(regionNumber);

    if (regionNumber === 1) {
        return love1(nameFile, properties, orderInfo)
    }
    if (regionNumber === 2) {
        return love2(nameFile, properties, orderInfo)
    }
    if (regionNumber === 3) {
        return love3(nameFile, properties, orderInfo)
    }
    if (regionNumber === 4) {
        return love4(nameFile, properties, orderInfo)
    }
    if (regionNumber === 5) {
        return love5(nameFile, properties, orderInfo)
    }
    if (regionNumber === 6) {
        return love6(nameFile, properties, orderInfo)
    }
    if (regionNumber === 7) {
        return love7(nameFile, properties, orderInfo)
    }
    if (regionNumber === 8) {
        return love8(nameFile, properties, orderInfo)
    }
    if (regionNumber === 9) {
        return love9(nameFile, properties, orderInfo)
    }
    if (regionNumber === 10) {
        return love10(nameFile, properties, orderInfo)
    }
};
