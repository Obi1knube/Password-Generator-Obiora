//Generate Passwords
function generatePassword(userLength,  includeLowercaseChars,includeUppercaseChars,includeNumericChars,includeSpecialChars ){
var includeLowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var includeUppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var includeNumericChars = "0123456789";
var includeSpecialChars = "!@#$%^&*()_+~|}{[]:;?><./-,=";

var password="";
var availableChars=[];

// 1/ ask me what length password I want
    // use prompt to get password length

   var userLength = prompt('What is the length of your password?')

      // check to make sure number is between 8-128 
    if (userLength < 8 || userLength > 128){
      alert('Please use a length between 8 and 128')
      return(userLength);
    }
    console.log(userLength);

        //** */ 2/ do you want special characters?
 
  var text = "Include Special characters!\n Either OK or Cancel." 
  if (confirm(text)===true){
    availableChars+=includeSpecialChars;
    }else{
      availableChars=availableChars;
          }
          console.log(availableChars);
        
       //**/ 3/ do you want numbers?
  var text = "Include Numbers!\n Either OK or Cancel." 
  if (confirm(text)===true){
    availableChars+=includeNumericChars;
    }else{
      availableChars=availableChars;
    }
    console.log(availableChars);

        //**/ 4/ do you want uppercase
      var text = "Include Uppercase Letters!\n Either OK or Cancel." 
  if (confirm(text)===true){
    availableChars+=includeUppercaseChars;
    }else{
    availableChars=availableChars;
          }
          console.log(availableChars);

   //** */ 5/ lowercase letters
   var text = "Include Lowercase Letters!\n Either OK or Cancel." 
   if (confirm(text)===true){
     availableChars+=includeLowercaseChars;
     }else{
     availableChars=availableChars;
          }
          console.log(availableChars);
   
      // ** */6/ generate password
    for (i=0;i< availableChars.length;i++){
      var randomIndex = Math.floor(Math.random()*availableChars.u);
        // create array that holds users preferences 
      password+=userLength[randomIndex];
    }
    return password;
 console.log(password);
}
 generatePassword();    

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
  