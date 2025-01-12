const fromPairs = (arr) => {
  const result = {};

  for (const [key, val] of arr) {
    result[key] = val;
  }
  return result;
};

console.log(
  fromPairs([
    ['cat', 5],
    ['dog', 6],
    ['cat', 11],
  ]),
);
// { 'cat': 11, 'dog': 6 }

console.log(
  fromPairs([
    ['fred', 30],
    ['barney', 40],
  ]),
);
// { 'fred': 30, 'barney': 40 }
