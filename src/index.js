import uniqueRandomArray from 'unique-random-array';
import countryNames from './country-names.json';

const mainExport = {
  all: countryNames,
  random: uniqueRandomArray(countryNames),
};

export default mainExport
module.exports = mainExport; // for CommonJS compatibility
