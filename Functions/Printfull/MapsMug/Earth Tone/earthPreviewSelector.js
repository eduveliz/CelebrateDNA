const region7 = require('./Region7');
const region6 = require('./Region6');
const region5 = require('./Region5');
const region4 = require('./Region4');
const region3 = require('./Region3');
const region2 = require('./Region2');

module.exports = ttPreviewSelector = async (regionNumber, properties) => {
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
};
