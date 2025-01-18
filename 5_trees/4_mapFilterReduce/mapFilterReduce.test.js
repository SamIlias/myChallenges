import * as mfr from './mapFilterReduce';
import * as fs from '../fileSystemTree/fileSystemTree.js';

test('5_trees: mapFilterReduce test', () => {
  const tree1 = {
    name: '/',
    type: 'directory',
    meta: { set: 3 },
    children: [
      { name: 'config3.json', type: 'file', meta: { set: 2 } },
      {
        name: 'etc',
        type: 'directory',
        meta: { set: 3 },
        children: [
          { name: 'config.json', type: 'file', meta: { set: 3 } },
          {
            name: 'config',
            type: 'directory',
            meta: {},
            children: [{ name: 'config2.json', type: 'file', meta: {} }],
          },
        ],
      },
    ],
  };

  expect(
    mfr.map(n => ({ ...n, name: fs.getName(n).toUpperCase() }), tree1),
  ).toEqual({
    name: '/',
    type: 'directory',
    meta: { set: 3 },
    children: [
      { name: 'CONFIG3.JSON', type: 'file', meta: { set: 2 } },
      {
        name: 'ETC',
        type: 'directory',
        meta: { set: 3 },
        children: [
          { name: 'CONFIG.JSON', type: 'file', meta: { set: 3 } },
          {
            name: 'CONFIG',
            type: 'directory',
            meta: {},
            children: [{ name: 'CONFIG2.JSON', type: 'file', meta: {} }],
          },
        ],
      },
    ],
  });

  expect(mfr.filtered(n => n.meta.set === 3, tree1)).toEqual({
    name: '/',
    type: 'directory',
    meta: { set: 3 },
    children: [
      {
        name: 'etc',
        type: 'directory',
        meta: { set: 3 },
        children: [{ name: 'config.json', type: 'file', meta: { set: 3 } }],
      },
    ],
  });

  expect(
    mfr.reduce(
      (acc, n) => {
        acc.push(n.name);
        return acc;
      },
      tree1,
      [],
    ),
  ).toEqual([
    '/',
    'config3.json',
    'etc',
    'config.json',
    'config',
    'config2.json',
  ]);
});
