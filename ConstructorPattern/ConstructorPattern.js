/*
    Javascript doesn't support the concept of class but it support special constructor function that works with objects.

    Therefore, by simply prefixing call to the constructor function with "new", we can tell JavaScript to behave like
    a constructor and instantiate a new object with the member defined by that class.
*/

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function() {
        return this.model + ' has done ' + this.miles + ' miles.';
    };
}

var toyota = new Car('Auris', 2007, 64000);
var ford = new Car('Punto', 2005, 99200);

console.log(toyota);
console.log(ford);

/*
    Above simple version of the constructor patter suffer from some problem.
    1. Makes inheritance difficult.
    2. functions such as toString() are redefined for each of the new object created using the Car constructor. This
       isn't very optimal as function should be shared between all the instance of the car object.

    The workaround to this limitation can be overcome by the use of "prototype" as shown
    in the example "ConstructorPatternUsingPrototype.js"
 */
