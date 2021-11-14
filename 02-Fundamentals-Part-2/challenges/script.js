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
