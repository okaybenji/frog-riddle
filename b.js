// Returns a frog of random sex.
const getRandomFrog = () => Math.random() > 0.5 ? 'm' : 'f';

// Returns a random pair of frogs.
// Never returns 'ff'.
const getRandomFrogPair = () => {
  const pair = getRandomFrog() + getRandomFrog();

  if (pair === 'ff') {
    return getRandomFrogPair();
  }

  return pair;
}

// Get a million pairs.
const population = [...Array(1000000)].map(() => getRandomFrogPair());

// Calculate the distribution.
const result = population.reduce((res, pair) => {
  res[pair] ? res[pair]++ : res[pair] = 1;

  return res;
}, {});

console.log(result); // Sample output: { fm: 333675, mm: 333232, mf: 333093 }
