const brightMap = require('./../PrintfullProduct/BrigthMaps');
const earthMap = require('./../PrintfullProduct/EarthMaps');
const helix = require('./../PrintfullProduct/Helix');
const helixVertical = require('./../PrintfullProduct/HelixVertical');
const helixLove = require('./../PrintfullProduct/IloveMyDna');
const toteYellow = require('./../PrintfullProduct/ToteYellowRed');
const toteBold = require('./../PrintfullProduct/ToteBold');

module.exports = idProduct = (id, env, itemsNumber, properties, nameFile) => {
    switch (id) {
        case "1857838415915" || "1859574300715":
            brightMap(env, itemsNumber, properties, nameFile);
            break;
        case "1859442409515" || "1859617882155":
            earthMap(env, itemsNumber, properties, nameFile);
            break;
        case "1864978006059" || "1865315287083":
            helix(env, itemsNumber, properties, nameFile);
            break;
        case "1865318268971" || "1864993439787":
            helixVertical(env, itemsNumber, properties, nameFile);
            break;
        case "1865350643755" || "1865381838891":
            helixLove(env, itemsNumber, properties, nameFile);
            break;
        case "1860907204651" || "4317967155271":
            toteYellow(env, itemsNumber, properties, nameFile);
            break;
        case "1859664674859":
            toteBold(env, itemsNumber, properties, nameFile)
            break;
    }
};
