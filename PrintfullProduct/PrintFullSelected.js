const brightMap = require('./../PrintfullProduct/BrigthMaps');
const earthMap = require('./../PrintfullProduct/EarthMaps');
const helix = require('./../PrintfullProduct/Helix');
const helixVertical = require('./../PrintfullProduct/HelixVertical');
const helixLove = require('./../PrintfullProduct/IloveMyDna');
const toteYellow = require('./../PrintfullProduct/ToteYellowRed');
const toteRed = require('./../PrintfullProduct/ToteRed');
const toteBold = require('./../PrintfullProduct/ToteBold');
const helixMug = require('./../PrintfullProduct/HelixMug');
const mapMug = require('./../PrintfullProduct/BrigthMug');

module.exports = idProduct = (id, env, itemsNumber, properties, nameFile, orderInfo) => {
    console.log(id);
    try {
        switch (id) {
        case "1857838415915":
            console.log("Brigth Map TT".blue);
            return brightMap(env, itemsNumber, properties, nameFile, orderInfo);
            break;
            case "1859574300715":
            console.log("Brigth Map TT".blue);
            return brightMap(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "4349944496199":
            console.log("Brigth Map TT".blue);
            return brightMap(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1859442409515":
            console.log("Earth Map TT".blue);
            return earthMap(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1859617882155":
            console.log("Earth Map TT".blue);
            return earthMap(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "4370898747463":
            console.log("Earth Map".blue);
            return earthMap(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1864978006059":
            console.log("Helix Horizontal".blue);
            return helix(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1865315287083":
            console.log("Helix Horizontal".blue);
            return helix(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1865318268971":
            console.log("Helix Vertical".blue);
            return helixVertical(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1864993439787":
            console.log("Helix Vertical".blue);
            return helixVertical(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1865350643755" :
            console.log("Helix Love ".blue);
            return helixLove(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1865381838891":
            console.log("Helix Love ".blue);
            return helixLove(env, itemsNumber, properties, nameFile, orderInfo);
            break;
            case "31374479982663":
                console.log("Helix Love ".blue);
                return helixLove(env, itemsNumber, properties, nameFile, orderInfo);
                break;
            case "31374480343111":
                console.log("Helix Love ".blue);
                return helixLove(env, itemsNumber, properties, nameFile, orderInfo);
                break;
            case "31374480539719":
                console.log("Helix Love ".blue);
                return helixLove(env, itemsNumber, properties, nameFile, orderInfo);
                break;


        case "1860907204651":
            console.log("Tote Yellow test".blue);
            return toteYellow(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "4317967155271":
            console.log("Tote Yellow test".blue);
            return toteYellow(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case  "1860994760747":
            console.log("Tote red test".blue);
            return toteYellow(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1251069329451":
            console.log("Mug Helix".blue);
            return helixMug(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        case "1208772263979":
            console.log("Mug Map".blue);
            mapMug(env, itemsNumber, properties, nameFile, orderInfo);
            break;
            // case "":
            //     console.log("Mug Map".blue);
            //     helixMug(env, itemsNumber, properties, nameFile);
            // break;
        case "1859664674859":
            console.log("Tote Bold".blue);
            return toteBold(env, itemsNumber, properties, nameFile, orderInfo);
            break;
        }
    } catch (e) {
        console.log(e)
    }
};
