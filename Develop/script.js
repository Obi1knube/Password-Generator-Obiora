// create variables to store all options

//** */ 1/ ask me what length password I want

// use prompt to get password length
    // check to make sure number is between 8-128 

//** */ 2/ do you want special characters?
//use confirm

//** */ 3/ do you want numbers?
//use confirm

//**/ 4/ do you want upper
//use confirm

//** */ 5/ lower case letters
//use confirm

// ** */6/ generate password
  // create array that holds users preferences 
  // look into Maths.Random to randomize selection
  // loop to select a random character from the array. 'length of password' iterations

// ** */7/ display it on html provided

// Assignment Code
function generatePassword(){
  // All code goes in here
  var userLength = prompt('What is the length of your password?')
//  if password length is less than 8 or password length is greater than 128
// 1< 8 1 > 128
  if (userLength < 8 || userLength > 128){
    alert('Please use a length between 8 and 128')
    return
  }
  console.log(userLength)
// next section
var specialCharacter = prompt('do you want special characters?')









//Do no memorise coding, use critical thinking. Ask the followind questions:
// What is it doing?
//  Why do I use it?
// How do I use it?




}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// alert('Hello Everybody')
// confirm('Do you like rice?')
// prompt('What is your name?')