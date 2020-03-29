var sym= ['!@#$%^&*_+='];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 0, 9];
var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
var UppercaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var randomFloat = Math.random() * 26;
var randomWholeNumber = Math.floor(randomFloat);

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  // Array to store types of characters to include in password
  var possiblePasswordCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','@','#','$','%','^','&','*','_','+','=','0','1','2','3','4','5','6','7','8','9'];

  // Variable to store length of password from user input
  var passwordLength = window.prompt('Enter length of password between 8 and 128'); 
  
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false   (NaN)


  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (passwordLength < 8) {
    alert('Choose a number greater than 8');
    return;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (passwordLength > 128) {
    alert('Choose a number less than 128');
    return;
  }

  var passwordHasLowercase = window.confirm("Would you like lowercase letters? Yes/No");
  // if user says yes to lower cases, add everything in passwordHasLowercase array to possiblePasswordCharacters array
  if (passwordHasLowercase) {
    possiblePasswordCharacters.concat(passwordHasLowercase);
  }
  
  var passwordHasUppercase = window.confirm("Would you like Uppercase letters? Yes/No");
  if (passwordHasUppercase) {
    possiblePasswordCharacters.concat(passwordHasUppercase);
  }
  var passwordNumber = window.confirm("Would you like numbers? Yes/No");
  if (passwordNumber) {
    possiblePasswordCharacters.concat(passwordNumber);
  }
  
  var passwordSpecialCharacters = window.confirm("Would you like special characters? Yes/No");
  if (passwordSpecialCharacters) {
    possiblePasswordCharacters.concat(passwordSpecialCharacters);
  }
  var result = []
  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < passwordLength; i++) {
    var possibleCharacter = getRandom(possiblePasswordCharacters);

    result.push(possibleCharacter);
  }
  console.log(result.join(""))
  return result.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
