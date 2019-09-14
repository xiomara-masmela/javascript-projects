'use strict'
let num1 = Math.floor(Math.random() * 100)
let num2 = Math.floor(Math.random() * 100)
let num3 = Math.floor(Math.random() * 100)

let array = [num1, num2, num3]
console.log(array)

let descending = array.sort((a, b) => a - b)
console.log(descending)
let ascending = array.sort((a, b) => b - a)
console.log(ascending)
