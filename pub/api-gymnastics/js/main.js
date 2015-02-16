var assert = require('assert'),
    _ = require('lodash'),
    events = require('../../../apis/github/users/mfees/events.json'); 

console.log(Date());


var pEvents = _.filter(events, {
    'type': 'PushEvent' 
}); 

var otherEvents = events.length - pEvents.length;
    
function answer(){
    return {
    'total': events.length,    // How many total events did you fetch?
    'PushEvent': {
      'total': pEvents.length  // How many total events of type `PushEvent` are there?
//      'perDay': ...  // On average, how many`PushEvent` entries per day?
    },
    'other': {
      'total': otherEvents,  // How many _other_ events are in the data?
//      'perDay': ...  // How many per day, on average?
    }
    };
} // END answer


console.log(answer);
console.log(events.length);
console.log(pEvents.length);
console.log(events.length - pEvents.length);
console.log(otherEvents);


it('should show the length of the array "events"', function () {
    assert.equal(events.length, 30);
});

it('should show the length of the number of "pushevents"', function () {
    assert.equal(pEvents.length, 10);
});

it('should return the number of events that are not push events', function () {
    assert.equal(otherEvents, 20);
});
    


