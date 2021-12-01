'use strict';

const Person = function (str) {
  this.str = str;
};

const Student = function (str) {
  Person.call(this, str);
};

const obj = new Student('str');
console.log(obj);
console.log(obj.str);
console.log(obj.__proto__ === Person.prototype);
console.log(obj.__proto__.hasOwnProperty('str'));
