const sel = require ('../data/selectors.json');

function findTextName () {
    const getStoryText = $(sel.valuesInText).getText();
    const pattern = "\n(.*), who";

    const regexp = new RegExp(pattern);

    const matches = regexp.exec(getStoryText);

    return matches[1];
}

function findHeaderName () {
    const getStoryHeader = $(sel.storyHeader).getText();
    const pattern = "Two Cats And A (.*)";

    const regexp = new RegExp(pattern);

    const matches = regexp.exec(getStoryHeader);

    return matches[1];
}

module.exports = {
    findTextName,
    findHeaderName,
};