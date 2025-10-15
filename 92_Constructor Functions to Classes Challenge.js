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




const wizard = new Character('Merlin');
wizard.addItem('a wand');
