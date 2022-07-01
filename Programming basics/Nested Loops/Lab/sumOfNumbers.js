function sumOfNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2])
    let counter = 0;
    let flag = false;
    for (let i = start; i <= end; i++) {
        for (let k = start; k <= end; k++) {
            let result = i + k;
            if (result == magicNumber) {
                counter++
                console.log(`Combination N:${counter} (${i} + ${k} = ${magicNumber})`)
                flag = true;
                break;
            }
            counter++;
        }   
        if (flag == true) {
            break;
        }
    }if (flag == false){
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }
}
