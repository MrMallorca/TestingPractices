const calculator = {
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply
};



function add(a, b){
    const result = a + b;

    return result;
}

function subtract(a, b){
    const result = a - b;
    
    return result;
}

function divide(a, b){
    const result = a / b;
    
    return result;
}

function multiply(a, b){
    const result = a * b;
    
    return result;
}

module.exports = calculator;