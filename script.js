// Assignment Code
 
var letterArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lengthOfPassword = parseInt(window.prompt('Password Lenght'));

console.log(lengthOfPassword);

console.log(typeof lengthOfPassword);

var result = [ ];


for (var i = 0; i < lengthOfPassword; i++) {
  var randomNum = numberArr[Math.floor(Math.random() * numberArr.lentgh)];
  result.push (randomNum);
  console.log(result);

}

//Get reference to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
