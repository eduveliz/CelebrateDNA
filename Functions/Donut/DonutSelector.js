const donut1 = require('./Donut1');
const donut2 = require('./donut2');
const donut3 = require('./donut3');
const donut4 = require('./donut4');
const donut5 = require('./donut5');
const donut6 = require('./donut6');
const donut7 = require('./donut7');
const donut8 = require('./donut8');
const donut9 = require('./donut9');
const donut10 = require('./donut10');

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
