export default array => {
  const result = [];
  const iter = (acc, arr) => {
    arr.forEach(item => {
      if (!Array.isArray(item)) {
        acc.push(item);
      } else {
        iter(acc, item);
      }
    });
  };
  iter(result, array);

  return result;
};
