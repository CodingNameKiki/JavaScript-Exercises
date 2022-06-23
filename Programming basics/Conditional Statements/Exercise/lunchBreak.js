function lunchBreak (input) {
    let series = String(input[0]);
    let timeToWatch = Number(input[1]);
    let lunchBreak = Number(input[2]);
    let lunchTime = lunchBreak * (1/8);
    let freeTime = lunchBreak * (1/4);
    let timeLeft = lunchBreak - (Math.ceil(lunchTime + freeTime));
    if (timeLeft >= timeToWatch){
        console.log(`You have enough time to watch ${series} and left with ${timeLeft - timeToWatch} minutes free time.`)
    }else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.abs(timeLeft - timeToWatch)} more minutes.`)
    }
}
