var assert = require('assert');

console.log(Date());

/**
Create a function called 'plus()' that accepts two 'Strings'
representing English number words, e.g. "one", "two", "three",
and returns a 'Number' representing their sum. For example:

assert.equal(plus("one", "one"), 2);

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

    return numbers[A] + numbers[B];
} // END plus

/*it ('should have a plus function', function () {
    assert(plus);
    assert.equal(typeof plus, 'function');
});*/

var numbers = ["zero", "one", "two"];

for (var i = 0; i < numbers.length; i++) {
    //plus(numbers[i], numbers[i]);
    console.log(numbers[i]);
    
    for (var ii = 0; ii < numbers.length; ii++) {
        console.log(numbers[ii]);
    };
};

/*it ('should return a "zero" equal number 0', function () {
    assert.equal(plus("zero", "zero"), 0);
    assert.equal(plus("zero", "one"), 1);
    assert.equal(plus("zero", "two"), 2);
    assert.equal(plus("zero", "three"), 3);
    assert.equal(plus("zero", "four"), 4);
    assert.equal(plus("zero", "five"), 5);
    assert.equal(plus("zero", "six"), 6);
    assert.equal(plus("zero", "seven"), 7);
    assert.equal(plus("zero", "eight"), 8);
    assert.equal(plus("zero", "nine"), 9);
    assert.equal(plus("zero", "ten"), 10);
});*/

