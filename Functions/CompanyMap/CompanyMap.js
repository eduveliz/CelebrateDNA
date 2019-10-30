const ancestryMap = require('../MapsSVGTote/AncestryMap');
const ttMap = require('../MapsSVGTote/TTMap');
const MyHeritageMap = require('../MapsSVGTote/MyHeritageMap');

module.exports = companyMap = (company) => {
    switch (company) {
        case "Ancestry":
            return ancestryMap;
            break;
        case "23andMe":
            return ttMap;
            break;
        case "MyHeritageDNA":
            return MyHeritageMap;
            break;
    }
};
