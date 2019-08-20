const ancestry14 = require('./Ancestry14');
const ancestry13 = require('./Ancestry14');
const ancestry12 = require('./Ancestry14');
const ancestry11 = require('./Ancestry14');
const ancestry10 = require('./Ancestry14');
const ancestry9 = require('./Ancestry14');
const ancestry8 = require('./Ancestry14');
const ancestry7 = require('./Ancestry14');
const ancestry6 = require('./Ancestry14');
const ancestry5 = require('./Ancestry14');
const ancestry4 = require('./Ancestry14');
const ancestry3 = require('./Ancestry14');
const ancestry2 = require('./Ancestry14');
const ancestry1 = require('./Ancestry14');


module.exports = ttSelector = async (regionNumber, id, properties) => {
    if (regionNumber === 7) {
        return ancestry1(id, properties)
    }
    if (regionNumber === 9) {
        return ancestry2(id, properties)
    }
    if (regionNumber === 11) {
        return ancestry3(id, properties)
    }
    if (regionNumber === 13) {
        return ancestry4(id, properties)
    }
    if (regionNumber === 15) {
        return ancestry5(id, properties)
    }
    if (regionNumber === 17) {
        return ancestry6(id, properties)
    }
    if (regionNumber === 19) {
        return ancestry7(id, properties)
    }
    if (regionNumber === 21) {
        return ancestry8(id, properties)
    }
    if (regionNumber === 23) {
        return ancestry9(id, properties)
    }
    if (regionNumber === 25) {
        return ancestry10(id, properties)
    }
    if (regionNumber === 27) {
        return ancestry11(id, properties)
    }
    if (regionNumber === 29) {
        return ancestry12(id, properties)
    }
    if (regionNumber === 31) {
        return ancestry13(id, properties)
    }
    if (regionNumber === 33) {
        return ancestry14(id, properties)
    }
};
