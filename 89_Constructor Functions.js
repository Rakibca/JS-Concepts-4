/*
const gamer = {
  name: 'Dave',
  score: 0,
  incrementScore: function () {
    this.score++;
  },
};
*/

// NOTE: Create constructor function with the name 'Gamer' in upprcase
function Gamer(name, score) {
  this.name = name;
  this.score = score;
  this.incrementScore = function () {
    this.score++;
  };
}

const dave = new Gamer('Dave', 0);
const sarah = new Gamer('Sarah', 2);

console.log(dave); // Gamer {name: 'Dave', score: 0}
dave.incrementScore();
console.log(dave); // Gamer {name: 'Dave', score: 1}

console.log(sarah); // Gamer {name: 'Sarah', score: 2}
sarah.incrementScore();
console.log(sarah); // Gamer {name: 'Sarah', score: 3}
