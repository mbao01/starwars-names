import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './world-countries-capital.json';

const mainExport = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
};

export default mainExport
module.exports = mainExport; // for CommonJS compatibility
