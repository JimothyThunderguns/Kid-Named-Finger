// Assignment Code
// this is the generator
var generateBtn = document.querySelector("#generate");

// variables

//length of characters
var charLength = 4;
//choice array
var choiceArr = [];

var password = "";

//special characters
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']','|','?','<','>','/','~','_','`','+',''];
//lower case
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//uppercase
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//numbers
var numberArray = ['1','2','3','4','5','6','7','8','9','0'];


// Write password to the #password input
function writePassword() {
   
   var passwordText = document.querySelector("#password");
   var prompts = getPrompt();

   if(prompts) {
    var  password = generatePassword();
    passwordText.value = password;
   }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//password generation function

function generatePassword() {
  //for loop that makes length of the password
  for (var i = 0; i < charLength; i++) {
    var random = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[random];
  }
return password;
}


//this will go through each prompt to see which criteria is met
function getPrompt() {
  charLength = parseInt(prompt("How long do you want your password (8 - 128 characters"));
    if(isNaN(charLength) || charLength < 8 || charLength > 128){
      alert("Invalid character length, please make it between 8-128 characters.");
      return false;
    }
    //lower case
    if (confirm("Should lower case be included?")) {
      choiceArr = choiceArr.concat(lowerCase);
    }
    // upper case
    if (confirm("Should upper case be included?")) {
      choiceArr = choiceArr.concat(upperCase);
    }//numbers
    if (confirm("Should numbers be included?")) {
      choiceArr = choiceArr.concat(numberArray);
    }//special characters
    if (confirm("Should special characters be included")) {
      choiceArr = choiceArr.concat(specialCharacters);
    }
    return true;
    }


