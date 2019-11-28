module.exports = image = (headline, font) => {
    if (headline === "Celebrating / My DNA!" && font === "Noteworthy") {
        return "https://moolab.ml/mug/Celebrating.png";
    } else if (headline === "Rockin'/My DNA!" && font === "Noteworthy") {
        return "https://moolab.ml/mug/Rockin.png";
    } else if (headline === "First name / DNA" && font === "Noteworthy") {
        return "https://moolab.ml/mug/Roots.png";
    } else if (headline === "Celebrating / My DNA!" && font === "MyriadPro-Bold") {
        return "https://moolab.ml/mug/mpCelebrating.png";
    } else if (headline === "Rockin'/My DNA!" && font === "MyriadPro-Bold") {
        return "https://moolab.ml/mug/mpRockin.png";
    } else if (headline === "First name / DNA" && font === "MyriadPro-Bold") {
        return "https://moolab.ml/mug/mpPersonalized.png";
    } else if (headline === "Celebrating / My DNA!" && font === "Funnier") {
        return "https://moolab.ml/mug/fCelebrating.png";
    } else if (headline === "Rockin'/My DNA!" && font === "Funnier") {
        return "https://moolab.ml/mug/fRockin.png";
    } else if (headline === "First name / DNA" && font === "Funnier") {
        return "https://moolab.ml/mug/fPersonalized.png";
    }
};
