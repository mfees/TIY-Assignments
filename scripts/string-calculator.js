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

it ('should have a plus function', function () {
    assert(plus);
    assert.equal(typeof plus, 'function');
});

var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
var answer;

for (var i = 0; i < numbers.length; i++) {    
    for (var ii = 0; ii < numbers.length; ii++) {
        
        answer = i + ii;
        
//        if(plus(numbers[i], numbers[ii]) == answer) console.log('yay');
//        else console.log('boo')
        
        it ('should return a "zero" equal number 0', function () {
            assert.equal(plus(numbers[i], numbers[ii]), answer);
        });
    };
};





