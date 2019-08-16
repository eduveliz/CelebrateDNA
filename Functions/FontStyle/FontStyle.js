module.exports = fontStyle = (fontSelected) => {
    let fontStyle;
    switch (fontSelected) {
        case "Noteworthy":
            return fontStyle = "noteworthybold";
            break;
        case "Baskerville":
            return fontStyle = "baskervillebold";
            break;
        case "Funnier":
            return fontStyle = 'funnierregular';
            break;
        case "Futura Bold":
            return fontStyle = "futurabold";
            break;
        case "Myriad Pro Bold":
            return fontStyle = "#D87F47";
            break;
        case "EmbossedTapeThree":
            return fontStyle = "embossing_tape_3_brkregular";
            break;
    }
};
