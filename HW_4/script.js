let firstNumber, secondNumber, result;

const operation = reqOperation();

firstNumber = reqNumber('Enter the first number');
secondNumber = reqNumber2('Enter the second number');

switch (operation) {
    case '+':
    case '-':
    case '*':
    case '/':
        num2 = +prompt('Enter the second number');
        break;
}

switch (operation) {
    case '+':
        result = sum(firstNumber, secondNumber);
        break;
    case '-':
        result = diff(firstNumber, secondNumber);
        break;
    case '*' :
        result = mult(firstNumber, secondNumber);
        break;
    case '/':
        result = div(firstNumber, secondNumber);
        break;
    case 'sin':
        result = sin(firstNumber);
        break;    
}

alert(`You choose ${operation} has a result ${result}`);


function reqOperation() {
    let operation;
    while(!operation) {
        let sym = prompt('Choose the math operation + , - ,  ,  , sin ');
        switch(sym) {
            case '+':
            case '-':
            case '':
            case '':
            case 'sin':
                operation = sym;
                break;
        }
    }
    return operation;
}

function reqNumber() {
    let result;
    while (!result) {
        result = +prompt('Enter the first number');
    }
    return result;
}
function reqNumber2() {
    let result;
    while (!result) {
        result = +prompt('Enter the second number');
    }
    return result;
}


function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function sin(a) {
    return Math.sin(a);
}


