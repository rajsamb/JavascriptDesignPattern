/**
 * Module defined using object literal notation.
 * @type {{}}
 */

var myModule = {
    myProperty: 'someValue',

    // Can define a further object for module configuration
    myConfig: {
        useCaching: true,
        language: 'en'
    },

    saySomething: function() {
        console.log('where in the world is paul soct today?');
    },

    // output a value based on the current configuration
    reportMyConfig: function() {
        console.log('caching is: ' + (this.myConfig.useCaching ? 'enabled' : 'disabled'));
    },

    // override the current configuration
    updateMyConfig: function(newConfig) {
        if (typeof newConfig === 'object') {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
};

myModule.saySomething();

myModule.reportMyConfig();

myModule.updateMyConfig({
   language: 'fr',
   useCaching: false
});

myModule.reportMyConfig();