const donut1 = require('./Donut1');
const donut2 = require('./Donut2');
const donut3 = require('./Donut3');
const donut4 = require('./Donut4');
const donut5 = require('./Donut5');
const donut6 = require('./Donut6');
const donut7 = require('./Donut7');
const donut8 = require('./Donut8');
const donut9 = require('./Donut9');
const donut10 = require('./Donut10');

module.exports = donutSelector = async (regionNumber, properties) => {
    if (regionNumber === 1) {
        return donut1(properties)
    }
    if (regionNumber === 2) {
        return donut2(properties)
    }
    if (regionNumber === 3) {
        return donut3(properties)
    }
    if (regionNumber === 4) {
        return donut4(properties)
    }
    if (regionNumber === 5) {
        return donut5(properties)
    }
    if (regionNumber === 6) {
        return donut6(properties)
    }
    if (regionNumber === 7) {
        return donut7(properties)
    }
    if (regionNumber === 8) {
        return donut8(properties)
    }
    if (regionNumber === 9) {
        return donut9(properties)
    }
    if (regionNumber === 10) {
        return donut10(properties)
    }
};
