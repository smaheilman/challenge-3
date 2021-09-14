// Assignment code here
// Get references to the #generate element


//variables of password
var lowerCaseCharacters = ['a', 'b', 'c', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = [' ', '!', '"', '#', '$', '%', "'", '(', ')', '*', '+', 
"'", "-", "/", ":", ".", ";", "<", ">", "?", "@", "[", ']', '|', '^', "_", '~', '`', '{', '}'];

var length = "";
var hasSpecialCharacters;
var hasLowerCaseChar;
var hasUpperCaseChar;
var hasNumericCharacter;

//generate button slection
var generateBtn = document.querySelector("#generate");

//Get password information from user
function getPasswordOptions() {
    //Varaible to store length of password from user input
    var length = parseInt(
        prompt("How many character would you like your password to contain?")
    );

    //Conditional statement to check if password length is a number. Prompts end if this evaluates false
    if(Number.isNaN(length)) {
        alert("Password length must be provided as a number");
        return null;
    }
    
    //conditional statement to check if password length is 8 characters long. Prompts end if this evaluates false
    if(length < 8){
        alert("Password length must be at least 8 characters.");
        return null;
    }

    //conditional statement to check if password length is 128 characters, prompts end if this evaluates false
    if(length > 128) {
        alert("Password length must be less than 129 characters.");
        return null;
    }

    //variable to store boolean regarding the inclusion of special characters
    var hasSpecialCharacters = confirm(
        "Click OK to confirm including special characters."
    );

    //Variable to store boolean regarding the inclusion of numeric characters
    var hasNumericCharacter = confirm(
        "Click OK to confirm including numeric characters."
    );

    //Variable to store lowercase letters
    var hasLowerCaseChar = confirm(
        "Click OK to confirm including lower case characters. "
    );

    //Variable to store Upper case letters
    var hasUpperCaseChar = confirm(
        "Click OK to confirm including upper case characters."
    );

    //Conditional statement to check if user does not include any types of characters
    if(hasUpperCaseChar === false && hasLowerCaseChar === false && hasNumericCharacter === false && hasSpecialCharacters ===false){
        alert("Must choose at least one variable for password.")
        return null;
    }
};

//create password from user
var writePassword = function () {
    var password = getPasswordOptions();
    
    // Write password to the #password input
    var passwordText = document.querySelector("#password");
    var passwordLetters = ""

    if(hasNumericCharacter === true && hasLowerCaseChar === true && hasSpecialCharacters === true && hasUpperCaseChar === true) {
     passwordLetters = passwordLetters.concat(num + upperCaseCharacters + specialCharacters + lowerCaseCharacters);
     console.log(passwordLetters);
    }

    if(hasSpecialCharacters===true && hasUpperCaseChar === true && hasLowerCaseChar == true && hasNumericCharacter === false){
     passwordLetters = passwordLetters.concat(specialCharacters + upperCaseCharacters + lowerCaseCharacters);
    }

    if(hasSpecialCharacters===true && hasUpperCaseChar === false && hasLowerCaseChar == true && hasNumericCharacter === true){
     passwordLetters = passwordLetters.concat(specialCharacters + lowerCaseCharacters + num);
    }

    if(hasSpecialCharacters===false && hasUpperCaseChar === true && hasLowerCaseChar == true && hasNumericCharacter === true){
     passwordLetters = passwordLetters.concat(lowerCaseCharacters + upperCaseCharacters + num);
    }
    
    if(hasSpecialCharacters===true && hasUpperCaseChar === false && hasLowerCaseChar == true && hasNumericCharacter === true){
        passwordLetters = passwordLetters.concat(lowerCaseCharacters + specialCharacters + num)
    }

    if(hasSpecialCharacters===false && hasUpperCaseChar === false && hasLowerCaseChar == true && hasNumericCharacter === true){
        passwordLetters = passwordLetters.concat(lowerCaseCharacters + num);
    }

    if(hasSpecialCharacters===false && hasUpperCaseChar === false && hasLowerCaseChar == false && hasNumericCharacter === true){
        passwordLetters = passwordLetters.concat(num);
    }

    if(hasSpecialCharacters===false && hasUpperCaseChar === true && hasLowerCaseChar == false && hasNumericCharacter === false){
        passwordLetters = passwordLetters.concat(upperCaseCharacters);
    }

    if(hasSpecialCharacters===true && hasUpperCaseChar === false && hasLowerCaseChar == false && hasNumericCharacter === false){
        passwordLetters = passwordLetters.concat(specialCharacters);
    }

    if(hasSpecialCharacters===false && hasUpperCaseChar === false && hasLowerCaseChar == true && hasNumericCharacter === false){
        passwordLetters = passwordLetters.concat(lowerCaseCharacters);
    }

    console.log(passwordLetters)

    //randomize password order
    var randomPassword = ""
    for (var i = 0; i < length; i++) {
        randomPassword = randomPassword + passwordLetters[Math.floor(Math.random() * passwordLetters.length)];
        console.log(randomPassword);
    }
    console.log(randomPassword);
   
    passwordText.value = password;

    console.log(passwordText);

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);