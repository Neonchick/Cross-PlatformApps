let pointFalg = false

let numberCorect = true;

const actionArray = ['+','-','/','x'];
const actionSet = new Set(actionArray);

const MAX_SIZE = 14;

function addChar(char) {
    let result = document.getElementById("result");
    let isDoubleNotNumber = !isNaN(char) || ((result.textContent.length > 0 || char == '-') && !isNaN(result.textContent.slice(-1)));
    let isSecondPoint = char == '.' && pointFalg;
    let isTooBigString = result.textContent.length >= MAX_SIZE;
    if (isDoubleNotNumber && !isSecondPoint && !isTooBigString && numberCorect) {
        result.innerHTML = result.textContent + char;
    
        if (char == '.') {
            pointFalg = true;
        }

        if (actionSet.has(char)) {
            pointFalg = false
        }
    }
}

function reset() {
    document.getElementById("result").innerHTML = "";
    pointFalg = false;
    numberCorect = true;
}

function evalSum(str) {
    let numberArray = str.split('+').map(x => evalMinus(x));
    for (let i = 1; i < numberArray.length; i++) {
        numberArray[0] += numberArray[i];
    }
    return numberArray[0];
} 

function evalMinus(str) {
    let numberArray = str.split('-').map(x => evalMul(x));
    for (let i = 1; i < numberArray.length; i++) {
        numberArray[0] -= numberArray[i];
    }
    return numberArray[0];
} 

function evalMul(str) {
    let numberArray = str.split('x').map(x => evalDiv(x));
    for (let i = 1; i < numberArray.length; i++) {
        numberArray[0] *= numberArray[i];
    }
    return numberArray[0];
} 

function evalDiv(str) {
    let numberArray = str.split('/').map(x => Number(x));
    for (let i = 1; i < numberArray.length; i++) {
        if (numberArray[i] != 0) {
            numberArray[0] /= numberArray[i];
        } else {
            numberArray[0] = 0;
            numberCorect = false;
        }
    }
    return numberArray[0];
} 


function calc() {
    let stringResult = document.getElementById("result");
    let numberResult = evalSum(stringResult.textContent);
    if (numberCorect) {
        stringResult.innerHTML = numberResult.toPrecision(MAX_SIZE).toString();
    } else {
        stringResult.innerHTML = "Деление на ноль";
    }
}