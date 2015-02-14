var assert = require('assert');

console.log(Date());

/**
 * @param Number
 * @returns String an English number word
 */

function toEnglish(a) {
    var number= {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "ninteen"
    };
        return number[a];
}; //END toEnglish
    
it('should make 4 equal "four"', function () {
    assert.equal(toEnglish(4), "four");
});

console.log(toEnglish(4));


it('should make 12 equal "twelve"', function () {
    assert.equal(toEnglish(12), "twelve");
});

console.log(toEnglish(12));


/**
 * @param Number n representing a dollar value
 * @returns String of English words for `n`
 */
function toCheck(n){
    var number= {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "ninteen"
    };
    
    if(n < 10);
        return number[n] + " &" + "/100s dollars";
}; // END toCheck

it('should equal "one & 23/100s dollars"', function () {
    assert.equal(toCheck(1.23), "one & 23/100s dollars");
});
console.log(toCheck(1));


//assert.equal(toCheck(12.34), "twelve & 34/100s dollars");
//assert.equal(toCheck(123.45), "one hundred twenty three & 34/100s dollars");
//assert.equal(toCheck(1234.56), "one thousand two hundred thirty four & 56/100s dollars");
//assert.equal(toCheck(12345.67), "twelve thousand three hundred forty five & 67/100s dollars");