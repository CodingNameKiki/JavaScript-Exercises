function numbersDivisibleBy9 (input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let sum = 0;
    let printNumber = "";
    for (let i = firstNumber; i <= secondNumber; i++){
    if (i % 9 == 0){
        sum += i;
        printNumber += `${i}\n`;
    }
}
console.log(`The sum: ${sum}`);
console.log(printNumber)
}
