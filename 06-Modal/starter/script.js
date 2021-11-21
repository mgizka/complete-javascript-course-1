'use strict';

const nls = document.querySelectorAll('.show-modal');
console.debug(nls);

Array.from(nls).map((a, i) => console.debug(a.textContent));

function fnct() {
  console.debug(variable1);
}

let variable1 = 'variable1';

fnct();

let vari1 = 'test';
{
  let vari1 = 'test2';
  console.debug(vari1);
}

console.debug(vari1);

f(e);
var e = 'xeexx';

function f(e) {
  console.debug(e);
}

const j = {
  e: 'test',
  func: () => console.debug(e),
};

j.func();

var e = 'sss';

const obj = {
  point1: {
    x: 1,
    y: 2,
  },
  point2: {
    x: 2,
    y: 3,
  },
};

let {
  point1: { x },
} = obj;

const print = str => console.debug(str);

print(x);

const openingHours = {
  fri: {
    open: '9:00 AM',
    close: '10 PM',
  },
};

const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);

//9:00 AM 10 PM

const orderCard = {
  starterIndex: 2,
  mainIndex: 3,
  time: Date('2020.12.03 12:00 PM'),
  address: {
    street: 'Zamiejska',
    flat: '23',
    postalCode: '03-580',
  },
};

submitOrder(orderCard);

function submitOrder({ starterIndex, time, address }) {
  console.log(starterIndex, time, address);
}

//2 'Sat Nov 20 2021 08:01:23 GMT+0100 (Central European Standard Time)'
/*{
    "street": "Zamiejska",
    "flat": "23",
    "postalCode": "03-580"
}*/

const customerData = {
  firstName: 'Marcin',
  lastName: 'Gizka',
  addresses: [
    {
      addressType: 'Legal',
      street: 'Zamiejska',
    },
    {
      addressType: 'Living',
      street: 'Wichrowa',
    },
  ],
};

const [legalAddress, livingAddress] = customerData.addresses;

console.log(legalAddress, livingAddress);
//{addressType: 'Legal', street: 'Zamiejska'}
//{addressType: 'Living', street: 'Wichrowa'}

const arr = ['1', 2, 3];
const [z, , y] = arr;

console.log(z, y);
//1 3

[z, , y].forEach(e => console.log(typeof e));

const fnct2 = (...args) => args.reduce((i, a) => i * a);

console.log(fnct2(1, 2, 3, 4, 5, 5, 5, 10));

console.log(null || undefined || undefined || null);

let aa = null,
  ab = 0,
  ac = 2,
  ad;
const res = aa ?? ab ?? ac ?? ad;

console.log(res);
//0

let aatr7;

const result = (t => t + 1)(2);
console.log(result);

(function (t) {
  console.log(t);
})('t');

function count() {
  let counter = 0;
  return function () {
    return (counter += 1);
  };
}

const func = count();
console.log(func());
console.log(func());
console.log(func());
