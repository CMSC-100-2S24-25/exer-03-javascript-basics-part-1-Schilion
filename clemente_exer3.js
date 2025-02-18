// function to validate if two passwords are the same
function validatePassword(password1, password2){
    
    if (password1 !== password2) return false; // returns false if passwords don't match
    if (password1.length < 8) return false; // returns false if password doesn't meet minimum length

    // flags to check if it has 1 uppercase, 1 lowercase, and 1 number
    let hasUpper = false, hasLower = false, hasNumber = false;

    // iterate to each character of the passwords to check it
    for (let char of password1) {
        if (char >= 'A' && char <= 'Z') hasUpper = true; // check if character is an uppercase
        if (char >= 'a' && char <= 'z') hasLower = true; // check if character is a lowercase
        if (char >= '0' && char <= '9') hasNumber = true; // check if character is a number 
    }

    return hasUpper && hasLower && hasNumber; // Return true only if all conditions are met
    
}

// function to reverse the password
function reversePassword(password) {
    let reversed = "";
    
    // iterate backwards through the string and build the reversed password
    for (let i = password.length - 1; i >= 0; i--) {
        reversed += password[i];
    }
    
    return reversed;
}


console.log(validatePassword("Timothy24", "Timothy24"));
console.log(reversePassword("Timothy24"));