var assert = require('assert');

var number = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]

function toNumber(a) {
    if (a == "one");
    return number[a];
}

it ('should turn string to number', function () {
    assert.equal(toNumber("one"), 1);
});
