function minNumber (input) {
    let index = 0;
    let command = input[index];
    index++;
    let minNumber = Number.MAX_SAFE_INTEGER
    while (command !== "Stop"){
        let number = Number(command);
        command = input[index]
        index++
        if (minNumber > number){
            minNumber = number
        }
    }
    console.log(minNumber)
}
