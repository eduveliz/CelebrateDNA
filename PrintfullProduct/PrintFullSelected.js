const brightMap = require('./../PrintfullProduct/BrigthMaps');
const earthMap = require('./../PrintfullProduct/EarthMaps');
const helix = require('./../PrintfullProduct/Helix');
const helixVertical = require('./../PrintfullProduct/HelixVertical');
const helixLove = require('./../PrintfullProduct/IloveMyDna');
const toteYellow = require('./../PrintfullProduct/ToteYellowRed');
const toteRed = require('./../PrintfullProduct/ToteRed');
const toteBold = require('./../PrintfullProduct/ToteBold');
const helixMug = require('./../PrintfullProduct/HelixMug');

module.exports = idProduct = (id, env, itemsNumber, properties, nameFile, orderInfo) => {
    console.log(id);
    switch (id) {
        case "1857838415915" || "1859574300715" || "4349944496199":
            console.log("Brigth Map TT".blue);
            brightMap(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1859442409515" || "1859617882155":
            console.log("Earth Map TT".blue);
            earthMap(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1864978006059" || "1865315287083":
            console.log("Helix Horizontal".blue);
            helix(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1865318268971" || "1864993439787":
            console.log("Helix Vertical".blue);
            helixVertical(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1865350643755" || "1865381838891":
            console.log("Helix Love ".blue);
            helixLove(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1860907204651" || "4317967155271":
            console.log("Tote Yellow test".blue);
            toteYellow(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case  "1860994760747":
            console.log("Tote red test".blue);
            toteRed(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1251069329451":
            console.log("Mug Helix".blue);
            helixMug(env, itemsNumber, properties, nameFile);
            break;
        case "1208772263979":
            console.log("Mug Map".blue);
            // helixMug(env, itemsNumber, properties, nameFile);
            break;
        case "1859664674859":
            console.log("Tote Bold".blue);
            toteBold(env, itemsNumber, properties, nameFile, orderInfo);
            break;
    }
};
