var password;
var length = 16; // Inicializar la longitud de la contraseña
var uppercase = false;
var lowercase = false;
var number = false;
var symbol = false;

//Buttons
function changePasswordText(password) {
  const passwordElement = document.getElementById("password-generated");
  passwordElement.innerHTML = password;
}

function copyPasswordText() {
  const copyButton = document.getElementById("copy-button");
  copyButton.onclick = function () {
    const passwordElement = document.getElementById("password-generated");
    const text = passwordElement.innerText;
    navigator.clipboard.writeText(text);
  };
}

function reloadPassword() {
  const reloadButton = document.getElementById("reload-button");
  reloadButton.onclick = function () {
    password = generatePassword(length, uppercase, lowercase, number, symbol);
    changePasswordText(password);
  };
}

function generatePasswordButton() {
  const generateButton = document.getElementById("generate-button");

  generateButton.onclick = function () {
    password = generatePassword(length, uppercase, lowercase, number, symbol);
    changePasswordText(password);
    copyPasswordText();
  };
}

document.addEventListener("DOMContentLoaded", (event) => {
  const uppercaseSwitch = document.getElementById("uppercase-switch");
  const lowercaseSwitch = document.getElementById("lowercase-switch");
  const numberSwitch = document.getElementById("number-switch");
  const symbolSwitch = document.getElementById("symbol-switch");
  const lengthSlider = document.getElementById("character-length");
  const lengthValue = document.getElementById("length-value");

  uppercaseSwitch.addEventListener("change", function () {
    uppercase = this.checked;
  });
  lowercaseSwitch.addEventListener("change", function () {
    lowercase = this.checked;
  });
  numberSwitch.addEventListener("change", function () {
    number = this.checked;
  });
  symbolSwitch.addEventListener("change", function () {
    symbol = this.checked;
  });
  lengthSlider.addEventListener("input", function () {
    length = this.value;
    lengthValue.textContent = this.value;
  });
});

function generatePassword(length, uppercase, lowercase, number, symbol) {
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let allChars = "";
  if (uppercase) allChars += upperCaseChars;
  if (lowercase) allChars += lowerCaseChars;
  if (number) allChars += numberChars;
  if (symbol) allChars += symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    if (allChars != '') {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    } else {
      password = "Your Password";
    }
  }

  return password;
}

reloadPassword();
generatePasswordButton();
copyPasswordText();