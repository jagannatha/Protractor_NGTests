require('../pages/conduit_home_page.js');
var Signup_page=function(){
 this.enterUserName=function(value){
element(by.name('username')).sendKeys(value);
 };
 this.enterEmail=function(value){
element(by.name('email')).sendKeys(value);
 };
this.enterPassword=function(value){
element(by.name('password')).sendKeys(value);
};
this.ClickSubmit=function(value){
element(by.buttonText('Sign up')).click();
 };
};

module.exports=new Signup_page();