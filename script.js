// Assignment Code
 
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',]; 
var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lengthOfPassword = parseInt(window.prompt('Password Lenght'));

console.log(lengthOfPassword);

console.log(typeof lengthOfPassword);

var result = [ ];

for (var i = 0; i < lengthOfPassword; i++) {
  var randomNum = numberArr[Math.floor(Math.random() * number.length)];
  result.push (randomNum);
  console.log(result);

}


// all this was here//

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
