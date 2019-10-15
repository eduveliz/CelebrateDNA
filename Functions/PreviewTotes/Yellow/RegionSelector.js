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


module.exports = ttSelector = async (regionNumber, id, properties) => {
    if (regionNumber === 1) {
        return region1(id, properties)
    }
    if (regionNumber === 2) {
        return region2(id, properties)
    }
    if (regionNumber === 3) {
        return region3(id, properties)
    }
    if (regionNumber === 4) {
        return region4(id, properties)
    }
    if (regionNumber === 5) {
        return region5(id, properties)
    }
    if (regionNumber === 6) {
        return region6(id, properties)
    }
    if (regionNumber === 7) {
        return region7(id, properties)
    }
    if (regionNumber === 8) {
        return region8(id, properties)
    }
    if (regionNumber === 9) {
        return region9(id, properties)
    }
    if (regionNumber === 10) {
        return region10(id, properties)
    }
};
