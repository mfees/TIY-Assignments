var assert = require('assert');

Array[["zero", 0], ["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five, 5"]];  

function plus(A, B) {
    return A + B;
}

plus(1, 2);

console.log(plus(1, 2));

it('make two string numbers into number total', function () {
    assert.equal(plus("one", "one"), 2);
    assert.equal(plus("three", "two"), 5);
    assert.equal(plus("two", "four"), 6);
});




