exports.config={
    seleniumAddress:'http://localhost:4444/wd/hub',
    capabilities:{
        'browserName':'chrome'
    },
    specs:['../tests/zoo_test_spec.js'],

    jasmineNodeOpts:{
        showColors:true,
        defaultTimeoutInterval:3000
    }
}