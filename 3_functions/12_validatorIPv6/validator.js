// Реализуйте функцию-предикат isValidIPv6(), которая проверяет IPv6-адреса (адреса
// шестой версии интернет протокола) на корректность. Функция принимает на вход строку
// с адресом IPv6 и возвращает true, если адрес корректный, а в противном случае
// false. Экспортируйте функцию по умолчанию.

// Дополнительные условия:

// Работа функции не зависит от регистра символов
// Ведущие нули в группах цифр необязательны
// Самая длинная последовательность групп нулей, например, :0:0:0: может быть заменена
// на два двоеточия ::. Такую замену можно произвести только один раз

export default str => {
  const regColon = /::/g;
  const doubleColonMatches = str.match(regColon)
    ? str.match(regColon).length
    : 0;
  if (doubleColonMatches > 1) {
    return false;
  }
  const zerrosMinCount = doubleColonMatches;

  const groups = str
    .split('::')
    .filter(item => item !== '')
    .join(':')
    .split(':');
  if (groups.length > 8 - zerrosMinCount) {
    return false;
  }

  const regIPv6 = /^[a-f0-9]{0,4}$/i;
  let result = true;
  groups.forEach(group => {
    if (!regIPv6.test(group)) {
      result = false;
    }
  });
  return result;
};
