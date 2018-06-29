// Returns a sex at random.
const getRandomSex = () => Math.random() > 0.5 ? 'm' : 'f';

// Returns a frog of random sex.
const getRandomFrog = () => ({sex: getRandomSex()});

// Returns random item from a list.
const randomArrayElement = array => array[Math.floor(Math.random() * array.length)];

// Returns a random pair of frogs.
// If at least one frog is male, force it to croak.
const getRandomFrogPair = () => {
  const a = getRandomFrog();
  const b = getRandomFrog();

  // If we have at least one male frog, make one of them, selected at random, croak.
  const maleFrogs = [a, b].filter(f => f.sex === 'm');

  if (maleFrogs.length) {
    randomArrayElement(maleFrogs).croaked = true;
  }

  // Peak and find out which frog croaked.
  if (a.croaked) {
    // Okay, now we know that frog A croaked. So what?
  } else {
    // Okay, now we know that frog B croaked. So what?
  }

  return [a, b];
}

// Get a million pairs.
const population = [...Array(1000000)].map(() => getRandomFrogPair());

// Calculate the distribution.
const result = population.reduce((res, pair) => {
  const str = pair[0].sex + pair[1].sex;
  res[str] ? res[str]++ : res[str] = 1;

  return res;
}, {});

console.log(result); // Sample output: { mm: 249809, fm: 250031, mf: 249690, ff: 250470 }
