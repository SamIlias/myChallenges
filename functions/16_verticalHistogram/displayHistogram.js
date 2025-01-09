// Игральная кость — шестигранный кубик, который бросается несколько раз. Гистограмма
// — это графическое представление данных в виде столбцов или колонок.

//

// Реализуйте и экспортируйте по умолчанию функцию, которая выводит на экран вертикальную
// гистограмму. Функция принимает на вход количество бросков кубика и функцию, которая
// имитирует бросок игральной кости (её реализовывать не нужно). Вызов этой функции
// генерирует значение от 1 до 6, что соответствует одной из граней игральной кости.

//

// Гистограмма содержит столбцы, каждому из которых соответствует грань игральной
// кости и количество выпадений этой грани. Результаты отображаются графически (с
// помощью символов #) и в виде процентного значения от общего количества бросков,
// за исключением случаев, когда количество равно 0 (нулю).
//
// Дополнительные условия:
//
//     Процентные значения должны быть прижаты влево относительно столбца.
//     Значения сторон игральной кости должны быть посредине столбца.
//     Столбцы между собой разделены пробелом
//     Количество секций в столбце (высота столбца) должно соответствовать количеству
//     выпадений каждой из сторон игральной кости.
//
// Примеры
//
// import displayHistogram from '../histogram.js';
//
// displayHistogram(32, rollDie);
// =>                 28%
//                    ###
//                    ###
//            19%     ###
//            ### 16% ### 16%
//    13%     ### ### ### ###
//    ### 9%  ### ### ### ###
//    ### ### ### ### ### ###
//    ### ### ### ### ### ###
//    ### ### ### ### ### ###
//    -----------------------
//     1   2   3   4   5   6

// displayHistogram(13, rollDie);
// =>                 31% 31%
//                    ### ###
//        15%     15% ### ###
//        ### 8%  ### ### ###
//        ### ### ### ### ###
//    -----------------------
//     1   2   3   4   5   6

const fillWithData = (template, sideCounts, totalCount) => {
  template.forEach((side, ind) => {
    for (let i = 1; i <= sideCounts[ind + 1]; i += 1) {
      side.push('###');
    }

    const percent = Math.round((sideCounts[ind + 1] / totalCount) * 100);
    let percStr = '';
    if (percent < 10) {
      percStr = `${percent}% `;
    } else {
      percStr = `${percent}%`;
    }
    side.push(percStr);
  });
};

const appendSpaces = (template, maxLength) => {
  template.forEach(el => {
    const len = el.length;
    const appendLen = maxLength - len;
    for (let i = 1; i <= appendLen; i += 1) {
      el.push('   ');
    }
  });
};

const render = data => {
  const separatorStr = '-----------------------';
  const lastStrNumsSide = ' 1   2   3   4   5   6 ';

  // plus 2 line: separatorStr and lastStrNumsSide
  const height = data.length + 2;
  const result = data.map(line => line.join(' '));
  result.push(separatorStr, lastStrNumsSide);

  for (let i = 0; i < height; i += 1) {
    console.log(result[i]);
  }
};

export default (throwsCount, rollDie) => {
  const sideCounts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  for (let i = 1; i <= throwsCount; i += 1) {
    const side = rollDie();
    sideCounts[side] += 1;
  }

  const template = Array.from({ length: 6 }, () => []);
  // plus line with percent
  const maxHeight = Math.max(...Object.values(sideCounts)) + 1;

  fillWithData(template, sideCounts, throwsCount);
  appendSpaces(template, maxHeight);

  const resultData = [];
  for (let i = maxHeight - 1; i >= 0; i -= 1) {
    const resLine = template.reduce((acc, column) => {
      acc.push(column[i]);
      return acc;
    }, []);
    resultData.push(resLine);
  }

  render(resultData);
};
