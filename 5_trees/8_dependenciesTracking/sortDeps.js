// Управление зависимостями - это очень важная задача при разработке программного
// обеспечения. Обычно в приложениях задействовано множество сторонних компонентов,
// которые, в свою очередь, тоже могут полагаться на сторонние компоненты. Одной
// из задач менеджера зависимостей является подключение зависимостей в правильном
// порядке. Библиотеки, от которых зависят другие, должны подключаться раньше. Определение
// этой последовательности сводится к задаче сортировки графа.

// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список
// зависимостей и возвращает список (массив) отсортированных узлов.

const hasDeps = (deps, item) => {
  return !!deps[item] && deps[item].length > 0;
};

const isWritten = (res, item) => {
  return res.includes(item);
};

const writeIfNotWrittenYet = (res, item) => {
  if (!isWritten(res, item)) {
    res.push(item);
  }
};

export default deps => {
  const result = [];
  const iter = (res, item, depsList) => {
    if (!hasDeps(depsList, item)) {
      writeIfNotWrittenYet(res, item);
    } else {
      const subDeps = depsList[item];
      subDeps.forEach(sub => {
        iter(res, sub, depsList);
      });
      writeIfNotWrittenYet(res, item);
    }
  };

  const items = Object.keys(deps);
  items.forEach(item => {
    iter(result, item, deps);
  });

  return result;
};
