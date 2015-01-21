var assert = require('assert');

function add(A, B){
    return A + B;
}
console.log(add(5, 6));

assert.equal(add(1, 2), 3);
    