const summaryRanges = coll => {
  const result = [];
  let firstSeqElement = coll[0];
  let lastSeqElement;
  let isSequence = false;

  for (let i = 1; i < coll.length; i += 1) {
    const cur = coll[i];
    const prev = coll[i - 1];

    if (cur - prev === 1) {
      lastSeqElement = cur;
      isSequence = true;
      if (i === coll.length - 1) {
        const resString = `${firstSeqElement}->${lastSeqElement}`;
        result.push(resString);
      }
    } else {
      if (isSequence) {
        const resString = `${firstSeqElement}->${lastSeqElement}`;
        result.push(resString);
        isSequence = false;
      }
      firstSeqElement = cur;
    }
  }

  return result;
};

console.log(summaryRanges([1, 2, 3]));
