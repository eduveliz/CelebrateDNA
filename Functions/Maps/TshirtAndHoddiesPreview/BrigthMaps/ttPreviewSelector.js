const region14 = require('./Region14');
const region13 = require('./Region13');
const region12 = require('./Region12');
const region11 = require('./Region11');
const region10 = require('./Region10');
const region9 = require('./Region9');
const region8 = require('./Region8');
const region7 = require('./Region7');
const region6 = require('./Region6');
const region5 = require('./Region5');
const region4 = require('./Region4');
const region3 = require('./Region3');
const region2 = require('./Region2');
const region1 = require('./Region1');

module.exports = ttPreviewSelector = async (regionNumber, properties) => {
    if (regionNumber === 1) {
        return region1(properties)
    }
    if (regionNumber === 2) {
        return region2(properties)
    }
    if (regionNumber === 3) {
        return region3(properties)
    }
    if (regionNumber === 4) {
        return region4(properties)
    }
    if (regionNumber === 5) {
        return region5(properties)
    }
    if (regionNumber === 6) {
        return region6(properties)
    }
    if (regionNumber === 7) {
        return region7(properties)
    }
    if (regionNumber === 8) {
        return region8(properties)
    }
    if (regionNumber === 9) {
        return region9(properties)
    }
    if (regionNumber === 10) {
        return region10(properties)
    }
    if (regionNumber === 11) {
        return region11(properties)
    }
    if (regionNumber === 12) {
        return region12(properties)
    }
    if (regionNumber === 13) {
        return region13(properties)
    }
    if (regionNumber === 14) {
        return region14(properties)
    }
};
