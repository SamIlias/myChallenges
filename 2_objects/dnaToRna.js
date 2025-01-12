const dnaRnaTranscription = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

const dnaToRna = (dna) => {
  const rna = [];

  for (const nucl of dna) {
    const curRnaNucl = dnaRnaTranscription[nucl];

    if (curRnaNucl === undefined) {
      return null;
    }

    rna.push(curRnaNucl);
  }

  return rna.join('');
};

console.log(dnaToRna('ACGTGGTCTTAA'));
console.log(dnaToRna('ACGTGGNCTTAA'));
console.log(dnaToRna(''));
