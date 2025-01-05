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

// ==============================================
console.log(ipToInt('128.32.10.1')); // 2149583361
console.log(ipToInt('0.0.0.0')); // 0
console.log(ipToInt('255.255.255.255')); // 4294967295

console.log(intToIp(2149583361)); // '128.32.10.1'
console.log(intToIp(0)); // '0.0.0.0'
console.log(intToIp(4294967295)); // '255.255.255.255'
