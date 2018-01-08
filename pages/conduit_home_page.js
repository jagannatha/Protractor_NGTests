var conduit_home_page=function(){
    this.clickSignup = function () {
        let child = element(by.css('nav.navbar.navbar-light')).
    $$('a.nav-link');
   // expect(child.getText()).toBe('Sign up');
child.click();
   
    };
};
module.exports=new conduit_home_page();