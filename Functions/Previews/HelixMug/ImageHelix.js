module.exports = image = (headline) => {
    if (headline === "Celebrating My DNA!") {
        return "https://moolab.ml/HelixHorizontal/celebrating.png";
    } else if (headline === "Celebrating My DNA") {
        return "https://moolab.ml/HelixHorizontal/celebratingMug.png";
    } else if (headline === "My DNA Rocks") {
        return "https://moolab.ml/HelixHorizontal/rocks.png";
    } else if (headline === "Rocking My Roots") {
        return "https://moolab.ml/HelixHorizontal/roots.png";
    } else if (headline === "Dig Your Roots!") {
        return "https://moolab.ml/HelixHorizontal/dig.png";
    } else {
        return "https://moolab.ml/HelixHorizontal/its.png";
    }
};
