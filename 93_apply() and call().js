function displayPolitician(currentSituation) {
  // console.log(this);
  // returns 'undefined' if script type is set to 'module' in the index.html file.
  // returns 'window' if script type is removed in the index.html file.
  // returns {name: 'Carly Fowler', age: 40} using the call() method.

  console.log(
    `${this.name} is ${this.age} years old. Current situation: ${currentSituation}.`
  ); // TypeError: Cannot read properties of undefined (reading 'name') // Shown 3 times
}

const politician1 = {
  name: 'Carly Fowler',
  age: 40,
};

const politician2 = {
  name: 'Dave Bland',
  age: 55,
};

// displayPolitician();
displayPolitician.call(politician1, 'In jail for corruption'); // Carly Fowler is 40 years old. Current situation: In jail for corruption.
displayPolitician.call(politician2, 'Resigned due to incompetence'); // Dave Bland is 55 years old. Current situation: Resigned due to incompetence.

// NOTE: the apply() method takes an array of arguments
displayPolitician.apply(politician1, ['In jail for corruption']); // Carly Fowler is 40 years old. Current situation: In jail for corruption.
