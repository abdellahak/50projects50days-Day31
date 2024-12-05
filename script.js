const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
let counter = document.querySelector(".password-length-input");

add.addEventListener("click", () => {
  if (counter.value >= 20) return;
  counter.value = parseInt(counter.value) + 1;
  generatePassword();
});

subtract.addEventListener("click", () => {
  if (counter.value <= 1) return;
  counter.value = parseInt(counter.value) - 1;
  generatePassword();
});
let Uppercase = document.querySelector("#uppercase");
let Lowercase = document.querySelector("#lowercase");
let Numbers = document.querySelector("#numbers");
let Symbols = document.querySelector("#symbols");
generatePassword();
function generatePassword() {
  let passwordLength = document.querySelector(".password-length-input").value;
  let passwordLengthInt = parseInt(passwordLength);
  let withUppercase = Uppercase.checked;
  let withLowercase = Lowercase.checked;
  let withNumbers = Numbers.checked;
  let withSymbols = Symbols.checked;
  let password = document.querySelector("#passwordInput");

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allChars = "";
  if (withUppercase) allChars += uppercaseChars;
  if (withLowercase) allChars += lowercaseChars;
  if (withNumbers) allChars += numberChars;
  if (withSymbols) allChars += symbolChars;

  if (allChars === "") {
    password.value = "";
    password.title = "";
    return;
  }

  let generatedPassword = "";
  for (let i = 0; i < passwordLengthInt; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars[randomIndex];
  }

  password.value = generatedPassword;
  password.title = generatedPassword;
}

let passwordGeneratorForm = document.querySelector(".generator");
passwordGeneratorForm.addEventListener("change", () => {
  generatePassword();
});
passwordGeneratorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  generatePassword();
});

let copyButton = document.querySelector(".copy");
copyButton.addEventListener("click", () => {
  let passwordInput = document.querySelector("#passwordInput");
  passwordInput.select();
  navigator.clipboard.writeText(passwordInput.value);
});
