function coins(input) {
    let sum = Number(input[0]);
    let res = Math.floor(sum * 100);
    let coins = 0
    while (res > 0) {
        if (res >= 200) {
            res -= 200;
            coins++
        } else if (res >= 100) {
            res -= 100;
            coins++
        } else if (res >= 50){
            res -= 50;
            coins++
        } else if (res >= 20){
            res -= 20;
            coins++
        } else if (res >= 10){
            res -= 10;
            coins++
        } else if (res >= 5){
            res -= 5;
            coins++
        } else if (res >= 2){
            res -= 2;
            coins++
        } else {
            res -= 1;
            coins++
        }
    }
    console.log(coins)
}
