// Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку
// задом наперед, используя рекурсию.
//
// Например:
//
// import reverse from './reverse';
//
// reverse('str');    // rts
// reverse('hexlet'); // telxeh
//
// Попробуйте решить эту задачу, используя рекурсивный процесс. Для этого вам понадобится
// метод slice().

export default function reverse(string) {
  if (string === undefined) {
    throw new Error('the string must be passed');
  }

  const len = string.length;
  if (len === 0) {
    return '';
  }

  if (len === 1) {
    return string;
  }

  const firstChar = string.slice(0, 1);
  const restChars = string.slice(1, len);
  return reverse(restChars) + firstChar;
}
