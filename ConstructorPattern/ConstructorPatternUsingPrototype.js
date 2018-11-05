// Almost all the object in javascript contains a "prototype" object, which are made available to the new object created.
// Using prototype, Car object can be created which access the same prototype.

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function() {
    return this.model + ' has done ' + this.miles + ' miles.';
};

var toyota = new Car('Auris', 2007, 64000);
console.log(toyota);