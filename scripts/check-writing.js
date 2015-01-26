var assert = require('assert');

function toEnglish (a) {
    if (a == 1) {
    return "one";
    
    } else if ( a == 2) {
        return "two";
        
    } else if ( a == 3) {
        return "three";
        
    } else if ( a == 4) {
        return "four";
        
    } else if ( a == 5) {
        return "five";
        
    } else if ( a == 6) {
        return "six";
        
    } else if ( a == 7) {
        return "seven";
        
    }else if ( a == 8) {
        return "eight";
    
    } else if ( a == 9) {
        return "nine";
    
    } else if ( a == 10) {
        return "ten";
    }
}

it ('should return an english number"', function () {
    assert.equal(toEnglish(1), "one");
});

it ('should return an english number"', function () {
    assert.equal(toEnglish(2), "two");
});

it ('should return an english number"', function () {
    assert.equal(toEnglish(3), "three");
});

it ('should return an english number"', function () {
    assert.equal(toEnglish(4), "four");
});

it ('should return an english number"', function () {
    assert.equal(toEnglish(5), "five");
});

it ('should return an english number"', function () {
    assert.equal(toEnglish(6), "six");
});

it ('should return an english number"', function () {
    assert.equal(toEnglish(7), "seven");
});

it ('should return an english number"', function () {
    assert.equal(toEnglish(8), "eight");
});

it ('should return an english number"', function () {
    assert.equal(toEnglish(9), "nine");
});

it ('should return an english number"', function () {
    assert.equal(toEnglish(10), "ten");
});