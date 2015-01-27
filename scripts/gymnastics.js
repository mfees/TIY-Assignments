var assert = require('assert');
var events = require('../apis/github/users/mfees/events.json'); 

function answer() {
    var numberOfPushEvents = 0;
    
    var firstEvent = events[0];
    
    if( firstEvent.type == "PushEvent") {
        numberOfPushEvents++;
    }
    
    var secondEvent = event[1];
    
    if ( secondEvent = "PushEvent") {
        numberOfPushEvents++;
    }
    
  return {
    'total': events.length,
    'PushEvents': {
        'total': numberOfPushEvents,
    }
  };
} // END answer

    assert(events);
    assert(answer);
    assert(typeof answer == 'function');
        
    var theAnswer = answer ();
    
    assert.equal(theAnswer.total, 30);
    assert(theAnswer.PushEvents);
    assert(theAnswer.PushEvents.total);
    
/*    'PushEvent': {
      'total': ...,  // How many total events of type `PushEvent` are there?
      'perDay': ...  // On average, how many`PushEvent` entries per day?
    },
    'other': {
      'total': ...,  // How many _other_ events are in the data?
      'perDay': ...  // How many per day, on average?
    }
  };*/