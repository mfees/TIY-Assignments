var assert = require('assert');

console.log(Date());

it ('should have a plus function', function () {
    assert(plus);
    assert.equal(typeof plus, 'function');
});

it ('should add "zeros"', function () {
    assert.equal(plus("zero", "zero"), 0);
    assert.equal(plus("zero", "one"), 1);
    assert.equal(plus("zero", "two"), 2);
});

/**
Create a function called 'plus()' that accepts two 'Strings'
representing English number words, e.g. "one", "two", "three",
and returns a 'Number' representing their sum. For example:

assert.equal(plus("one", "one"), 2};

@param String A English number word
@param String B English number word
@return Number sum of A and B
*/
function plus(A, B) {
    var numbers = {
        "ten": 10,
        "nine": 9,
        "eight": 8,
        "seven": 7,
        "six": 6,
        "five": 5,
        "four": 4,
        "three": 3,
        "two": 2,
        "one": 1,
        "zero": 0
    };
    
        return numbers[B];
} // END plus





/*var number = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]

function toNumber(a) {
    if (a == "one");
    return number[a];
}

it ('should turn string to number', function () {
    assert.equal(toNumber("one"), 1);
});*/
