var assert = require('assert');

function solution (x) {
//    var countFives = [],
//        countThrees = [],
//        fives = 5,
//        threes = 3,
//        total = 0;
//    
//    while (fives < x) {        
//        countFives.push(fives);
//        total = total + fives;
//        fives = fives + 5;
//    }
//    
//    while (threes < x) {        
//        countThrees.push(threes);
//        total = total + threes;
//        threes = threes + 3;
//    }
//    
//    return total;
////    var counter = 0;
////    if (x % 3 == 0 || x % 5 == 0) {
////        return x;
////    } 
    
        var counter = 0,
        threes = 0,
        fives = 0,
        threesCounter = 0,
        fivesCounter = 0;
    
    
     while (counter < x) {        
        if (counter % 3 == 0) {
            threesCounter = counter/3 + threesCounter;
        } if (counter % 5 == 0) {
            fivesCounter = counter/5 + fivesCounter;
        }
        counter++; 
    }
    console.log(fivesCounter, threesCounter);
    return fivesCounter + threesCounter;
}
console.log(solution(10));

it('should have a `solution` function', function(){
  assert(solution);
  assert.equal(typeof solution, 'function');
});

it('should have a `solution` for (10, 20, 30)', function(){
  assert.equal(solution(10), 23);
  assert.equal(solution(20), undefined);
  assert.equal(solution(30), undefined);
});

it('should have a `solution` for 50', function(){
  assert.equal(solution(50), undefined);
});

it('should have a solution for 100', function(){
  assert.equal(solution(100), undefined);
});

// What about 1000?