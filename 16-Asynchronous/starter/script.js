'use strict';
///////////////////////////////////////

/*
console.log('Promise')

class Outbound{
    constructor(a){
        this.a=a
    }
    read = function (fname){
        this.a=fname
        return new Promise(
            (resolve, reject) => {
                setTimeout( ()=>{
                    console.log('inside: '+this.a)
                    3000
                } )
            }
        )
    }
}
const out = new Outbound('test1')
console.log(out)

const test = () => { console.log(`arrow function: `+this) }
out.test = test

test()
out.test()

const test2 = function ()  { console.log(`function expression: `+this) }
out.test = test2

test2()
out.test()

*/

/*
const AAA = {
    a : 'A',
    b : 'B',

    c : ()=>{
        this.a='C'
        this.b='D'
        console.log(this)
    },

    print : function(){
        console.log(this)
    }
}


AAA.c()
AAA.print()
console.log(a,b)

*/
/*
class BBB {
    a = 'test1'
    c = ()=>{
        console.log(this, this.a)
    }
}

const B = new BBB()

B.c()


function FFF () {
    this.a = 'test2'
    this.c = ()=>{
        console.log(this, this.a)
    }
}

const F = new FFF()

F.c()

F.c = ()=>{
    console.log(this, this.a)
}

console.log(F.c())


const x = {
    a : 'a',
    b : () => {
        console.log("********"+this.a+"**********")
    }
}

x.b()
*/
/*
//classes are wrappers of functions and defines their scope 
class X {
    f = () => console.log(this)
    g = function () {
        console.log(this)
    }
}

const x = new X()

x.g()
x.f()
*/
//functions defines their scope 
function Y() {
    this.a = 'test'
    this.f = () => console.log(this.a)
    this.g = function () {
        console.log(this.a)
    }
}

const y = new Y()

y.g()
y.f()

const yy = y.f
const zz = y.g

yy()
//zz()
/*

// objects do not define
const Z = {
    f : () => console.log(this),
    g : function () {
        this.f()
        //console.log(this)
    }
}

Z.g()
Z.f()
*/

class Car {

    constructor(){
        console.log('test2')
    }
    
    printSpecification(){
        return `The car can run with maximu speed : ${this.speed}`
    }
    #speed = 50
}

const bmw = new Car()
console.log(bmw.printSpecification())


console.log(this)
let a = 5

const f = ()=>{ console.log(a)}

f()

