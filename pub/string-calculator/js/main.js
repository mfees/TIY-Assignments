var assert = require('assert');

console.log(Date());

function plus(a, b) {
    var number= {
        "zero": 0,
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
        "ninety": 90
    };
    var aVal = 0, bVal = 0;
    var aArr = a.split(" ");
    var bArr = b.split(" ");
    
//    console.log("In plus: ");
//    console.log(a);
//    console.log(b);
//    console.log(aArr[0]);
//    console.log(aArr[1]);
    
    if(typeof aArr[1] == "undefined")
        aVal = number[a];    
    else if(aArr[1] == "hundred")
        aVal = number[aArr[0]] * 100;
    else aVal = plus(aArr[0],aArr[1]);
    
    if(typeof bArr[1] == "undefined")
        bVal = number[b];    
    else if(bArr[1] == "hundred")
        bVal = number[bArr[0]] * 100;
    else bVal = plus(bArr[0],bArr[1]);
    
    return aVal + bVal;
};

console.log(plus("one", "two"));
console.log(plus("five", "six"));
console.log(plus("ninety", "four"));
console.log(plus("twenty three", "thirty nine"));
console.log(plus("two hundred", "ten"));
console.log(plus("two hundred", "zero"));
console.log(plus("two hundred", "five hundred"));


//it('should have a plus function', function () {
//    assert(plus);
//    assert.equal(typeof plus, "function");
//});
//
//it('should add "one" and "twenty"', function () {
//    assert.equal(plus("one", "twenty"), 21);
//});
//
//it('should add "ninety" and "four"', function () {
//    assert.equal(plus("ninety", "four"), 94);
//});
//
//it('should add "one hundred" and "one"', function () {
//    assert.equal(plus("two hundred", "one"), 201);
//});