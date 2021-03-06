// Assignment Code
var generateBtn = document.querySelector("#generate");

//array set variables --> need lenght, lowercase, uppercase, numeric, special character

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "%", "&", "*", "(", ")", "_", "+"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//////////////////////////////////////////////////////////////////////

var randomCharSelection = []; // selector to store user choice to randomize
var randomPassword = [];

function generatePassword() {
  var choiceLength = prompt(
    "Please select the length between 8 - 128 characters"
  );
  //console.log(passLength);
  if (choiceLength < 8) {
    alert("Please choose a value between 8 and 128!😱");
    return generatePassword();
  }
  if (choiceLength > 128) {
    alert("Please choose a value between 8 and 128!😅");
    return generatePassword();
  }

  if (choiceLength > 8 && choiceLength < 128) {
    choiceLength.length = choiceLength;

    //console.log(choiceLength.length);
  }

  var choiceLower = confirm("Do you want to add a lowercase letter?");

  if (choiceLower === true) {
    //console.log(passLower);
  }

  var choiceUpper = confirm(
    "Do you want to add an UPPERCASE letter in password?"
  );

  if (choiceUpper === true) {
    //console.log(passUpper);
  }

  var choiceNumber = confirm("Would you like to include a number?");

  if (choiceNumber === true) {
    //console.log(passNumber);
  }

  var choiceSymbol = confirm("And do you want to include a symbol?");

  if (choiceSymbol === true) {
    //console.log(passSymbol);
  }

  //if statement conditios to get user inpit and then .concat to add criteria to generated password.

  if (choiceUpper) {
    randomCharSelection = randomCharSelection.concat(upperCase); // selecting randomcharselection to use value input by user
    //console.log(randomCharSelection); check random
  }
  if (choiceLower) {
    randomCharSelection = randomCharSelection.concat(lowerCase);
  }

  if (choiceNumber) {
    randomCharSelection = randomCharSelection.concat(numbers);
  }

  if (choiceSymbol) {
    randomCharSelection = randomCharSelection.concat(specialChar);
  }

  for (var i = 0; i < choiceLength; i++) {
    var randomizer = (userSelection =
      randomCharSelection[
        Math.floor(Math.random() * randomCharSelection.length)
      ]);

    randomPassword.push(randomizer);
  }

  return randomPassword.join("");
}
/* if (passLower && passUpper && passSymbol && passNumber) {
    choice = lowerCase.concat(upperCase, numbers, specialChar, passwordGen);
    console.log(choice); 
  } */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Write function to prompt user for input determinig values

//var randomPassword = [];

/* WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */
