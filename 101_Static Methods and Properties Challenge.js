/*
Challenge:
1. Set up a static method called getNewIntern. 
   getNewIntern should return an object with a 'name' property, 
   a 'role' property which is hard-coded to ‘intern’, and a 
   'startDate' property which should be the time of code execution. 
   (NOTE: How can you use JS to get the time right now?)
*/

class Employee {
  constructor(name) {
    this.name = name;
  }

  // SEE ANSWER BELOW //
  static getNewIntern(name) {
    return {
      name,
      role: 'intern',
      startDate: new Date().toDateString(),
    };
  }
  // SEE ANSWER ABOVE //
}

console.log(Employee.getNewIntern('Dave')); // {name: 'Dave', role: 'intern', startDate: 'Thu Apr 25 2024'}
