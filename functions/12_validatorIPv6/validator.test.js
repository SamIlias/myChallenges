import isValidIPv6 from './validator';

test('isValidIPv6', () => {
  expect(isValidIPv6('10:d3:2d06:24:400c:5ee0:be:3d')).toEqual(true);
  expect(isValidIPv6('0B0:0F09:7f05:e2F3:0D:0:e0:7000')).toEqual(true);
  expect(isValidIPv6('::1')).toEqual(true);
  expect(isValidIPv6('00:0000:1::0001')).toEqual(true);
  expect(isValidIPv6('::')).toEqual(true);
  expect(isValidIPv6('0000::')).toEqual(true);

  expect(isValidIPv6('2.01::')).toEqual(false);
  expect(isValidIPv6('10:S3:20d6:24:400c:5ee0:be:3d')).toEqual(false);
  expect(isValidIPv6('::23::')).toEqual(false);
  expect(isValidIPv6('1:2:3:4:5::6:7:8')).toEqual(false);
});
