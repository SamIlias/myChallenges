import _ from 'lodash';

export function hexToRgb(colorStr) {
  const extractedNums = colorStr.slice(1).split('');
  const [red, green, blue] = _.chunk(extractedNums, 2)
    .map(elem => elem.join(''))
    .map(elem => parseInt(elem, 16));

  return { r: red, g: green, b: blue };
}

export function rgbToHex(r, g, b) {
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');

  return `#${hexR}${hexG}${hexB}`;
}

// export const rgbToHex = (r, g, b) => {
//   const hex = [r, g, b]
//     .map((channel) => channel.toString(16).padStart(2, '0'))
//     .join('');
//   return `#${hex}`;
// };

console.log(hexToRgb('#24ab00')); // { r: 36, g: 171, b: 0 }

console.log(rgbToHex(36, 171, 0)); // '#24ab00'

// tests=============================================
// import { rgbToHex, hexToRgb } from '../solution.js';

// const colors = [
//   ['#000000', { r: 0, g: 0, b: 0 }],
//   ['#ffffff', { r: 255, g: 255, b: 255 }],
//   ['#00840c', { r: 0, g: 132, b: 12 }],
//   ['#24ab00', { r: 36, g: 171, b: 0 }],
//   ['#543fab', { r: 84, g: 63, b: 171 }],
//   ['#f700de', { r: 247, g: 0, b: 222 }],
//   ['#c60123', { r: 198, g: 1, b: 35 }],
// ];

// describe('convert hex to rgb', () => {
//   test.each(colors)('testing #%#', (hex, rgb) => {
//     expect(hexToRgb(hex)).toEqual(rgb);
//   });
// });

// describe('convert rgb to hex', () => {
//   test.each(colors)('testing #%#', (hex, { r, g, b }) => {
//     expect(rgbToHex(r, g, b)).toEqual(hex);
//   });
// });
