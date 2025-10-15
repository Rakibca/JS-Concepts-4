/*
function Character(name) {
  this.name = name;
  this.collectedItemsArr = [];
  this.addItem = function (item) {
    this.collectedItemsArr.push(item);
    console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`);
  };
}
*/

/*
Challenge:
Rebuild the above Constructor Function as a Class.
*/

//////////////////////
// SEE ANSWER BELOW //
//////////////////////

class Character {
  constructor(name) {
    this.name = name;
    this.collectedItemsArr = [];
  }
  addItem(item) {
    this.collectedItemsArr.push(item);
    console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`);
  }
}

const wizard = new Character('Merlin');
const witch = new Character('Hermione');

wizard.addItem('a wand'); // Merlin now has: a wand
wizard.addItem('a map'); // Merlin now has: a wand, a map
wizard.addItem('a rope'); // Merlin now has: a wand, a map, a rope
witch.addItem('a map'); // Hermione now has: a map
witch.addItem('a rope'); // Hermione now has: a map, a rope
