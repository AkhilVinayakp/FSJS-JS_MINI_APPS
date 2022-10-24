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
    // event to copy the content to the clipboard
    navigator.clipboard.writeText(resultEl.textContent);
})

generateEl.addEventListener('click', () => {
    const lower = lowercaseEl.checked;
    const upper = uppercaseEl.checked;
    const number = numbersEl.checked;
    const symbol = symbolsEl.checked;
    const length = lengthEl.value;
    resultEl.textContent = generatePassword(lower, upper, number, symbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let new_password = "";
    let choosen_list = [];
    if(lower){
        choosen_list.push("lower");
    }
    if(upper){
        choosen_list.push("upper");
    }
    if(number){
        choosen_list.push("number");
    }
    if(symbol){
        choosen_list.push("symbol");
    }
    let fns = Object.keys(randomFunc);
    while(new_password.length <= length){
        //picking the function random
        const selected_fn = fns[Math.floor(Math.random()*(fns.length))];
        if(!(choosen_list.includes(selected_fn))){
            continue;
        }
        console.log("selected one", selected_fn)
        new_password += randomFunc[selected_fn]();
    }
    return new_password;
}

function getRandomLower() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    return letters[Math.floor(Math.random()*letters.length)];

}

function getRandomUpper() {
    const upper = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    return upper[Math.floor(Math.random() * upper.length)];
}

function getRandomNumber() {
    const number = "1234567890";
    return number[Math.floor(Math.random() * number.length)];
}

function getRandomSymbol() {
    const symbol = "!@#$%^&*";
    return symbol[Math.floor(Math.random() * symbol.length)];
}