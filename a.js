// Returns a frog of random sex.
const getRandomFrog = () => Math.random() > 0.5 ? 'm' : 'f';

// Returns a random pair of frogs.
const getRandomFrogPair = () => getRandomFrog() + getRandomFrog();

// Get a million pairs.
const population = [...Array(1000000)].map(getRandomFrogPair);

// Calculate the distribution.
const result = population.reduce((res, pair) => {
  res[pair] ? res[pair]++ : res[pair] = 1;

  return res;
}, {});

console.log(result); // Sample output: { fm: 249421, mf: 249942, ff: 249685, mm: 250952 }
