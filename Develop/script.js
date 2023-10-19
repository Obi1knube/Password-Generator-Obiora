

function generatePassword(){

    // 1/ ask me what length password I want
    // use prompt to get password length
  var userLength = prompt('What is the length of your password?')

   // check to make sure number is between 8-128 
  if (userLength < 8 || userLength > 128){
    alert('Please use a length between 8 and 128')
    return
  }
  console.log(userLength)
// next section
//** */ 2/ do you want special characters?
//use confirm
var option1
    if (confirm("Press ok to include special characters")==true){
      option1= "Special character will be included";

      return
    }else{
      option1= "No special character has been selected";
      return
    }
  
}

generatePassword();

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

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

