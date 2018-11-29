Module pattern provide a way to provide both private or public encapsulation for class.

In JavaScript, Module pattern is used to further emulate the concept of class in such a way
that we are able to use both public/private methods and variable inside a object, thus shielding
part of the object from the global scope.

## Original Resource: 
https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript

## In depth resource:
http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

### Module pattern Template:
    var myNamespace = (function () {
     
      var myPrivateVar, myPrivateMethod;
     
      // A private counter variable
      myPrivateVar = 0;
     
      // A private function which logs any arguments
      myPrivateMethod = function( foo ) {
          console.log( foo );
      };
     
      return {
     
        // A public variable
        myPublicVar: "foo",
     
        // A public function utilizing privates
        myPublicFunction: function( bar ) {
     
          // Increment our private counter
          myPrivateVar++;
     
          // Call our private method using bar
          myPrivateMethod( bar );
     
        }
      };
     
    })();