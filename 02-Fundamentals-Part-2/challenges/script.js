//challenge #1

const calcAvarage = (args) => {
  let result = 0;
  for (i = 0; i < args.length; i++) result += args[i];

  return result / args.length;
};
const calcTotal = (args) => {
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

console.log("Scenario[1]: " + checkWinner([44, 23, 71], [65, 54, 49]));
console.log("Scenario[2]: " + checkWinner([85, 54, 41], [23, 34, 27]));

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
    fullName: "Mark Miller",
    heigth: 1.69,
    mass: 78,
    bmi: function () {
      return Math.round(this.mass / (this.heigth * 2));
    },
  },
  bmiJohn = {
    fullName: "John Smith",
    heigth: 1.95,
    mass: 92,
    bmi: function () {
      return Math.round(this.mass / (this.heigth * 2));
    },
  };

console.log(bmiMark.bmi());
console.log(bmiJohn.bmi());
