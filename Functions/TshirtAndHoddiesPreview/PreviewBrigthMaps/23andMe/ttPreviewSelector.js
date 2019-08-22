const tt14 = require('./23andMePreview14');
const tt13 = require('./23andMePreview13');
const tt12 = require('./23andMePreview12');
const tt11 = require('./23andMePreview11');
const tt10 = require('./23andMePreview10');
const tt9 = require('./23andMePreview9');
const tt8 = require('./23andMePreview8');
const tt7 = require('./23andMePreview7');
const tt6 = require('./23andMePreview6');
const tt5 = require('./23andMePreview5');
const tt4 = require('./23andMePreview4');
const tt3 = require('./23andMePreview3');
const tt2 = require('./23andMePreview2');
const tt1 = require('./23andMePreview1');

module.exports = ttPreviewSelector = async (regionNumber, id, properties) => {
    if (regionNumber === 1) {
        return tt1(id, properties)
    }
    if (regionNumber === 2) {
        return tt2(id, properties)
    }
    if (regionNumber === 3) {
        return tt3(id, properties)
    }
    if (regionNumber === 4) {
        return tt4(id, properties)
    }
    if (regionNumber === 5) {
        return tt5(id, properties)
    }
    if (regionNumber === 6) {
        return tt6(id, properties)
    }
    if (regionNumber === 7) {
        return tt7(id, properties)
    }
    if (regionNumber === 8) {
        return tt8(id, properties)
    }
    if (regionNumber === 9) {
        return tt9(id, properties)
    }
    if (regionNumber === 10) {
        return tt10(id, properties)
    }
    if (regionNumber === 11) {
        return tt11(id, properties)
    }
    if (regionNumber === 12) {
        return tt12(id, properties)
    }
    if (regionNumber === 13) {
        return tt13(id, properties)
    }
    if (regionNumber === 14) {
        return tt14(id, properties)
    }
};
