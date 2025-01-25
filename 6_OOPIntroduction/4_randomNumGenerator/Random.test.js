import Random from './Random';

test('6_OOPIntroduction: randomGenerator test', () => {
  const seq = new Random(9);
  const res1 = seq.getNext();
  const res2 = seq.getNext();
  seq.reset();
  const res21 = seq.getNext();
  const res22 = seq.getNext();

  expect(res1 !== res2).toEqual(true);
  expect(res1 === res21).toEqual(true);
  expect(res2 === res22).toEqual(true);
});
