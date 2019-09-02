const ancestry14 = require('./AncestryPreview14');
const ancestry13 = require('./AncestryPreview13');
const ancestry12 = require('./AncestryPreview12');
const ancestry11 = require('./AncestryPreview11');
const ancestry10 = require('./AncestryPreview10');
const ancestry9 = require('./AncestryPreview9');
const ancestry8 = require('./AncestryPreview8');
const ancestry7 = require('./AncestryPreview7');
const ancestry6 = require('./AncestryPreview6');
const ancestry5 = require('./AncestryPreview5');
const ancestry4 = require('./AncestryPreview4');
const ancestry3 = require('./AncestryPreview3');
const ancestry2 = require('./AncestryPreview2');
const ancestry1 = require('./AncestryPreview1');


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
    if (regionNumber === 11) {
        return ancestry11(id, properties)
    }
    if (regionNumber === 12) {
        return ancestry12(id, properties)
    }
    if (regionNumber === 13) {
        return ancestry13(id, properties)
    }
    if (regionNumber === 14) {
        return ancestry14(id, properties)
    }
};
