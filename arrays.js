"use strict";

let a = [1,5,10,8,15];
let biggest = a[0]; 
let sum = 0;

 for (let i=1;i<a.length;i++){
    if (a[i] >biggest){
        biggest = a[i];
    }
}
    for (let i=0;i<a.length;i++){
        sum+= a[i];
}
console.log(biggest);
console.log (sum);

