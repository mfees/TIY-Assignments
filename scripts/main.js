var assert = require('assert');

function add(A, B){
    return A + B;
}
console.log(add(5, 6));

assert.equal(add(1, 2), 3);
    

function diff(A, B) {
    
    return A - B;

}

console.log(diff(10, 3))

assert.equal(diff(6, 3), 3)

assert.equal(diff(7, 3), 4)


function prod(A, B){
    return A * B;
}

console.log(prod(6, 7));

assert.equal(prod(3, 2), 6);

assert.equal(prod(10, 3), 30);


function div(A, B) {
    return A / B;
    
}

console.log(div(60, 10));

assert.equal(div(10, 2), 5);
assert.equal(div(20, 5), 4);