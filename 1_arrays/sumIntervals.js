const isIntersectRanges = (range1, range2) => {
  const leftBoard1 = range1[0];
  const rightBoard1 = range1[1];
  const leftBoard2 = range2[0];
  const rightBoard2 = range2[1];

  if (leftBoard1 <= leftBoard2 && leftBoard2 <= rightBoard1) {
    return true;
  }

  if (leftBoard2 <= leftBoard1 && leftBoard1 <= rightBoard2) {
    return true;
  }

  return false;
};

const extendRange = (range1, range2) => {
  const leftBoard1 = range1[0];
  const rightBoard1 = range1[1];
  const leftBoard2 = range2[0];
  const rightBoard2 = range2[1];

  const leftBoard = leftBoard1 < leftBoard2 ? leftBoard1 : leftBoard2;
  const rightBoard = rightBoard2 < rightBoard1 ? rightBoard1 : rightBoard2;

  const res = [leftBoard, rightBoard];
  return res;
};

const getSumRanges = arrs => {
  let sum = 0;
  for (let i = 0; i < arrs.length; i += 1) {
    const cur = arrs[i];
    const intervalLength = cur[1] - cur[0];
    sum += intervalLength;
  }

  return sum;
};

const sumIntervals = arrs => {
  const intervals = [];

  for (let i = 0; i < arrs.length; i += 1) {
    const cur = arrs[i];
    let isRangeExist = false;

    for (let j = 0; j < intervals.length; j += 1) {
      const interval = intervals[j];

      if (isIntersectRanges(interval, cur)) {
        intervals[j] = extendRange(interval, cur);
        isRangeExist = true;
        break;
      }
    }

    if (!isRangeExist) {
      intervals.push(cur);
    }
  }

  const sum = getSumRanges(intervals);
  return sum;
};

export default sumIntervals;

console.log(
  sumIntervals([
    [1, 5],
    [-30, 19],
    [1, 7],
    [16, 19],
    [5, 100],
  ]),
);

// The alternative solution

const sumIntervalsAlt = intervals => {
  const values = [];
  for (const [start, end] of intervals) {
    for (let i = start; i < end; i += 1) {
      if (!values.includes(i)) {
        values.push(i);
      }
    }
  }
  return values.length;
};

console.log(
  sumIntervalsAlt([
    [1, 5],
    [-30, 19],
    [1, 7],
    [16, 19],
    [5, 100],
  ]),
);
