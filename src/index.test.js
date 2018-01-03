import {expect} from 'chai'
import starWarsNames from '.'

describe('world-countries-capital', function () {

    it('should be an array of strings', function () {
        expect(starWars.all).to.satisfy(isArrayOfStrings);
    });

    it('should allow me to get a random name from the list', () => {
        expect(starWarsNames.random()).to.satisfy(isIncludedIn(starWarsNames.all))
    });

});

function isArrayOfStrings(array) {
    return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
    return item => array.includes(item)
}
