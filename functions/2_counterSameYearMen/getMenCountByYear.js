export default (users = []) => {
  const result = {};

  const men = users.filter(user => user.gender === 'male');
  men.forEach(user => {
    const year = user.birthday.slice(0, 4);
    result[year] = result[year] ? result[year] + 1 : 1;
  });

  return result;
};
