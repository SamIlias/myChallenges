function getUniqValueArr(arr) {
  return arr.filter((value, i, self) => i === self.indexOf(value));
}

export default function merge(...args) {
  const res = {};
  args.forEach(elem => {
    Object.entries(elem).forEach(([key, value]) => {
      if (res[key]) {
        res[key].push(value);
      } else {
        res[key] = [value];
      }

      res[key] = getUniqValueArr(res[key]);
    });
  });

  return res;
}

// ===================================================
console.log(merge({}, {}, {}));
// {}

console.log(merge({ a: 1, b: 2 }, { a: 3 }));
// { a: [1, 3], b: [2] }

console.log(
  merge(
    { a: 1, b: 2, c: 3 },
    {},
    { a: 3, b: 2, d: 5 },
    { a: 6 },
    { b: 4, c: 3, d: 2 },
    { e: 9 },
  ),
);
// { a: [1, 3, 6], b: [2, 4], c: [3], d: [5, 2], e: [9] }
