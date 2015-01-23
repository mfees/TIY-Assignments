var assert = require('assert');

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


