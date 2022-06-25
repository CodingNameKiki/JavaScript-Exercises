function sumOfNumbers (input) {
    let n = String(input[0]);
    let sum = 0;
    for(let i = 0; i < n.length; i++){
        let numbers = Number(n.charAt(i));
        sum += numbers;
    }
    console.log(`The sum of the digits is:${sum}`)
}
