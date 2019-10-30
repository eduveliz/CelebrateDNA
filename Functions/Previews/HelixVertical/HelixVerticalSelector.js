const helix10 = require('./HelixVertical10');
const helix9 = require('./HelixVertical9');
const helix8 = require('./HelixVertical8');
const helix7 = require('./HelixVertical7');
const helix6 = require('./HelixVertical6');
const helix5 = require('./HelixVertical5');
const helix4 = require('./HelixVertical4');
const helix3 = require('./HelixVertical3');
const helix2 = require('./HelixVertical2');
const helix1 = require('./HelixVertical1');

module.exports = helixSelector = async (regionNumber, properties) => {

    if (regionNumber === 10) {
        return helix10(properties)
    }
    if (regionNumber === 9) {
        return helix9(properties)
    }
    if (regionNumber === 8) {
        return helix8(properties)
    }
    if (regionNumber === 7) {
        return helix7(properties)
    }
    if (regionNumber === 6) {
        return helix6(properties)
    }
    if (regionNumber === 5) {
        return helix5(properties)
    }
    if (regionNumber === 4) {
        return helix4(properties)
    }
    if (regionNumber === 3) {
        return helix3(properties)
    }
    if (regionNumber === 2) {
        return helix2(properties)
    }
    if (regionNumber === 1) {
        return helix1(properties)
    }
};
