// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход историю
// подбрасывания кубика в виде массива и возвращает объект. Ключом этого объекта
// служит число из списка, а значением – ещё один объект, в котором ключи – это числа,
// выпавшие сразу после первоначального числа, а значения – вероятность их выпадения.

export default throws => {
  const len = throws.length;
  const result = {};
  const nextElementsCounts = {};

  throws.forEach(elem => {
    result[elem] = {};
    nextElementsCounts[elem] = {};
  });

  for (let i = 0; i < len; i += 1) {
    const cur = throws[i];
    const next = throws[i + 1];

    if (next) {
      nextElementsCounts[cur][next] = nextElementsCounts[cur][next]
        ? nextElementsCounts[cur][next] + 1
        : 1;
    }
  }

  for (let i = 0; i < len; i += 1) {
    const cur = throws[i];
    const next = throws[i + 1];

    if (next) {
      const totalCount = Object.values(nextElementsCounts[cur]).reduce(
        (acc, count) => acc + count,
        0,
      );
      result[cur][next] = nextElementsCounts[cur][next] / totalCount;
    }
  }

  return result;
};
