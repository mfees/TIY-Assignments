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
    
    
//function answer() {
//    'total': 
//    'PushEvent': {
//    'total': ...,  // How many total events of type `PushEvent` are there?
//    'perDay': ...  // On average, how many`PushEvent` entries per day?},
//    'other': {
//    'total': ...,  // How many _other_ events are in the data?
//    'perDay': ...  // How many per day, on average?
//    }
//  };    
    
    //    var numberOfPushEvents = 0;
//    
//    var firstEvent = events[0];
//    
//    if( firstEvent.type == "PushEvent") {
//        numberOfPushEvents++;
//    }
//    
//    var secondEvent = event[1];
//    
//    if ( secondEvent = "PushEvent") {
//        numberOfPushEvents++;
//    }
//    
//  return {
//    'total': events.length,
//    'PushEvents': {
//        'total': numberOfPushEvents,
//    }
//  };