/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив чисел и искомое число. Задача функции — найти в массиве ближайшее число к искомому и вернуть его индекс в массиве.

Если в массиве содержится несколько чисел, одновременно являющихся ближайшими к искомому числу, то возвращается наименьший из индексов ближайших чисел.
*/

export default function findIndexOfNearest(coll, num) {
  if (coll.length === 0) {
    return null;
  }

  const diffs = coll.map(elem => Math.abs(num - elem));

  return diffs.reduce(
    (index, diff, curIndex) => (diff < diffs[index] ? curIndex : index),
    0,
  );
}

//= ==================================
console.log(findIndexOfNearest([], 2)); // null
console.log(findIndexOfNearest([15, 10, 3, 4], 0)); // 2
console.log(findIndexOfNearest([7, 5, 3, 2], 4)); // 1
console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4)); // 2
