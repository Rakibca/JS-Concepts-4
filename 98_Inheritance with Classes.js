class Event {
  constructor(name, location, date) {
    this.name = name;
    this.location = location;
    this.date = date;
  }

  getDetails() {
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
  }
}

class Concert extends Event {
  constructor(name, location, date, headliner) {
    super(name, location, date);
    this.headliner = headliner;
  }

  getDetails() {
    const eventBasics = super.getDetails();
    return `${eventBasics} Headliner: ${this.headliner}`;
  }
}

const concert = new Concert(
  'Summer Beats',
  'City Stadium',
  '2023-07-15',
  'The Electrons'
);

console.log(concert.getDetails()); // Event: Summer Beats, Location: City Stadium, Date: 2023-07-15 Headliner: The Electrons
