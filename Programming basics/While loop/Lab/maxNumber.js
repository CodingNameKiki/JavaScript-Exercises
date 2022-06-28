function maxNumber (input) {
    let index = 0;
    let command = input[index];
    index++;
    let maxNumber = Number.MIN_SAFE_INTEGER
    while (command !== "Stop"){
        let number = Number(command);
        command = input[index]
        index++
        if (maxNumber < number){
            maxNumber = number
        }
    }
    console.log(maxNumber)
}
