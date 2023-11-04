//Generate Passwords

var includeLowercaseChars = ['a','b','c','d','e','f','g','h'];
var includeUppercaseChars = ['A','B','C','D','E','F','G','H'];
var includeNumericChars = ['0','1','2','3','4','5','6','7','8','9'];
var includeSpecialChars = ['&','!','@','#','$'];

//var password="";
//var availableChars=[];


function userChoice(){
  var userLength= parseInt(prompt(" choose betweem 8 and 128 characters to generate password" ),10);
  console.log(typeof(userLength));
  if (userLength < 8 ){
       alert('Please use a length between 8 and 128')  
        return null; 
  }
  if (userLength > 128 ){
       alert('Please use a length between 8 and 128')  
        return null; 
  }
 if ( Number.isNaN(userLength)){
    alert("please introduce a number")
    return null;

 }
 var hasSpecialChars= confirm("do you want to include special Characters?")
 console.log(hasSpecialChars);
 var hasNumericChars= confirm("do you want to include Numbers?");
 var hasUpercaseLetters=confirm("Do you want to include Uppercase Letters?");
 var hasLowercaseletters =confirm ("do you want to include Lowercase letters?");

 //If everthing is false, do not proceed
 if (hasSpecialChars=== false && hasNumericChars===false &&hasUpercaseLetters ===false && hasLowercaseletters ===false){
  alert("please choose a character"); 
  return null;

 }
//object is used to return user password length and other choices made by user 
var obj={
  userLength, 
  hasSpecialChars,
  hasNumericChars,
  hasUpercaseLetters,
  hasLowercaseletters
};
return obj;

}
//Function UserChoice  is made available to the funtion generate password  
function generatePassword(){
  var choices= userChoice();
  if (!choices) {
    return null;
  }
  var possibleChars=[];
  var results=[];

  if(choices.hasSpecialChars){                         //if hasSpecialchsrs=true
console.log('User confirmed special character');

    possibleChars= possibleChars.concat(includeSpecialChars);
   }

   if (choices.hasNumericChars){
    possibleChars= possibleChars.concat(includeNumericChars);
   }
   if (choices.hasUpercaseLetters) {
    possibleChars = possibleChars.concat(includeUppercaseChars);
  }

  if (choices.hasLowercaseletters) {
    possibleChars = possibleChars.concat(includeLowercaseChars);
  }
  for (var i = 0; i < choices.userLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    results.push(possibleChars[randomIndex]);
  }
    console.log(results);
  return results.join('');
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
  
