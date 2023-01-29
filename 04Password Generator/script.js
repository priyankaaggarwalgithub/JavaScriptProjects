const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.value);
  alert("Successfully copied the text")
});

generateEl.addEventListener('click', () => {
    if(lengthEl.value<8){
        alert("Password too short.Length should be atleast 8.")
    }
    const lower = lowercaseEl.checked;
  const upper = uppercaseEl.checked;
  const number = numbersEl.checked;
  const symbol = symbolsEl.checked;
  const length = lengthEl.value;
  if (upper + lower + number + symbol === 0) {
    alert("Please check atleast one box!");
    return;
  }
  generatePassword(lower, upper, number, symbol, length);
})

function generatePassword(lower, upper, number, symbol, length) {

    let password="";
    while(password.length<=length){
        if(lower){
            password=password+randomFunc.lower();
        }
       
        if(upper){
            password=password+randomFunc.upper();
        }
       
        if(number){
            password=password+randomFunc.number();
        }
       
        if(symbol){
            password=password+randomFunc.symbol();
        }
     
      
    }
    resultEl.textContent = password.slice(0, length);
}

function getRandomLower() {
    const lower="abcdefghijklmnopqrstuvwxyz";
    return lower[Math.floor(Math.random()*lower.length)];
}

function getRandomUpper() {
    const upper="abcdefghijklmnopqrstuvwxyz".toUpperCase();
    return upper[Math.floor(Math.random()*upper.length)];
}

function getRandomNumber() {
    const num="1234567890";
    return num[Math.floor(Math.random()*num.length)];
}

function getRandomSymbol() {
    const symbol="!@#$%^&*";
    return symbol[Math.floor(Math.random()*symbol.length)];
}