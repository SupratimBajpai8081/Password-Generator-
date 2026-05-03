const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*(){}[]=<>/,.";

function getRandomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function generatePassword() {
  const length = +lengthEl.value;
  let chars = "";
  let password = "";

  if (uppercaseEl.checked) chars += upperLetters;
  if (lowercaseEl.checked) chars += lowerLetters;
  if (numbersEl.checked) chars += numbers;
  if (symbolsEl.checked) chars += symbols;

  if (!chars) {
    passwordEl.value = "❌ Select at least one option";
    return;
  }

  for (let i = 0; i < length; i++) {
    password += getRandomChar(chars);
  }

  passwordEl.value = password;
}

function copyToClipboard() {
  navigator.clipboard.writeText(passwordEl.value).then(() => {
    alert("✅ Password copied to clipboard!");
  });
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);
