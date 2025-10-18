function Event(name, location, date) {
  this.name = name;
  this.location = location;
  this.date = date;
  //   this.getDetails = function () {
  //     return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
  //   };
}

/*
Challenge:
    1. Remove getDetails from the Event constructor's body 
       and add it to the Event constructor’s prototype. 
*/

// SEE ANSWER BELOW //
Event.prototype.getDetails = function () {
  return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
};
// SEE ANSWER ABOVE //

Event.prototype.cancelEvent = function () {
  return 'Event Cancelled';
};

function Concert(name, location, date, headliner) {
  Event.call(this, name, location, date);
  this.headliner = headliner;
  // this.getDetails = function () {};
}

Concert.prototype = Object.create(Event.prototype);
Concert.prototype.constructor = Concert;

Concert.prototype.getDetails = function () {
  const eventBasics = Event.prototype.getDetails.call(this);
  return `${eventBasics} Headliner: ${this.headliner}`;
};

const concert = new Concert(
  'Summer Beats',
  'City Stadium',
  '2024-07-15',
  'The Electrons'
);
const concert2 = new Concert(
  'Happy days',
  'Highlands Park',
  '2024-08-08',
  'Dave Notes'
);

const concert3 = new Concert('Lush Vibes', 'Wembley', '2024-03-08', 'Si Twig');

console.log(concert.getDetails()); // Event: Summer Beats, Location: City Stadium, Date: 2024-07-15 Headliner: The Electrons
console.log(concert2.getDetails()); // Event: Happy days, Location: Highlands Park, Date: 2024-08-08 Headliner: Dave Notes
console.log(concert3.getDetails()); // Event: Lush Vibes, Location: Wembley, Date: 2024-03-08 Headliner: Si Twig
