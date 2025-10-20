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

/*
Challenge:
    1. Set up a class 'TennisMatch' which 
       should take in 'player1' and 'player2' as parameters. 
    2. 'TennisMatch' should inherit properties and methods 
       from 'Event'.
    3. 'TennisMatch' should have its own method 'getDetails'
       which calls Event's getDetails method to get the 
       basic details of the event. It should return this string:
       ${eventBasics} Match: ${this.player1} vs ${this.player2}
    4. Uncomment my code below to create a new instance of TennisMatch
       and call the getDetails method.
*/

/*
// SEE HINT BELOW //
class ChildClass extends ParentClass {
  consturctor(params) {
    super(params);
  }
  method() {
    super.method();
  }
}
*/
