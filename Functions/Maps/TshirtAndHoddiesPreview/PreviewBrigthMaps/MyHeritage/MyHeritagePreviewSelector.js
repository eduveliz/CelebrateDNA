const MyHeritage14 = require('./MyHeritagePreview14');
const MyHeritage13 = require('./MyHeritagePreview13');
const MyHeritage12 = require('./MyHeritagePreview12');
const MyHeritage11 = require('./MyHeritagePreview11');
const MyHeritage10 = require('./MyHeritagePreview10');
const MyHeritage9 = require('./MyHeritagePreview9');
const MyHeritage8 = require('./MyHeritagePreview8');
const MyHeritage7 = require('./MyHeritagePreview7');
const MyHeritage6 = require('./MyHeritagePreview6');
const MyHeritage5 = require('./MyHeritagePreview5');
const MyHeritage4 = require('./MyHeritagePreview4');
const MyHeritage3 = require('./MyHeritagePreview3');
const MyHeritage2 = require('./MyHeritagePreview2');
const MyHeritage1 = require('./MyHeritagePreview1');


module.exports = ttSelector = async (regionNumber, id, properties) => {
    if (regionNumber === 1) {
        return MyHeritage1(id, properties)
    }
    if (regionNumber === 2) {
        return MyHeritage2(id, properties)
    }
    if (regionNumber === 3) {
        return MyHeritage3(id, properties)
    }
    if (regionNumber === 4) {
        return MyHeritage4(id, properties)
    }
    if (regionNumber === 5) {
        return MyHeritage5(id, properties)
    }
    if (regionNumber === 6) {
        return MyHeritage6(id, properties)
    }
    if (regionNumber === 7) {
        return MyHeritage7(id, properties)
    }
    if (regionNumber === 8) {
        return MyHeritage8(id, properties)
    }
    if (regionNumber === 9) {
        return MyHeritage9(id, properties)
    }
    if (regionNumber === 10) {
        return MyHeritage10(id, properties)
    }
    if (regionNumber === 11) {
        return MyHeritage11(id, properties)
    }
    if (regionNumber === 12) {
        return MyHeritage12(id, properties)
    }
    if (regionNumber === 13) {
        return MyHeritage13(id, properties)
    }
    if (regionNumber === 14) {
        return MyHeritage14(id, properties)
    }
};
