var util = require('util')

describe('To Test the Conduit App', function () {
    beforeEach(function () {
        browser.get('https://angular2.realworld.io');
    });
    var Conduit_home_page = require('../pages/conduit_home_page.js');
    it('The Conduit page should able to click the Signup page', function () {
        Conduit_home_page.clickSignup();
       var Signup_page=require('../pages/Signup_page.js');

       Signup_page.enterUserName('Jagannatha');
       Signup_page.enterEmail('abc@gmail.com');
       Signup_page.enterPassword('abc12');
       Signup_page.ClickSubmit();

        
    });

});