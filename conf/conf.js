exports.config={
    directConnect:true,
    capabilities:{
        'browserName':'chrome'
    },
    specs:['../tests/zoo_test_spec.js'],

    jasmineNodeOpts:{
        showColors:true,
        defaultTimeoutInterval:30000
    }
}