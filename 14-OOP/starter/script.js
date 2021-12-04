'use strict'


class User {
    constructor(){}

    f(...a){ console.log(a)}
}
 
//The User class was instantiated using the following code:
const userObj1 = new User();
const userObj2 = new User(1, 12);

console.log(userObj1, userObj2)

userObj1.f(1,2,3,4)


class AAA {
    xx = 'AAA'

    aa(){
        console.log(this, this.xx)
        bb()
    }

    bb(){
        console.log(this, this.xx)
    }

    cc = ()=>{
        console.log(this, this.xx)
        this.dd()
    }

    dd = ()=>{
        console.log(this, this.xx)
    }
}

function bb(){
    console.log('bb')
}

const a = new AAA()

console.log(`functions and functions expressions`)
a.aa()
a.bb()
console.log(`arrow functions`)
a.cc()
a.dd()



const countries =  [
    {
        cname : 'Portugal',
        ccode : 'PO'
    },{
        cname : 'Poland',
        ccode : 'PL'
    }
]

const [cname]=countries

const [portugal, poland] = countries

console.log(countries, cname)
console.log(typeof portugal)
console.log(typeof poland)

const obj1 = {
    cname : 'Portugal',
    ccode : 'PO',
    ctest1 : 'A'  
}, obj2 = {
    cname : 'Poland',
    ccode : 'PL',
    ctest2 : 'B'
}

const o = {...obj1, ...obj2 }
console.log(o)


