import calculateProbabilities from './probabilities';

test('calculateProbabilities', () => {
  const throws1 = [1, 3, 1, 5, 1];
  expect(calculateProbabilities(throws1)).toEqual({
    1: { 3: 0.5, 5: 0.5 },
    3: { 1: 1 },
    5: { 1: 1 },
  });

  const throws2 = [1, 3, 1, 5, 1, 2, 1, 6];
  expect(calculateProbabilities(throws2)).toEqual({
    1: {
      2: 0.25,
      3: 0.25,
      5: 0.25,
      6: 0.25,
    },
    2: { 1: 1 },
    3: { 1: 1 },
    5: { 1: 1 },
    6: {},
  });

  const throws3 = [];
  expect(calculateProbabilities(throws3)).toEqual({});
});
