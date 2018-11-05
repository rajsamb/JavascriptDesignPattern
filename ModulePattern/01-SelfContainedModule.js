var testModule = (function () {
    //Variable & method declared are only availabe inside the module due to closure
    var counter = 0;

    //Variable & methods defined (like below) within the returning object are available to everyone.
    return {
        incrementCounter: function() {
            return counter++;
        },

        resetCounter: function() {
            console.log('counter value prior to reset: ' + counter);
            counter = 0;
        }
    };
})();

testModule.incrementCounter();
testModule.incrementCounter();

testModule.resetCounter();

/*
    Note:

    Other parts of the code are unable to directly read the value of incrementCounter() or resetCounter();
    Therefore, counter variable are shielded from the global scope an acts like a private method.

    The method is effectively namespaced, so any call to the method need to be prefixed by name of the module
    (i.e. "testModule")
 */