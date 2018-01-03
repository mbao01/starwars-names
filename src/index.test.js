import {expect} from 'chai'
import countryNames from '.'

describe('world-countries-capital', function () {

    it('should be an array of strings', function () {
        expect(countryNames.all).to.satisfy(isArrayOfStrings);
    });

    it('should allow me to get a random country name from the list', () => {
        expect(countryNames.random()).to.satisfy(isIncludedIn(countryNames.all))
    });

});

function isArrayOfStrings(array) {
    return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
    return item => array.includes(item)
}
