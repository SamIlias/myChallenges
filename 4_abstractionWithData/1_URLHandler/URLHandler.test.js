import * as url from './URLHandler';

test('URLHandler test', () => {
  const myUrl = url.make('https://example.com/?dfd=1');
  expect(url.toString(myUrl)).toEqual('https://example.com/?dfd=1');

  url.setProtocol(myUrl, 'ftp');
  expect(url.toString(myUrl)).toEqual('ftp://example.com/?dfd=1');
  expect(url.getProtocol(myUrl)).toEqual('ftp:');

  url.setHost(myUrl, 'newHost.com');
  expect(url.toString(myUrl)).toEqual('ftp://newhost.com/?dfd=1');
  expect(url.getHost(myUrl)).toEqual('newhost.com');

  url.setPath(myUrl, 'newPath/folder');
  expect(url.toString(myUrl)).toEqual('ftp://newhost.com/newPath/folder?dfd=1');
  expect(url.getPath(myUrl)).toEqual('/newPath/folder');

  url.setQueryParam(myUrl, 'key', 'value');
  expect(url.toString(myUrl)).toEqual(
    'ftp://newhost.com/newPath/folder?dfd=1&key=value',
  );
  expect(url.getQueryParam(myUrl, 'key', null)).toEqual('value');
});
