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
        "twenty": 20
    };
    return number[a] + number[b];
};

console.log(plus("one", "two"));
console.log(plus("five", "six"));


it('should have a plus function', function () {
    assert(plus);
    assert.equal(typeof plus, "function");
});

//var number = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine",];
//var answer;
//
//for(var i = 0; i < number.length; i++); {
//    for(var ii = 0; i < number.lenght; ii++); {
//        
//    answer = i + ii;    
//    };
//};
