function buildQueryString(params) {
  const res = [];
  const sortedKeys = Object.keys(params).sort();

  sortedKeys.forEach((key) => {
    const value = params[key]; // const value = params.key;
    const queryString = `${key}=${value}`;
    res.push(queryString);
  });

  return res.join('&');
}

console.log(buildQueryString({ per: 10, page: 1 }));
// page=1&per=10
console.log(buildQueryString({ param: 'all', param1: true }));
// param=all&param1=true
