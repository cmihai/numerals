var assert = require('assert');
var { toRoman } = require('./convert');

// Import roman-numerals package just for testing conversion
var toArabic = require('roman-numerals').toArabic

describe('convert', function() {

    it('should convert Arabic numberals to Roman', function() {
        let tests = [
            1, 5, 8, 9, 10, 1995, 2018
        ];

        // Since Roman numerals can have several representations,
        // we don't test the strings themselves -- just the conversion
        // back and forth
        for (let arabic of tests) {
            let roman = toRoman(arabic);
            console.log(arabic, roman);
            assert.equal(toArabic(roman), arabic);
        }
    });
});