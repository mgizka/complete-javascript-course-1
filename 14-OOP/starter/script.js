'use strict'

const Car = function(make, speed){
    this.make=make
    this.speed=speed
}

Car.prototype.accelerate = function (){
    this.speed+=10
}

Car.prototype.break = function(){
    this.speed-=5
}

const car1 = new Car('BMW', 120), car2 = new Car('Mercedes',95)

console.log(car1, car2)

car1.accelerate();
car2.break();

console.log(car1, car2)