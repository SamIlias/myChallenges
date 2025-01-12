import * as url from './URLHandler.js';

const myUrl = url.make('https://example.com/?dfd=1');

console.log(url.toString(myUrl));
