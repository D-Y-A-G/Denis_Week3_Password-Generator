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
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "%", "&", "*", "(", ")", "_", "+"];
var length = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Write function to prompt user for input determinig values

function criteria() {
  var btn1 = document
    .getElementById("generate")
    .addEventListener("click", function () {
      var passLength = prompt(
        "Please select the length between 8 - 128 characters"
      );

      if (passLength < 8) {
        alert("Please choose a value between 8 and 128!😱");

        return;
      }
      if (passLength > 128) {
        alert("Please choose a value between 8 and 128!");
        return;
      }

      var passUpper = confirm(
        "Do you want to include Uppercase letters in password?"
      );
      //console.log(passUpper); checking

      var passNumber = confirm("Would you like to include a numbers?");
      console.log(passNumber);

      var passSymbol = confirm("And do you want to include a symbol?");
      console.log(passSymbol);

      //if user says yes add criteria for each selection if no selection add msg " 😨 "
    });
}

criteria();

// criteria(); need to define criteria

/* function generatePassword(){
  



























  passLength = prompt("Please select your password lenght between 8 and 128 characters :)");
  console.log("Password Length" + passLength);

  if (!passLength) {
    alert("Your password is 12345678 Goodluck!!!");
  }  

} testing*/

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
