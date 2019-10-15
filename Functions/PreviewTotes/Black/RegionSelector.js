const ancestry10 = require('./Region10');
const ancestry9 = require('./Region9');
const ancestry8 = require('./Region8');
const ancestry7 = require('./Region7');
const ancestry6 = require('./Region6');
const ancestry5 = require('./Region5');
const ancestry4 = require('./Region4');
const ancestry3 = require('./Region3');
const ancestry2 = require('./Region2');
const ancestry1 = require('./Region1');


module.exports = ttSelector = async (regionNumber, id, properties) => {
    if (regionNumber === 1) {
        return ancestry1(id, properties)
    }
    if (regionNumber === 2) {
        return ancestry2(id, properties)
    }
    if (regionNumber === 3) {
        return ancestry3(id, properties)
    }
    if (regionNumber === 4) {
        return ancestry4(id, properties)
    }
    if (regionNumber === 5) {
        return ancestry5(id, properties)
    }
    if (regionNumber === 6) {
        return ancestry6(id, properties)
    }
    if (regionNumber === 7) {
        return ancestry7(id, properties)
    }
    if (regionNumber === 8) {
        return ancestry8(id, properties)
    }
    if (regionNumber === 9) {
        return ancestry9(id, properties)
    }
    if (regionNumber === 10) {
        return ancestry10(id, properties)
    }
};
