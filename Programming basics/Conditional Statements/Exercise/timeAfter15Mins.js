function timeAfter15Mins (input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let after15Mins = minutes + 15;
    if (after15Mins > 59){
        hours += 1;
        after15Mins = after15Mins - 60;
    }
    if (hours > 23){
        hours = 0
    }
    if (after15Mins < 10){
        console.log(`${hours}:0${after15Mins}`)
    }else {
        console.log(`${hours}:${after15Mins}`)
    }
}
