// Assignment Code first steps set arrays 
var lengthOfPassword = 0;
var choiceArr = [];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',]; 
var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

//Get reference to the #generate element 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input 
function writePassword() {
  var isValidPrompts = getPrompts();
  console.log (isValidPrompts);
  if (isValidPrompts){ 
    var passwordText = document.querySelector("#password");
    passwordText.value = generatePassword();
  } else {
    alert("Please pick at least one option of characters");
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i<lengthOfPassword;i++){
    var randomIdx = Math.floor(Math.random()* choiceArr.length);
    console.log (randomIdx);
    password = password + choiceArr[randomIdx];
  }
  return password;
}

// generate passwords based on prompt new section added
function getPrompts(){
  var isValidCharTypeChoice = false;
  
  choiceArr = [];
  
  lengthOfPassword = parseInt(prompt("Please choose password length between 8 to 128 Characters"));
  
  if (isNaN(lengthOfPassword) || lengthOfPassword < 8 || lengthOfPassword > 128){
    alert("Password length must be 8 to 128 characters");
    return false;
  }

  if (confirm("Would you like to add lowercase letter characters")){
      choiceArr = choiceArr.concat(lowerChar); 
      isValidCharTypeChoice = true;
  }
  if (confirm("Would you like to add uppercase letter characters")){
      choiceArr = choiceArr.concat(upperChar);
      isValidCharTypeChoice = true;
  }
  if (confirm("Would you like to add special characters")){
      choiceArr = choiceArr.concat(specialChar);
      isValidCharTypeChoice = true;
  }
  if (confirm("Would you like to add numbers")){
      choiceArr = choiceArr.concat(numbers);
      isValidCharTypeChoice = true;
  } 
  return isValidCharTypeChoice; 
} 

// assigment code
generateBtn.addEventListener("click", writePassword);