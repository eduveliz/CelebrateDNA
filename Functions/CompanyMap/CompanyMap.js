const ancestryMap = require('../MapsTote/AncestryMap');
const ttMap = require('../MapsTote/TTMap');
const MyHeritageMap = require('../MapsTote/MyHeritageMap');

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
