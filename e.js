// Returns a sex at random.
const getRandomSex = () => Math.random() > 0.5 ? 'm' : 'f';

// Returns a frog of random sex.
const getRandomFrog = () => ({sex: getRandomSex()});

// Returns random item from a list.
const randomArrayElement = array => array[Math.floor(Math.random() * array.length)];

/**
 * Returns a random pair of frogs.
 * If at least one frog is male, force it to croak.
 * Only returns pairs with at least one male and in which frog A croaked.
 */
const getRandomFrogPair = () => {
  const a = getRandomFrog();
  const b = getRandomFrog();

  if (a.sex === 'f' && b.sex === 'f') {
    return getRandomFrogPair(); // Two females. Toss these frogs and pick again.
  }

  // We know we have at least one male frog.
  // Let's pick one male frog at random and make it croak.
  const maleFrogs = [a, b].filter(frog => frog.sex === 'm');
  randomArrayElement(maleFrogs).croaked = true;

  // Peak and find out which frog croaked.
  if (!a.croaked) {
    return getRandomFrogPair(); // Frog A wasn't the one who croaked. Toss these frogs and pick again.
  }

  /**
   * If we made it this far, we know:
   * 1) We have two frogs.
   * 2) At least one of them is male.
   * 3) One of them croaked.
   * 4) The one that croaked is the one on the left!
   * Let's keep these frogs.
   */
  return [a, b];
}

// Get a million pairs.
const population = [...Array(1000000)].map(getRandomFrogPair);

// Calculate the distribution.
const result = population.reduce((res, pair) => {
  const str = pair[0].sex + pair[1].sex;
  res[str] ? res[str]++ : res[str] = 1;

  return res;
}, {});

console.log(result); // Sample output: { mf: 667240, mm: 332760 }

// It's always the frog on the left that croaks, and yet we still have female frogs in twice as many pairs!
