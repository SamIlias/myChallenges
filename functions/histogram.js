export default function play(roundsCount, rollDie) {
  const mapSidesRes = {
    1: '1|',
    2: '2|',
    3: '3|',
    4: '4|',
    5: '5|',
    6: '6|',
  };
  const mapSidesCount = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  for (let i = 1; i <= roundsCount; i += 1) {
    const cur = rollDie();
    mapSidesCount[`${cur}`] += 1;
    mapSidesRes[`${cur}`] += `#`;
  }

  for (const [key] of Object.keys(mapSidesCount)) {
    mapSidesRes[key] += mapSidesCount[key];
  }

  return Object.values(mapSidesRes).join('\n');
}
