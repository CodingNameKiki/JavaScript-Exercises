function sumNumbers (input) {
    let index = 0;
    let number = Number(input[index]);
    index++

    let sum = 0;
    while (sum < number){
        num = Number(input[index]);
        index++
        sum += num;
    }
    console.log(sum)
}
