const digitMap = {
  thousands: ['M', '5M', '10M'],
  hundreds: ['C', 'D', 'M'],
  tens: ['X', 'L', 'C'],
  units: ['I', 'V', 'X'],
};

const getRomanDigit = (num, digit) => {
  const [one, five, ten] = digitMap[digit];

  const numMap = {
    1: `${one}`,
    2: `${one}${one}`,
    3: `${one}${one}${one}`,
    4: `${one}${five}`,
    5: `${five}`,
    6: `${five}${one}`,
    7: `${five}${one}${one}`,
    8: `${five}${one}${one}${one}`,
    9: `${one}${ten}`,
  };

  return numMap[num];
};

function toRoman(num) {
  const result = [];
  const [units, tens, hundreds, thousands] = num.toString().split('').reverse();
  result.push(
    getRomanDigit(thousands, 'thousands'),
    getRomanDigit(hundreds, 'hundreds'),
    getRomanDigit(tens, 'tens'),
    getRomanDigit(units, 'units'),
  );

  return result.join('');
}

// console.log(toRoman(19));

const arabicMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function toArabic(num) {
  const regInvalid = /VV|IIII|VX|IIX|IIV/;
  console.log(num.match(regInvalid));
  if (num.match(regInvalid)) {
    return false;
  }

  let res = 0;
  for (let i = num.length - 1; i >= 0; i -= 1) {
    const current = num[i];
    const previous = num[i + 1];
    if (arabicMap[previous] > arabicMap[current]) {
      res -= arabicMap[current];
    } else {
      res += arabicMap[current];
    }
  }

  return res;
}

console.log(toArabic('XXIV'));
