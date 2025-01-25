// Реализуйте класс SquaresGenerator со статическим методом generate(), принимающим
// два параметра: сторону и количество экземпляров квадрата (по умолчанию 5 штук),
// которые нужно создать. Функция должна вернуть массив из квадратов. Экспортируйте
// класс по умолчанию.

import Square from './Square';

export default class SquaresGenerator {
  static generate(side, amount = 5) {
    const result = [];
    for (let i = 1; i <= amount; i += 1) {
      const square = new Square(side);
      result.push(square);
    }

    return result;
  }
}
