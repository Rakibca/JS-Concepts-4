function Event(name, location, date) {
  this.name = name;
  this.location = location;
  this.date = date;
  this.getDetails = function () {
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
  };
}

function Concert(name, location, date, headliner) {
  Event.call(this, name, location, date);
  this.headliner = headliner;
}

Concert.prototype = Object.create(Event.prototype);
Concert.prototype.constructor = Concert;

const concert = new Concert(
  'Summer Beats',
  'City Stadium',
  '2024-07-15',
  'The Electrons'
);

console.log(concert); // Concert {name: 'Summer Beats', location: 'City Stadium', date: '2024-07-15', headliner: 'The Electrons'}

console.log(concert.getDetails()); // Event: Summer Beats, Location: City Stadium, Date: 2024-07-15
