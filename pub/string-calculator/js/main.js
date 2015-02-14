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
        "nine": 9
    };
    return number[a] + [b];
};


it('should have a plus function', function () {
    assert(plus);
    assert.equal(typeof plus, "function");
});


