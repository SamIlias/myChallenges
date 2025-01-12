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
