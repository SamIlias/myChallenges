// Реализуйте и экспортируйте по умолчанию функцию, которая выводит на экран столбчатую
// диаграмму. Функция принимает в качестве параметра последовательность чисел, длина
// которой равна количеству столбцов диаграммы. Размер диаграммы по вертикали должен
// определяться входными данными.

const fillFromBase = (num, base, maxIndex) => {
  const res = [];
  for (let i = 0; i <= maxIndex; i += 1) {
    res[i] = ' ';
  }

  if (num > 0) {
    let temp = num;
    for (let line = base; line >= 0; line -= 1) {
      res[line] = temp > 0 ? '*' : ' ';
      temp -= 1;
    }
  }
  if (num < 0) {
    let temp = -num;
    for (let line = base + 1; line <= maxIndex; line += 1) {
      res[line] = temp > 0 ? '#' : ' ';
      temp -= 1;
    }
  }
  return res;
};

export default nums => {
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  let baseLineIndex;
  let lastLineIndex;

  if (min < 0 && max > 0) {
    baseLineIndex = max - 1;
    lastLineIndex = baseLineIndex + Math.abs(min);
  }
  if (min > 0 && max > 0) {
    baseLineIndex = max - 1;
    lastLineIndex = baseLineIndex;
  }
  if (max < 0) {
    baseLineIndex = 0;
    lastLineIndex = Math.abs(min);
  }

  const result = nums
    .map(num => fillFromBase(num, baseLineIndex, lastLineIndex))
    .reduce(
      (acc, bar) => {
        for (let line = 0; line <= lastLineIndex; line += 1) {
          acc[line].push(bar[line]);
        }
        return acc;
      },
      Array.from({ length: lastLineIndex + 1 }, () => []),
    )
    .map(line => line.join(''));

  result.forEach(str => console.log(str));
};
