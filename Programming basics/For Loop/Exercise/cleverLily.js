function cleverLily (input) {
    let age = Number(input[0]);
    let machinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toys = 0;
    let brother = 0
    let money = 0;
    let b = 0;
    for (let i = 1; i <= age; i++){
        if (i % 2 == 0){
            brother++;
            b++
            money += 10 * b
        }else {
            toys++;
        }
} let result = money + (toyPrice * toys);
if (result >= machinePrice){
    console.log(`Yes! ${((result - machinePrice) - brother).toFixed(2)}`)
}else {
    console.log(`No! ${Math.abs((result - machinePrice) - brother).toFixed(2)}`)
}
}
