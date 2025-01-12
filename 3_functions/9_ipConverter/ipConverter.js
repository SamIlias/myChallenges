// Реализуйте и экспортируйте функции ipToInt() и intToIp(), которые преобразовывают
// представление IP-адреса из десятичного формата с точками в 32-битное число в десятичной
// форме и обратно.

// Функция ipToInt() принимает на вход строку и должна возвращать число. А функция
// intToIp() наоборот: принимает на вход число, а возвращает строку.

import _ from 'lodash';

export const ipToInt = ip => {
  return ip
    .split('.')
    .map((elem, i) => elem * 256 ** (3 - i))
    .reduce((acc, elem) => acc + elem, 0);
};

export const intToIp = int => {
  const binaryNorm = int.toString(2).padStart(32, '0');
  const octets = _.chunk(binaryNorm.split(''), 8);
  return octets
    .map(elem => elem.join(''))
    .map(elem => parseInt(elem, 2))
    .join('.');
};
