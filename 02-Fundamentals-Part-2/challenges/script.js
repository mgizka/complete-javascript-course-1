'use strict';

//challenge #1

const calcAvarage = args => {
  let result = 0;
  for (i = 0; i < args.length; i++) result += args[i];

  return result / args.length;
};
const calcTotal = args => {
  let result = 0;
  for (i = 0; i < args.length; i++) result += args[i];

  return result;
};

const checkWinner = (dolhins, koalas) => {
  const avgDolhins = calcAvarage(dolhins),
    totalDolphins = calcTotal(dolhins);
  const avgKoalas = calcAvarage(koalas),
    totalKoalas = calcTotal(koalas);

  return avgDolhins / avgKoalas > 2
    ? `Dolphins win (${totalDolphins} vs. ${totalKoalas})`
    : avgKoalas / avgDolhins > 2
    ? `Koalas win (${totalKoalas} vss. ${totalDolphins})`
    : `Draw: (${totalKoalas} vs. ${totalDolphins})`;
};

console.log('Scenario[1]: ' + checkWinner([44, 23, 71], [65, 54, 49]));
console.log('Scenario[2]: ' + checkWinner([85, 54, 41], [23, 34, 27]));

//challenge #2
function tipCalc(bill) {
  return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [275, 40, 430];
const tips = [];
const totals = [];

for (i = 0; i < bills.length; i++) {
  tips[i] = tipCalc(bills[i]);
  totals[i] = tips[i] + bills[i];
  console.log(`tip is ${tips[i]} for bill ${bills[i]}`);
}

console.log(totals, bills, tips);

//challange #3

const bmiMark = {
    fullName: 'Mark Miller',
    heigth: 1.69,
    mass: 78,
    bmi: function () {
      return Math.round(this.mass / (this.heigth * 2));
    },
  },
  bmiJohn = {
    fullName: 'John Smith',
    heigth: 1.95,
    mass: 92,
    bmi: function () {
      return Math.round(this.mass / (this.heigth * 2));
    },
  };

console.log(bmiMark.bmi());
console.log(bmiJohn.bmi());

//challange #4
const arrBills = [];

for (i = 0, len = 10; i < len; i++) {
  arrBills[i] = Math.round(300 * Math.random());
}
console.log(arrBills);

const aBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function tipCalc(bill) {
  return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
}
const aTips = [],
  aTotals = [];

for (i = 0; i < aBills.length; i++) {
  aTips[i] = tipCalc(aBills[i]);
  aTotals[i] = aTips[i] + aBills[i];
}

console.debug(aBills, aTips, aTotals);

//challange #4
const data1 = [17, 21, 23],
  data2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let comm = '';
  for (i = 0; i < arr.length; i++) comm += `${arr[i]}st. C in ${i + 1}days, `;
  console.log(comm);
};

printForecast(data1);
printForecast(data2);
