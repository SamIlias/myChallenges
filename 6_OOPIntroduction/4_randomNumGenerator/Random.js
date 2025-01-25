// Реализуйте генератор случайных чисел, представленный классом Random. Интерфейс
// объекта включает в себя три функции:
//
//     Конструктор. Принимает на вход seed, начальное число генератора псевдослучайных
//     чисел.
//     getNext() — метод, возвращающий новое случайное число.
//     reset() — метод, сбрасывающий генератор на начальное значение.
//
// Экспортируйте класс по умолчанию.
// Простейший способ реализовать случайные числа — линейный конгруэнтный метод.

export default class Random {
  constructor(seed) {
    this.startVal = seed;
    this.current = this.startVal;
    this.a = seed;
    this.c = seed;
    this.m = 2 ** 6;
  }

  getNext() {
    this.current = (this.a * this.current + this.c) % this.m;
    return this.current;
  }

  reset() {
    this.current = this.startVal;
  }
}
