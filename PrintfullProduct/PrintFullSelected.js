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

module.exports = idProduct = async (id, env, itemsNumber, properties, nameFile, orderInfo) => {

    productSelected = (product) => {
        try {
            product;
            return env + nameFile + ".png";
        } catch (e) {
            console.log("error en seleccion de producto" + e)
        }
    };

        switch (id) {
            case "1857838415915":
                console.log("Brigth Map TT".blue);
                return productSelected(brightMap(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "1859574300715":
                console.log("Brigth Map TT".blue);
                return productSelected(brightMap(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "4349944496199":
                console.log("Brigth Map TT".blue);
                return productSelected(brightMap(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "1859442409515":
                console.log("Earth Map TT 1".blue);
                return productSelected(earthMap(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "1859617882155":
                console.log("Earth Map TT 2".blue);
                return productSelected(earthMap(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "4370898747463":
                console.log("Earth Map".blue);
                return productSelected(earthMap(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "1864978006059":
                console.log("Helix Horizontal".blue);
                return productSelected(helix(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "1865315287083":
                console.log("Helix Horizontal".blue);
                return productSelected(helix(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "1865318268971":
                console.log("Helix Vertical".blue);
                return productSelected(helixVertical(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "1864993439787":
                console.log("Helix Vertical".blue);
                return productSelected(helixVertical(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "1865350643755" :
                console.log("Helix Love ".blue);
                return productSelected(helixLove(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "1865381838891":
                console.log("Helix Love ".blue);
                return productSelected(helixLove(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "31374479982663":
                console.log("Helix Love ".blue);
                return productSelected(helixLove(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "31374480343111":
                console.log("Helix Love ".blue);
                return productSelected(helixLove(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "31374480539719":
                console.log("Helix Love ".blue);
                return productSelected(helixLove(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "4378512851015":
                console.log("Helix Love ".blue);
                return productSelected(helixLove(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "1860907204651":
                console.log("Tote Yellow test".blue);
                return productSelected(toteYellow(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "4317967155271":
                console.log("Tote Yellow test".blue);
                return productSelected(toteYellow(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case  "1860994760747":
                console.log("Tote red test".blue);
                return productSelected(toteYellow(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "1251069329451":
                console.log("Mug Helix".blue);
                return productSelected(helixMug(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "1208772263979":
                console.log("Mug Map".blue);
                return productSelected(mapMug(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            case "1859664674859":
                console.log("Tote Bold".blue);
                return productSelected(toteBold(env, itemsNumber, properties, nameFile, orderInfo));
                break;
            default:
                console.log("Item no en lista de Server")
        }
};
