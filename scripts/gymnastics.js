var assert = require('assert');
var events = require('../apis/github/users/mfees/events.json'); 

function answer(){
  return {
    'total': events.length
  }
} // END answer

describe ('the setup', function () {
    it ('should have events', function () {
        assert(events);
    });

    it ('should have an 'answer' function', function () {
        assert(answer);
        assert(typeof answer == 'function');
    });
});

describe ('the answer' function () {
    var theAnswer = answer ();
    
    it ('should have 30 total events', function () {
        assert(theAnswer.total === 20);
    });
    
    it ('should have some 'PushEvent' entries', function () {
        assert(theAnswer.PushEvents.total);
    });
});


/*    'PushEvent': {
      'total': ...,  // How many total events of type `PushEvent` are there?
      'perDay': ...  // On average, how many`PushEvent` entries per day?
    },
    'other': {
      'total': ...,  // How many _other_ events are in the data?
      'perDay': ...  // How many per day, on average?
    }
  };*/