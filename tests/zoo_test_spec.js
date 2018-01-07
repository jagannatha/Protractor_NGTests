var util = require('util')

describe('To test the animal adoption flow', function () {
    beforeEach(function () {
        browser.get('http://www.thetestroom.com/jswebapp/index.html');
    });

    it('should be able to adopt an animal', function () {
        element(by.model('person.name')).sendKeys('I will Subscribe');
        var dynamicText = element(by.binding('person.name')).getText();
        expect(dynamicText).toBe('I will Subscribe');
        element(by.buttonText('CONTINUE')).click();
        element(by.model('animal')).$('[value="2"]').click();
        element(by.buttonText('CONTINUE')).click();

        var thankYouText = element(by.css('h1')).getText();
        expect(thankYouText).toBe('Thank you');
    });
    var home_page = require('../pages/home_page.js')

    it('Should be able to adopt an animal by page objects', function () {
        home_page.enterFieldValue('you Will Subscribe');
        var getHomePageText = home_page.getDynamicText();
        expect(getHomePageText).toBe('you Will Subscribe');
        var animal_page = home_page.clickContinue();
        animal_page.selectAnimal(2);
     var confirm_page=animal_page.clickContinue();
    expect(confirm_page.getTitle()).toBe('Thank you');
    });
});