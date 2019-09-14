"use strict";
/* let dog1 = {
  name: 'Charlie',
  breed: 'Puddle',
  age: 4
} */

/* let dog2 = {
  name: 'Choco',
  breed: 'Bulldog',
  age: 8
} */

// let dogs = [dog1, dog2]
let dogs = [
  { name: 'Charlie', breed: 'Puddle', age: 4 },
  { name: 'Choco', breed: 'Bulldog', age: 4 },
  { name: 'Bill', breed: 'Border collie', age: 4 }
];
for (let i = 0; i < dogs.length; i++) {
  if (dogs[i].age === 4 ) {
    console.log(dogs[i].name + " " + " is 4 years old")
  }
};
