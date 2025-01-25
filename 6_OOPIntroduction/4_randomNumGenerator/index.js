import Random from './Random.js';

const unique = arr => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
const seq = new Random(5);

const result = [];

for (let i = 1; i < 25; i += 1) {
  result.push(seq.getNext());
}

console.log(result.length === unique(result).length);
