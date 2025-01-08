const wasCounted = (field, line, col) => {
  const prevColItem = field[line][col - 1] ? field[line][col - 1] : null;
  if (prevColItem === 1) {
    return true;
  }

  const prevLine = field[line - 1] ? field[line - 1] : null;
  const curLine = field[line];

  const iter = colIter => {
    if (!curLine[colIter]) {
      return false;
    }

    const prevLineItem = prevLine ? prevLine[colIter] : null;
    if (prevLineItem === 1) {
      return true;
    }

    return iter(colIter + 1);
  };
  return iter(col);
};

export default field => {
  let count = 0;

  for (let line = 0; line < field.length; line += 1) {
    for (let col = 0; col < field[line].length; col += 1) {
      const curItem = field[line][col];
      if (curItem === 'undefined') {
        return count;
      }

      if (curItem === 1 && !wasCounted(field, line, col)) {
        count += 1;
      }
    }
  }

  return count;
};
