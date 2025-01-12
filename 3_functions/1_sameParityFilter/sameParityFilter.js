// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
// массив и возвращает новый, состоящий из элементов, у которых такая же чётность,
// как и у первого элемента входного массива.

const isEven = num => Math.abs(num) % 2 === 0;

export default function sameParityFilter(coll) {
  const firstElParity = isEven(coll[0]);
  return coll.filter(elem => isEven(elem) === firstElParity);
}
