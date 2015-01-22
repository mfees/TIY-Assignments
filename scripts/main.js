var assert = require('assert');

function add(A, B){
    return A + B;
}

//console.log(add(5, 6));

assert.equal(add(1, 2), 3);
    

function diff(A, B) {
    
    return A - B;

}

//console.log(diff(10, 3))

assert.equal(diff(6, 3), 3)

assert.equal(diff(7, 3), 4)


function prod(A, B){
    return A * B;
}

//console.log(prod(6, 7));

assert.equal(prod(3, 2), 6);

assert.equal(prod(10, 3), 30);


function div(A, B) {
    return A / B;
    
}

//console.log(div(60, 10));

assert.equal(div(10, 2), 5);
assert.equal(div(20, 5), 4);


function plus(A, B){
    return wordToInt(A) + wordToInt(B);
}

function wordToInt(word){
    
    word = word.toLowerCase();
    
    if(word == 'one'){
        return 1;
    }
    else if(word  == 'zero'){
        return 0;
    }
    
    else if(word == 'two'){
        return 2;
    }
    
    else if(word == 'three'){
        return 3;
    }
    
    else if(word == 'four'){
        return 4;
    }
    
    else if(word == 'five'){
        return 5;
    }
    
    else if(word == 'six'){
        return 6;
    }
    
    else if (word == 'seven'){
        return 7;
    }
    
    else if (word == 'eight'){
        return 8;
    }
    
    else if (word == 'nine'){
        return 9;
    }
    
    else if (word == 'ten'){
        return 10;
    }
}

assert(plus("zero", "zero") === 0);

assert(plus("one", "zero") === 1);

assert(plus("one", "one") === 2);

assert(plus("one", "two") === 3);

assert(plus("two", "two") === 4);

assert(plus("three", "two") === 5);

assert(plus("three", "three") === 6);

assert(plus("four", "three") === 7);

assert(plus("four", "four") === 8);

assert(plus("five", "four") === 9);

assert(plus("five", "five") === 10);