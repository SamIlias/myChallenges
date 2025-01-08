import { ipToInt, intToIp } from './ipConverter';

test('ipToInt converter test', () => {
  expect(ipToInt('128.32.10.1')).toEqual(2149583361);
  expect(ipToInt('0.0.0.0')).toEqual(0);
  expect(ipToInt('255.255.255.255')).toEqual(4294967295);
});

test('intToIp converter test', () => {
  expect(intToIp(2149583361)).toEqual('128.32.10.1');
  expect(intToIp(0)).toEqual('0.0.0.0');
  expect(intToIp(4294967295)).toEqual('255.255.255.255');
});
