const firstNumber = +prompt("Введите первое число");
const secondNumber = +prompt("Введите второе число");


function sum(a,b) {
   return a + b;
}

function diff(a,b){
    return a - b;
}

function mult(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}

let result =
    `Calculations are finished!
    Sum :${firstNumber} + ${secondNumber} = ${sum(firstNumber, secondNumber)} \n
    Diff :${firstNumber} - ${secondNumber} = ${diff(firstNumber, secondNumber)} \n
    Mult :${firstNumber} * ${secondNumber} = ${mult(firstNumber, secondNumber)} \n
    Div :${firstNumber} / ${secondNumber} = ${div(firstNumber, secondNumber)} \n`
console.log(result);
alert(result);
