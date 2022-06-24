function operationsBetweenNumbers (input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let operation = String(input[2]);
    let sum = 0;
    let numberType = ""; //even or odd
    switch(operation){
        case "+":
            sum = firstNumber + secondNumber;
            if (sum % 2 == 0){
                numberType = "even";
            }else {
                numberType = "odd";
        } console.log(`${firstNumber} ${operation} ${secondNumber} = ${sum} - ${numberType}`)
        break;
        case "-":
            sum = firstNumber - secondNumber;
            if (sum % 2 == 0){
                numberType = "even";
            }else {
                numberType = "odd";
        } console.log(`${firstNumber} ${operation} ${secondNumber} = ${sum} - ${numberType}`)
        break;
        case "*":
            sum = firstNumber * secondNumber;
            if (sum % 2 == 0){
                numberType = "even";
            }else {
                numberType = "odd";
        } console.log(`${firstNumber} ${operation} ${secondNumber} = ${sum} - ${numberType}`)
        break;
        case "/":
            sum = firstNumber / secondNumber;
            if (secondNumber !== 0){
                console.log(`${firstNumber} ${operation} ${secondNumber} = ${sum}`)
            }else{
                console.log(`Cannot divide ${firstNumber} by zero`)
            }
        break;
        case "%":
            sum = firstNumber % secondNumber;
            if (secondNumber !== 0){
                console.log(`${firstNumber} ${operation} ${secondNumber} = ${sum}`)
            }else{
                console.log(`Cannot divide ${firstNumber} by zero`)
            }
        break;
    }
}
