export default function scrabble(string, word) {
  const charsSet = {};
  for (let i = 0; i < string.length; i += 1) {
    const prev = charsSet[string[i]];
    charsSet[string[i]] = prev ? prev + 1 : 1;
  }

  const normWord = word.toLowerCase();
  for (let i = 0; i < normWord.length; i += 1) {
    const cur = charsSet[normWord[i]];
    charsSet[normWord[i]] = cur ? cur - 1 : -1;
  }

  for (const value of Object.values(charsSet)) {
    if (value < 0) {
      return false;
    }
  }

  return true;
}

console.log(scrabble('rkqodlw', 'world')); // true
console.log(scrabble('avj', 'java')); // false
console.log(scrabble('avjafff', 'java')); // true
console.log(scrabble('', 'hexlet')); // false
console.log(scrabble('scriptingjava', 'JavaScript')); // true
