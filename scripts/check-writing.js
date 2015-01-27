var assert = require('assert');


var toEnglish = ["zero", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "forteen", "fifteen", "sixteen", "seventeen", "eighteen", "ninteen", "twenty"];

function counter(a) {
    return toEnglish[a];
}

it ('should return a numerial number as an english number'), function () {
    assert.equal(counter(0), "zero");
});


/*var toEnglish = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

function counter(a) {
    return toEnglish[a];
}


it ('should return a numerical number as an english number', function () {
    assert.equal(counter(0), "zero");
    assert.equal(counter(10), "ten");
});*/