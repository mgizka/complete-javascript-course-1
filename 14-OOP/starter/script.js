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


// Value of webAddress: 
const webAddress = 'https://www.cosmicsolutionswebportal.com:8080/users?year=2020&type=analyst'
const url = new URL(webAddress); 
// Add code here
url.search='year=2019'

console.log(webAddress)




