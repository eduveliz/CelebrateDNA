const donut10 = require('./Donut10');
// const helix2 = require('./Helix2');
// const helix3 = require('./Helix3');
// const helix4 = require('./Helix4');
// const helix5 = require('./Helix5');
// const helix6 = require('./Helix6');
// const helix7 = require('./Helix7');
// const helix8 = require('./Helix8');
// const helix9 = require('./Helix9');
// const helix10 = require('./Helix10');

module.exports = donutSelector = async (regionNumber, properties) => {
    if (regionNumber === 10) {
        return donut10(properties)
    }
    // if (regionNumber === 2) {
    //     return helix2(properties)
    // }
    // if (regionNumber === 3) {
    //     return helix3(properties)
    // }
    // if (regionNumber === 4) {
    //     return helix4(properties)
    // }
    // if (regionNumber === 5) {
    //     return helix5(properties)
    // }
    // if (regionNumber === 6) {
    //     return helix6(properties)
    // }
    // if (regionNumber === 7) {
    //     return helix7(properties)
    // }
    // if (regionNumber === 8) {
    //     return helix8(properties)
    // }
    // if (regionNumber === 9) {
    //     return helix9(properties)
    // }
    // if (regionNumber === 10) {
    //     return helix10(properties)
    // }
};
