import _ from 'lodash';

function cloneDeep(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!_.isObject(value)) {
      result[key] = value;
    } else {
      result[key] = cloneDeep(value);
    }
  }
  return result;
}

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// result имеет такую же структуру, как и data
const result = cloneDeep(data);
console.log(result);

// Но внутри другие объекты
console.log(result.key2 !== data.key2); // true
console.log(result.key2.innerKey !== data.key2.innerKey); // true
