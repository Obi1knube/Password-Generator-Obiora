//Generate Passwords
function generatePassword(userLength,  includeLowercaseChars,includeUppercaseChars,includeNumericChars,includeSpecialChars ){
var includeLowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var includeUppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var includeNumericChars = "0123456789";
var includeSpecialChars = "!@#$%^&*()_+~|}{[]:;?><./-,=";

var password="";
var availableChars="";

// 1/ ask me what length password I want
    // use prompt to get password length

   userLength = prompt('What is the length of your password?')

      // check to make sure number is between 8-128 
    if (userLength < 8 || userLength > 128){
      alert('Please use a length between 8 and 128')
      return(userLength);
    }
    console.log(userLength);

        //** */ 2/ do you want special characters?
 
  includeSpecialChars= confirm("ACCEPT: to add special characters to your password")
  if (includeSpecialChars===true){
    availableChars+=includeSpecialChars;
    return;
  }
       //**/ 3/ do you want numbers?

  includeNumericChars= confirm("ACCEPT: to add numbers to your password")
    if (includeNumericChars===true){
      availableChars+= includeNumericChars;
      return;
    }

      //**/ 4/ do you want upper
      includeUppercaseChars= confirm("ACCEPT: to add uppercase characters to your password")
      if (includeUppercaseChars===true){
        availableChars+= includeUppercaseChars;
        return;
      }
   //** */ 5/ lower case letters
   includeLowercaseChars= confirm("ACCEPT: to add Lowercase characters to your password")
   if (includeLowercaseChars===true){
     availableChars+= includeLowercaseChars;
     return;  
    }
    // ** */6/ generate password
    for (i=0;i<userLength;i++){
      var randomIndex = Math.floor(Math.random()*availableChars.u);
        // create array that holds users preferences 
      password+=availableChars[randomIndex];
    }
    return password;
   
}
generatePassword(password);    

       // **7/ display it on html provided
  
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  