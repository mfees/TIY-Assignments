var assert = require('assert');

var events = require('../apis/github/users/mfees/events.json'); 

console.log(Date());

    it ('should tell us that events has an imput', function () {
        assert(events);
    });

function answer() {
    var pushEvents = events.filter(function(item) {
        return item.type == 'PushEvent';
    });
    
    var day = events.filter(function(item) {
        return item.type == 'updated_at';
    });
    
    return {
        'total': events.length,
        'PushEvent': {
            'total': pushEvents.length  
        } 
    }; 
};

console.log(answer());
console.log(events.length)
var theAnswer = answer()

    it ('should return that answer exists and test for total events', function () {
        assert(answer);
        assert(events.length == 30);
    });

    it ('should return the length when calling answer function', function () {
        assert.equal(theAnswer.total, 30);
    });

    it ('should have "PushEvent"', function () {
        assert(theAnswer.PushEvent);
        assert(theAnswer.PushEvent.total);
    });