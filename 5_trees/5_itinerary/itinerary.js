// Реализуйте и экспортируйте по умолчанию функцию, которая выстраивает маршрут между городами.

// Функция принимает 3 аргумента:
//
//     дерево городов
//     город старта
//     город окончания маршрута

// и возвращает массив городов, выстроенный в том же порядке, в котором они находятся
// на пути следования по маршруту.

const lastOfArr = array => array[array.length - 1];

const getPathFromRoot = (tree, target) => {
  const [name, children] = tree;

  if (name === target) {
    return [name];
  }

  if (children) {
    for (let i = 0; i < children.length; i += 1) {
      const path = getPathFromRoot(children[i], target);
      if (path) {
        return [name, ...path];
      }
    }
  }

  return null;
};

const getCrossPoint = (path1, path2) => {
  const intersections = path1.filter(item => path2.includes(item));
  return lastOfArr(intersections);
};

export default (tree, startPoint, endPoint) => {
  // build pathes from root to start and from root to end points
  const pathToStart = getPathFromRoot(tree, startPoint);
  const pathToEnd = getPathFromRoot(tree, endPoint);

  if (!pathToStart) {
    throw new Error('start point does not exist');
  }

  if (!pathToEnd) {
    throw new Error('end point does not exist');
  }

  // find crossPoint
  const crossPoint = getCrossPoint(pathToStart, pathToEnd);

  // define index of crossPoint in pathToStartPoint and pathToEndPoint
  const indexOfCrossPoint = pathToStart.indexOf(crossPoint);

  // build new pathToStartPoint with only crossPoint and without another points from
  // crossPoint to root
  // build new pathToEndPoint without points from crossPoint to root
  const normPathToStart = pathToStart.slice(indexOfCrossPoint);
  const normPathToEnd = pathToEnd.slice(indexOfCrossPoint + 1);

  // build result by joining reversed pathToStartPointWithCross and pathToEndPoint
  const result = [...normPathToStart.reverse(), ...normPathToEnd];
  return result;
};
