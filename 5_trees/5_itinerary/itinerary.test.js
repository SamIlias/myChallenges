import itinerary from './itinerary';

test('5_trees: itinerary test', () => {
  const tree1 = [
    'Moscow',
    [
      ['Smolensk'],
      ['Yaroslavl'],
      [
        'Voronezh',
        [
          ['Liski'],
          ['Boguchar'],
          ['Kursk', [['Belgorod', [['Borisovka']]], ['Kurchatov']]],
        ],
      ],
      ['Ivanovo', [['Kostroma'], ['Kineshma']]],
      ['Vladimir'],
      ['Tver', [['Klin'], ['Dubna'], ['Rzhev']]],
    ],
  ];

  expect(itinerary(tree1, 'Dubna', 'Kostroma')).toEqual([
    'Dubna',
    'Tver',
    'Moscow',
    'Ivanovo',
    'Kostroma',
  ]);

  expect(itinerary(tree1, 'Borisovka', 'Kurchatov')).toEqual([
    'Borisovka',
    'Belgorod',
    'Kursk',
    'Kurchatov',
  ]);

  expect(() => itinerary(tree1, 'notExistedStart', 'Kurchatov')).toThrow(
    'start point does not exist',
  );

  expect(() => itinerary(tree1, 'Kurchatov', 'notExistedEnd')).toThrow(
    'end point does not exist',
  );
});
