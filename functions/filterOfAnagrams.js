function isAnagram(word1, word2) {
  const map = {};
  for (const elem of word1) {
    map[elem] = map[elem] ? map[elem] + 1 : 1;
  }

  for (const elem of word2) {
    map[elem] = map[elem] ? map[elem] - 1 : -1;
  }

  for (const value of Object.values(map)) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
}

function filterAnagrams(word, checklist) {
  return checklist.filter(elem => isAnagram(word, elem));
}

// Решение учителя
export default (word, words) => {
  const normalize = str => str.split('').sort().join('');
  const normal = normalize(word);

  return words.filter(item => normalize(item) === normal);
};

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']

console.log(
  filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']),
);
// ['carer', 'racer']

console.log(filterAnagrams('laser', ['lazing', 'lazy', 'lacer']));
// []
