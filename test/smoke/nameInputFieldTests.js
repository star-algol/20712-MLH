const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');


describe('Name input field accepts correct inputs', function () {
    before(() => {
        browser.maximizeWindow();
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });

    function clearInputBox(input) {
        input.click();
        browser.keys(["\ue009" + "a", "\ue017", "\ue000"]);
    }

    it('TC-031  Name input field accepts Upper case letters ', function () {
        const characterName = "LADYBUG";
        const name = $(sel.name);
        clearInputBox(name);
        name.setValue(characterName);
        expect(name.getValue()).toEqual(characterName);
    });

    it('TC-032  Name input field accepts Lower case letters ', function () {
        const characterName = "ladybug";
        const name = $(sel.name);
        clearInputBox(name);
        name.setValue(characterName);
        expect(name.getValue()).toEqual(characterName);
    });

    it('TC-033  Name input field accepts digits ', function () {
        const characterName = "1234567890";
        const name = $(sel.name);
        clearInputBox(name);
        name.setValue(characterName);
        expect(name.getValue()).toEqual(characterName);
    });

    it('TC-034  Name input field accepts special characters ', function () {
        const characterName = ";)))# ";
        const name = $(sel.name);
        clearInputBox(name);
        name.setValue(characterName);
        expect(name.getValue()).toEqual(characterName);
    });

    it('TC-035  Name input field accepts mix of letters, digits, and special characters', function () {
        const characterName = "Karabas - Barabas 10";
        const name = $(sel.name);
        clearInputBox(name);
        name.setValue(characterName);
        expect(name.getValue()).toEqual(characterName);
    });

    it('TC-036  Name input field accepts 1 symbol', function () {
        const characterName = "a";
        const name = $(sel.name);
        clearInputBox(name);
        name.setValue(characterName);
        expect(name.getValue()).toEqual(characterName);

        browser.pause(500);
        const alerts = $$(sel.errorAlert);
        expect(alerts.length).toEqual(0);
    });

    it('TC-037  Name input field accepts 35 symbols', function () {
        const characterName = new Array(35).fill("a").join("");
        const name = $(sel.name);
        clearInputBox(name);
        name.setValue(characterName);
        expect(name.getValue()).toEqual(characterName);

        browser.pause(500);
        const alerts = $$(sel.errorAlert);
        expect(alerts.length).toEqual(0);
    });

    it('TC-038  Name input field accepts 70 symbols', function () {
        const characterName = new Array(70).fill("a").join("");
        const name = $(sel.name);
        clearInputBox(name);
        name.setValue(characterName);
        expect(name.getValue()).toEqual(characterName);

        browser.pause(500);
        const alerts = $$(sel.errorAlert);
        expect(alerts.length).toEqual(0);
    });
});
