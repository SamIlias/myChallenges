const isValidField = field => {
  for (let i = 0; i < field.length - 1; i += 1) {
    for (let j = 0; j < field[0].length; j += 1) {
      const cur = field[i][j];
      if (cur === 1) {
        const leftDiagEl = field[i + 1][j - 1];
        const rightDiagEl = field[i + 1][j + 1];
        if (cur === leftDiagEl || cur === rightDiagEl) {
          return false;
        }
      }
    }
  }

  return true;
};

const calcShipsCount = field => {
  let count = 0;
  for (let i = 0; i < field.length; i += 1) {
    for (let j = 0; j < field[0].length; j += 1) {
      const cur = field[i][j];
      if (cur === 1) {
        let wasCounted;
        let prevUp;

        if (i === 0) {
          prevUp = 0;
        } else {
          prevUp = field[i - 1][j];
        }

        const prevLeft = field[i][j - 1];

        if (prevUp === 1 || prevLeft === 1) {
          wasCounted = true;
        }

        if (!wasCounted) {
          count += 1;
        }
      }
    }
  }

  return count;
};

console.log(
  isValidField([
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [0, 0, 0, 0],
    [0, 1, 1, 1],
  ]),
);

console.log(
  calcShipsCount([
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 0],
  ]),
);

// const field = [
//   [0, 1, 0, 0, 0, 0],
//   [0, 1, 0, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 0, 1],
//   [0, 0, 0, 0, 0, 1],
//   [1, 1, 0, 1, 0, 0],
// ];

// console.log(field[1][-1])
