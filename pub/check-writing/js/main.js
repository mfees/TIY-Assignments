var assert = require('assert');

console.log(Date());


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
};
    
it('should make 4 equal "four"', function () {
    assert.equal(toEnglish(4), "four");
});

console.log(toEnglish(4));


it('should make 12 equal "twelve"', function () {
    assert.equal(toEnglish(12), "twelve");
});

console.log(toEnglish(12));