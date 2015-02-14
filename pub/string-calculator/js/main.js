var assert = require('assert');

console.log(Date());

function plus() {
};


it('should have a plus function', function () {
    assert(plus);
    assert.equal(typeof plus, "function");
});