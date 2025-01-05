import _ from 'lodash';

const rotateLeft = matrix => {
  const res = [];
  const lengthCol = matrix.length;
  const lengthLine = matrix[0].length;
  for (let j = lengthLine - 1; j >= 0; j -= 1) {
    const resLine = [];
    for (let i = 0; i < lengthCol; i += 1) {
      resLine.push(matrix[i][j]);
    }

    res.push(resLine);
  }

  return res;
};

const buildSnailPath = matrix => {
  let arr = [...matrix];
  const result = [];

  while (arr.length > 0) {
    const firstLine = arr.splice(0, 1);

    result.push(...firstLine);

    if (arr.length) {
      arr = rotateLeft(arr);
    }
  }

  return _.flatten(result);
};

console.log(
  buildSnailPath([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
);
