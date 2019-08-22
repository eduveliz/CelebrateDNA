const MyHeritage14 = require('./MyHeritage14');
const MyHeritage13 = require('./MyHeritage13');
const MyHeritage12 = require('./MyHeritage12');
const MyHeritage11 = require('./MyHeritage11');
const MyHeritage10 = require('./MyHeritage10');
const MyHeritage9 = require('./MyHeritage9');
const MyHeritage8 = require('./MyHeritage8');
const MyHeritage7 = require('./MyHeritage7');
const MyHeritage6 = require('./MyHeritage6');
const MyHeritage5 = require('./MyHeritage5');
const MyHeritage4 = require('./MyHeritage4');
const MyHeritage3 = require('./MyHeritage3');
const MyHeritage2 = require('./MyHeritage2');
const MyHeritage1 = require('./MyHeritage1');


module.exports = ttSelector = async (regionNumber, id, properties) => {
    if (regionNumber === 7) {
        return MyHeritage1(id, properties)
    }
    if (regionNumber === 9) {
        return MyHeritage2(id, properties)
    }
    if (regionNumber === 11) {
        return MyHeritage3(id, properties)
    }
    if (regionNumber === 13) {
        return MyHeritage4(id, properties)
    }
    if (regionNumber === 15) {
        return MyHeritage5(id, properties)
    }
    if (regionNumber === 17) {
        return MyHeritage6(id, properties)
    }
    if (regionNumber === 19) {
        return MyHeritage7(id, properties)
    }
    if (regionNumber === 21) {
        return MyHeritage8(id, properties)
    }
    if (regionNumber === 23) {
        return MyHeritage9(id, properties)
    }
    if (regionNumber === 25) {
        return MyHeritage10(id, properties)
    }
    if (regionNumber === 27) {
        return MyHeritage11(id, properties)
    }
    if (regionNumber === 29) {
        return MyHeritage12(id, properties)
    }
    if (regionNumber === 31) {
        return MyHeritage13(id, properties)
    }
    if (regionNumber === 33) {
        return MyHeritage14(id, properties)
    }
};
