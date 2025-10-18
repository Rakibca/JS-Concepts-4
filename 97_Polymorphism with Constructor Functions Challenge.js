/*
NOTES:
function Concert(name, location, date, headliner) {
  Event.call(this, name, location, date);
  this.headliner = headliner;
}

Concert.prototype.displayDetails = function () {
  const eventBasics = Event.prototype.displayDetails.call(this);
  return `${eventBasics} Headliner: ${this.headliner}`;
};

Concert.prototype = Object.create(Event.prototype);
Concert.prototype.constructor = Concert;
*/

function Event(name, location, date) {
  this.name = name;
  this.location = location;
  this.date = date;
}

Event.prototype.getDetails = function () {
  return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
};

/*
Challenge:
    1. Set up a constructor for 'Conference' which 
       should take in 'keynoteSpeaker' as a parameter. 
    2. 'Conference' should inherit from 'Event'.
    3. 'Conference' should have its own method 'getDetails'
       which calls Event's getDetails method and returns a string 
       with name, location, date, and keynote speaker.  
    4. When you set up an instance of Conference and call 
       getDetails you should log out: 
       Event: 10 Nights of JS, Location: Scrimba HQ, Date: 2025-09-29 Keynote Speaker: Ashley Smith
       NOTE: The new method should be on the prototype. 
*/

// SEE ANSWER BELOW //
function Conference(name, location, date, keynoteSpeaker) {
  Event.call(this, name, location, date);
  this.keynoteSpeaker = keynoteSpeaker;
}

Conference.prototype = Object.create(Event.prototype);
Conference.prototype.constructor = Conference;

Conference.prototype.getDetails = function () {
  const eventBasics = Event.prototype.getDetails.call(this);
  return `${eventBasics} Keynote Speaker: ${this.keynoteSpeaker}`;
};
// SEE ANSWER ABOVE //

const conference = new Conference(
  '10 Nights of JS',
  'Scrimba HQ',
  '2025-09-29',
  'Ashley Smith'
);

console.log(conference.getDetails()); // Event: 10 Nights of JS, Location: Scrimba HQ, Date: 2025-09-29 Keynote Speaker: Ashley Smith
