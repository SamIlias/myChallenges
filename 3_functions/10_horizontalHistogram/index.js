import play from './histogram.js';
import rollDie from './rollDie.js';

const run = (roundsCount, randomizer) => play(roundsCount, randomizer);

run(100, rollDie);
