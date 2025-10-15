// NOTE: This is a Constructor Function
/*
function Gamer(name, score) {
  this.name = name;
  this.score = score;
  this.incrementScore = function () {
    this.score++;
  };
}
*/

const james = new Gamer('James', 1); // ReferenceError: Cannot access 'Gamer' before initialization

// NOTE: This is a Class
class Gamer {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  incrementScore() {
    this.score++;
  }
}

const dave = new Gamer('Dave', 0);
const sarah = new Gamer('Sarah', 0);
dave.incrementScore();

console.log(dave); // Gamer {name: 'Dave', score: 1}
console.log(sarah); // Gamer {name: 'Sarah', score: 0}
