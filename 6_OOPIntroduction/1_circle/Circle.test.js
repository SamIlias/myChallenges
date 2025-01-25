import Circle from './Circle';

test('6_OOPIntroduction: Circle class test', () => {
  const radius = 10;
  const circle = new Circle(radius);

  expect(circle.getArea()).toEqual(Math.PI * radius ** 2);
  expect(circle.getCircumference()).toEqual(2 * Math.PI * radius);
});
