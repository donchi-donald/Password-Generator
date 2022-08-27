const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const clipboardEl = document.getElementById('clipboard')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')




function getRandomLower(){
   
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}


function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}


function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    const i = Math.floor(Math.random()*symbols.length);
    return symbols[i];
}

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


generateEl.addEventListener('click', ()=>{
    const length = +lengthEl.value 
    const hasLower = lowercaseEl.checked 
    const hasUpper = uppercaseEl.checked 
    const hasNumber = numbersEl.checked 
    const hasSymbol = symbolsEl.checked 

    resultEl.innerText = generatePassword(length, hasUpper, hasLower,  hasNumber, hasSymbol)

})

function generatePassword(length, upper, lower,  number, symbol){
    let generatePassword = ''
    const typesCount = upper+lower+number+symbol
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item =>Object.values(item)[0])

    if(typesCount===0){
        return ''
    }
    //i=0 lenght=20, 4 
    for(let i=0; i<length; i += typesCount ){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0]
            generatePassword +=randomFunc[funcName]()

        })
        
    }
    const finalPassword = generatePassword.slice(0, length)
    return finalPassword;

}





