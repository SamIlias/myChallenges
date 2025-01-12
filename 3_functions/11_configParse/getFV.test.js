import getForwardedVariables from './getForwardedVariables';

test('getForwardedVariables', () => {
  const config = `[program:prepare]
  command=sudo -HEu tirion /bin/bash -c 'cd /usr/src/app && make prepare'
  autorestart=false
  environment="X_FORWARDED_MAIL=tirion@google.com,X_FORWARDED_HOME=/home/tirion,language=en"

  [program:http_server]
  command=sudo -HEu tirion /bin/bash -c 'cd /usr/src/app && make environment'
  environment="key5=value5,X_FORWARDED_var3=value,key6=value6"`;

  const expected1 = 'MAIL=tirion@google.com,HOME=/home/tirion,var3=value';
  expect(getForwardedVariables(config)).toEqual(expected1);
});
