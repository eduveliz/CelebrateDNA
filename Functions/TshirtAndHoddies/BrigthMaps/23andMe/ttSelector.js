const tt14 = require('./23andMe14');
const tt13 = require('./23andMe13');
const tt12 = require('./23andMe12');
const tt11 = require('./23andMe11');
const tt10 = require('./23andMe10');
const tt9 = require('./23andMe9');
const tt8 = require('./23andMe8');
const tt7 = require('./23andMe7');
const tt6 = require('./23andMe6');
const tt5 = require('./23andMe5');
const tt4 = require('./23andMe4');
const tt3 = require('./23andMe3');
const tt2 = require('./23andMe2');
const tt1 = require('./23andMe1');

module.exports = ttSelector = async (regionNumber, id, properties) => {
    if (regionNumber === 7) {
        return tt1(id, properties)
    }
    if (regionNumber === 9) {
        return tt2(id, properties)
    }
    if (regionNumber === 11) {
        return tt3(id, properties)
    }
    if (regionNumber === 13) {
        return tt4(id, properties)
    }
    if (regionNumber === 15) {
        return tt5(id, properties)
    }
    if (regionNumber === 17) {
        return tt6(id, properties)
    }
    if (regionNumber === 19) {
        return tt7(id, properties)
    }
    if (regionNumber === 21) {
        return tt8(id, properties)
    }
    if (regionNumber === 23) {
        return tt9(id, properties)
    }
    if (regionNumber === 25) {
        return tt10(id, properties)
    }
    if (regionNumber === 27) {
        return tt11(id, properties)
    }
    if (regionNumber === 29) {
        return tt12(id, properties)
    }
    if (regionNumber === 31) {
        return tt13(id, properties)
    }
    if (regionNumber === 33) {
        return tt14(id, properties)
    }
};
