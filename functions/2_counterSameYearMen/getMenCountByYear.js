// Реализуйте и экспортируйте по умолчанию функцию, которая принимает список
// пользователей и возвращает объект, где ключ - это год рождения, а значение -
// это количество мужчин, родившихся в этот год.

export default (users = []) => {
  const result = {};

  const men = users.filter(user => user.gender === 'male');
  men.forEach(user => {
    const year = user.birthday.slice(0, 4);
    result[year] = result[year] ? result[year] + 1 : 1;
  });

  return result;
};
