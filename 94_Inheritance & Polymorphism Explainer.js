// Inheritance:
const baseEvent = {
  name: '',
  date: '',
  location: '',
  getDetails: function () {},
};

const concert = {
  // inherits name, date, location, getDetails from baseEvent
  headliner: '',
};

console.log(event);

/* From Google:
Polymorphism in JavaScript, a fundamental concept in Object-Oriented Programming (OOP), allows
objects of different classes to be treated as objects of a common type, and to respond to the same
method call in different ways based on their specific implementation. This "many forms" capability enhances code flexibility and reusability. 
*/

/* From Google:
There are primarily two ways to achieve polymorphism in JavaScript: Method Overriding (Subtype Polymorphism).
This occurs when a subclass provides its own implementation of a method that is already defined in its superclass.
When the method is called on an object, the specific implementation executed depends on the actual type of the object at runtime.
*/

// From Google:
class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks');
  }
}

class Cat extends Animal {
  speak() {
    console.log('Cat meows');
  }
}

const myDog = new Dog();
const myCat = new Cat();
const genericAnimal = new Animal();

myDog.speak(); // Dog barks
myCat.speak(); // Cat meows
genericAnimal.speak(); // Animal makes a sound
