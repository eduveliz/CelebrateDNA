const helix1 = require('./Helix1');
const helix2 = require('./Helix2');
const helix3 = require('./Helix3');
const helix4 = require('./Helix4');
const helix5 = require('./Helix5');
const helix6 = require('./Helix6');
const helix7 = require('./Helix7');
const helix8 = require('./Helix8');
const helix9 = require('./Helix9');
const helix10 = require('./Helix10');

module.exports = helixSelector = async (regionNumber, properties, namefile) => {
    if (regionNumber === 1) {
        console.log("lelgue");
        return helix1(namefile, properties)
    }
    if (regionNumber === 2) {
        return helix2(namefile, properties)
    }
    if (regionNumber === 3) {
        return helix3(namefile, properties)
    }
    if (regionNumber === 4) {
        return helix4(namefile, properties)
    }
    if (regionNumber === 5) {
        return helix5(namefile, properties)
    }
    if (regionNumber === 6) {
        return helix6(namefile, properties)
    }
    if (regionNumber === 7) {
        return helix7(namefile, properties)
    }
    if (regionNumber === 8) {
        return helix8(namefile, properties)
    }
    if (regionNumber === 9) {
        return helix9(namefile, properties)
    }
    if (regionNumber === 10) {
        return helix10(namefile, properties)
    }
};
