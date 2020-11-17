const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');


describe('My Little Hero', function () {
    describe('Getting to the page', function () {
        before(() => {
            browser.maximizeWindow();
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });
        it('TC-001 Title is correct ', function () {
            let title = browser.getTitle();
            expect(title).toEqual('MLH trial');
        });

        it('TC-002 The Page header is present ', function () {
            const pageHeader = $(sel.pageHeader);
            expect(pageHeader.isDisplayed()).toEqual(true);
        });

        it('TC-003 The Page header is My Little Hero ', function () {
            const pageHeader = $(sel.pageHeader);
            expect(pageHeader.getText()).toEqual(exp.pageHeader);
        });

        it('TC-004 The text in description equals: Let\'s create your own HERO! It\'s super easy with our application!', function () {
            const pageDescription = $(sel.pageDescription);
            expect(pageDescription.getText()).toEqual(exp.pageDescription);
        });

    });

    describe('Labels exist', function () {
        before(() => {
            browser.maximizeWindow();
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });
        it('TC-005 Label for name', function () {
            const label = $$(sel.label)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-006 Label for gender', function () {
            const label = $$(sel.label)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-007 Label for age', function () {
            const label = $$(sel.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-008 Label for story', function () {
            const label = $$(sel.label)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-009 Label for image upload', function () {
            const label = $$(sel.label)[4].isDisplayed();
            expect(label).toEqual(true);
        });

    });

    describe('Labels are correct', function () {
        before(() => {
            browser.maximizeWindow();
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });
        it('TC-010 Label for name is correct', function () {
            const text = $$(sel.label)[0].getAttribute('title');
            expect(text).toEqual(exp.labelName);
        });

        it('TC-011 Label for gender is correct', function () {
            const text = $$(sel.label)[1].getAttribute('title');
            expect(text).toEqual(exp.labelGender);
        });

        it('TC-012 Label for age is correct', function () {
            const text = $$(sel.label)[2].getAttribute('title');
            expect(text).toEqual(exp.labelAge);
        });

        it('TC-013 Label for story is correct', function () {
            const text = $$(sel.label)[3].getAttribute('title');
            expect(text).toEqual(exp.labelStory);
        });

        it('TC-014 Label for image is correct', function () {
            const text = $$(sel.label)[4].getAttribute('title');
            expect(text).toEqual(exp.labelImage);
        });

    });

    describe('Submit button', function () {
        before(() => {
            browser.maximizeWindow();
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });
        it('TC-015 Submit button is present on the Home page', function () {
            const submitButton = $(sel.submitButton);
            expect(submitButton.isDisplayed()).toEqual(true);
        });

        it('TC-016 Submit button caption is correct', function () {
            const submitButton = $(sel.submitButton);
            expect(submitButton.getText()).toEqual(exp.submitButton);
        });

    });

    describe('Inputs are displayed', function () {
        before(() => {
            browser.maximizeWindow();
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });
        it('TC-017 Name ', function () {
            const name = $(sel.name);
            expect(name.isClickable()).toEqual(true);
        });

        it('TC-018 Gender He', function () {
            const gender = $$(sel.gender)[0];
            expect(gender.isClickable()).toEqual(true);
        });

        it('TC-019 Gender She', function () {
            const gender = $$(sel.gender)[1];
            expect(gender.isClickable()).toEqual(true);
        });

        it('TC-020 Gender It', function () {
            const gender = $$(sel.gender)[2];
            expect(gender.isClickable()).toEqual(true);
        });

        it('TC-021 Age', function () {
            const age = $(sel.age);
            expect(age.isClickable()).toEqual(true);
        });

        it('TC-022 Story', function () {
            const story = $(sel.story);
            expect(story.isClickable()).toEqual(true);
        });

        it('TC-023 Image', function () {
            const image = $(sel.imageField).isClickable();
            expect(image).toEqual(true);
        });

    });

    describe('Placeholders are correct', function () {

        it('TC-024 Placeholder for name = Hero\'s name', function () {
            const placeholderName = $(sel.name);
            expect(placeholderName.getAttribute("placeholder")).toEqual(exp.plchName);
        });

        it('TC-025 Placeholder for age = Hero\'s age', function () {
            const placeholderAge = $(sel.age);
            expect(placeholderAge.getAttribute("placeholder")).toEqual(exp.plchAge);
        });

        it('TC-026 Placeholder for story = Type of the story', function () {
            const placeholderStory = $(sel.placeholderStoryType);
            expect(placeholderStory.getText()).toEqual(exp.plchStory);
        });

        it('TC-027 Option for gender he is correct', function () {
            const optionHe = $$(sel.genderChoice)[0];
            expect(optionHe.getValue()).toEqual(exp.plchGender.he);
        });

        it('TC-028 Option for gender she is correct', function () {
            const optionShe = $$(sel.genderChoice)[1];
            expect(optionShe.getValue()).toEqual(exp.plchGender.she);
        });

        it('TC-029 Option for gender it is correct', function () {
            const optionIt = $$(sel.genderChoice)[2];
            expect(optionIt.getValue()).toEqual(exp.plchGender.it);
        });

        it('TC-030 Placeholder for Image is correct', function () {
            const placeholderImage = $(sel.imageText);
            expect(placeholderImage.getText()).toEqual(exp.plchImage);
        });
    });

});




