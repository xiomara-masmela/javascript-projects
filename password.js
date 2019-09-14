"use strict";
let uppercaseRegex = /[A-Z]/;
let lowercaseREgex = /[a-z]/;
let numberRegex = /[0-9]/;
let passwordCheck = (password) => {
    if(password.length >= 8){
        // for(let i = 0; i < password.length; i++){}
            if (uppercaseRegex.test(password) === true){
                if(lowercaseREgex.test(password) === true) {
                    if(numberRegex.test(password) === true) {
                        console.log("Correct password")
                    } else {
                        console.log("Password must have at least one digit")
                    }; //end of number check
                    
                } else {
                    console.log("Password must have at least one lowercase")
                } // end of lowercase check
            } else {
                console.log("Password must have at least one uppercase")
            } // end of uppercase check

    } else {
        console.log("Password must be at least 8 characters long")
    }
    
}// end of passwordCheck

console.log(passwordCheck("bbbbbbb%1vvvvvvvH"))