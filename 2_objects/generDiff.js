function isEquelObjects(value1, value2) {
  if (typeof value1 === 'object' && typeof value2 === 'object') {
    for (const key of Object.keys(value1)) {
      isEquelObjects(value1[key], value2[key]);
    }
  }
  return value1 === value2;
}

export default function genDiff(obj1, obj2) {
  const res = {};
  const keys = [...Object.keys(obj1), ...Object.keys(obj2)];
  for (const key of keys) {
    if (isEquelObjects(obj1[key], obj2[key])) {
      res[key] = 'unchanged';
    } else if (obj1[key] === undefined) {
      res[key] = 'added';
    } else if (obj2[key] === undefined) {
      res[key] = 'deleted';
    } else {
      res[key] = 'changed';
    }
  }
  return res;
}

console.log(
  genDiff(
    { one: 'eon', two: 'two', four: true },
    { two: 'own', zero: 4, four: true },
  ),
);
