"use strict";
class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age
    } // end of constructor
    // methods
    bark() {
        console.log(this.name + " " + "woof woof");
    }
}
let dogs = [
    new Dog('charlie', 'border collie', 4),
    new Dog('choco', 'chihuahua', 4),
    new Dog('bill', 'border collie', 7),
]
for (let i = 0; i < dogs.length; i++) {
    if (dogs[i].age === 4 ) {
      //console.log(dogs[i].name + " " + " is 4 years old")
      dogs[i].bark();
      
    }
  };
