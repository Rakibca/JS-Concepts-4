/*
const gamer = {
  name: 'Dave',
  score: 0,
  incrementScore: function () {
    this.score++;
  },
};
*/

// NOTE: Create a factory function to return an object called 'gamer'
function gamer(name, score) {
  return {
    name: name,
    score: score,
    incrementScore() {
      // shorthand way of adding a method to an object
      this.score++;
    },
  };
}
const alice = gamer('Alice', 10);
console.log(alice); // {name: 'Alice', score: 10, incrementScore: ƒ()}
alice.incrementScore();
console.log(alice); // {name: 'Alice', score: 11, incrementScore: ƒ()}

// NOTE: Using Object Property Value Shorthand
function gamer2(name, score) {
  return {
    name,
    score,
    incrementScore() {
      this.score++;
    },
  };
}
const alice2 = gamer2('Alice2', 30);
console.log(alice2); // {name: 'Alice2', score: 30, incrementScore: ƒ()}

// NOTE: Created 3 instances of the 'gamer' object
const james = gamer('James', 10);
const dave = gamer('Dave', 3);
const ash = gamer('Ash', 9);

james.incrementScore();
dave.incrementScore();
ash.incrementScore();
dave.incrementScore();
ash.incrementScore();
console.log(james); // {name: 'James', score: 11, incrementScore: ƒ()}
console.log(dave); // {name: 'Dave', score: 5, incrementScore: ƒ()}
console.log(ash); // {name: 'Ash', score: 11, incrementScore: ƒ()}
