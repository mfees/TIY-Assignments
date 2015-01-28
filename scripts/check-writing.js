var assert = require('assert');


var toEnglish = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "ninteen",
    "twenty"
];

function counter(a) {
    return toEnglish[a];
}


var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "ninteen", "twenty"];

for (var i = 0; i < numbers.length; i++) {
    it ('should return a numerial number as an english number', function () {
        assert.equal(counter(i), numbers[i]);
    });
};