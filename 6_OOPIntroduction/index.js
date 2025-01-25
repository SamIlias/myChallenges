function Company(name) {
  this.name = name;
}

Company.prototype.getName = function getName() {
  // this по-прежнему зависит от контекста, в котором вызывается
  return this.name;
};

const company = new Company('Hexlet');
// Свойство доступно!

const company1 = new Company('Google');
company1.getName = function getName() {
  return 'Edem';
};
console.log(company.getName()); // => Hexlet
console.log(company1.getName()); // => Hexlet
