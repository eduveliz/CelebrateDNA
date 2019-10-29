const ancestryMap = require('../AncestryMap');
const ttMap = require('../TTMap');
const MyHeritageMap = require('../MyHeritageMap');

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
