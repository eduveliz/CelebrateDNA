module.exports = colorDarkBackground = (color) => {
    let hexValueColor;
    switch (color) {
        case "Transparent":
            return hexValueColor = "blue";
            break;
        case "Sand Dune":
            return hexValueColor = "#7B7067";
            break;
        case "Dusty Blue":
            return hexValueColor = "#8C9DA6";
            break;
        case "Autumn Mango":
            return hexValueColor = "#AB7F31";
            break;
        case "Sage Bark":
            return hexValueColor = "#757668";
            break;
        case "Raspberry":
            return hexValueColor = "#A97B80";
            break;
    }
};
