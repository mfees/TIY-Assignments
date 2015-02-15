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
        19: "ninteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };
    
//    console.log("In toEnglish: " + a);
    if (a < 20)
        return number[a];
    
    if (Math.floor(a / 10) * 10 == a)
        return number[a];
    
    return number[Math.floor(a/10)*10] + " " + number[a % 10];
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
function toCheck(n) { 
    var x = "";
    
//    console.log(n % 1000000 / 1000);
    
    if(n % 1000000 / 1000 > 1)
        x = x + toEnglish(Math.floor(n % 1000000/ 1000)) + " thousand ";
    
//    console.log(Math.floor(n % 1000 / 100));
    
    if(n % 1000 / 100 > 1)
        x = x + toEnglish(Math.floor(n % 1000/ 100)) + " hundred ";
    
//    console.log(Math.floor(n % 100 / 1));
    
    if (n % 100 / 1 > 1)
        x = x + toEnglish(Math.floor(n % 100 / 1));

    return x + " & " + Math.round(n % 1 * 100) + "/100s dollars";
}; // END toCheck


it('should equal "one & 23/100s dollars"', function () {
    assert.equal(toCheck(1.23), "one & 23/100s dollars");
});

console.log(toCheck(1.23));


it('should equal "twelve & 34/100s dollars"', function () {
    assert.equal(toCheck(12.34), "twelve & 34/100s dollars");
});

console.log(toCheck(12.34));


it('should equal "one hundred twenty three & 45/100s dollars"', function () {
    assert.equal(toCheck(123.45), "one hundred twenty three & 45/100s dollars");
});

console.log(toCheck(123.45));

it('should equal "one thousand two hundred thirty four & 56/100s dollars"', function () {
    assert.equal(toCheck(1234.56), "one thousand two hundred thirty four & 56/100s dollars");
});

console.log(toCheck(1234.56));

it('should equal "twelve thousand three hundred forty five & 67/100s dollars"', function () {
    assert.equal(toCheck(12345.67), "twelve thousand three hundred forty five & 67/100s dollars");
});

console.log(toCheck(12345.67));
