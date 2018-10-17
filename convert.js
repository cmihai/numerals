// Uncomment the array elements as needed, to get a more compact, but less
// 'canonical' conversion. For example, 1995 can be represented by either
// MCMXCV or just VM.
var NUMERALS = [
    [1000, 'M'],
    // [999, 'IM'],
    // [995, 'VM'],
    // [990, 'XM'],
    // [950, 'LM'],
    [900, 'CM'],
    [500, 'D'],
    // [499, 'ID'],
    // [495, 'VD'],
    // [490, 'XD'],
    // [450, 'LD'],
    [400, 'CD'],
    [100, 'C'],
    // [99, 'IC'],
    // [95, 'VC'],
    [90, 'XC'],
    [50, 'L'],
    // [49, 'IL'],
    // [45, 'VL'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [1, 'I']
];

/**
 * Convert a number to its Roman numeral representation
 * 
 * @param {number} num The number to be converted
 * @returns {string}
 */
function toRoman(num) {
    let result = [];

    for (let x of NUMERALS) {
        let [arabic, roman] = x;

        while (num >= arabic) {
            num -= arabic;
            result.push(roman);
        }
    }
    
    return result.join('');
};

module.exports = { toRoman };