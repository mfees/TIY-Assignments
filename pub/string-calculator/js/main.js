var assert = require('assert');

console.log(Date());

function plus(a, b) {
    var number= {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "ten": 10,
        "eleven": 11,
        "twelve": 12,
        "thirteen": 13,
        "fourteen": 14,
        "fifteen": 15,
        "sixteen": 16,
        "seventeen": 17,
        "eighteen": 18,
        "nineteen": 19,
        "twenty": 20,
        "thirty": 30,
        "forthy": 40,
        "fifty": 50,
        "sixty": 60,
        "seventy": 70,
        "eighty": 80,
        "ninety": 90,
        "one hundred": 100
    };
    return number[a] + number[b];
};

console.log(plus("one", "two"));
console.log(plus("five", "six"));
console.log(plus("ninety", "four"));
console.log(plus("one hundred", "fifteen"));

it('should have a plus function', function () {
    assert(plus);
    assert.equal(typeof plus, "function");
});

it('should add "one" and "twenty"', function () {
    assert.equal(plus("one", "twenty"), 21);
});

it('should add "ninety" and "four"', function () {
    assert.equal(plus("ninety", "four"), 94);
});

it('should add "one hundred" and "fifteen"', function () {
    assert.equal(plus("one hundred", "fifteen"), 115);
});
