module.exports = colorBackground = (color) => {
    let hexValueColor;
    switch (color) {
        case "Transparent":
            return hexValueColor = "red";
            break;
        case "Sand":
            return hexValueColor = "#C2B49A";
            break;
        case "Jade green":
            return hexValueColor = "#8DCEAB";
            break;
        case "Cool blue":
            return hexValueColor = "#0071BB";
            break;
        case "Tangerine":
            return hexValueColor = "#D87F47";
            break;
        case "Raspberry":
            return hexValueColor = "#B77290";
            break;
    }
};
