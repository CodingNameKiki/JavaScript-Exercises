function oscars (input) {
    let actor = String(input[0]);
    let startPoints = Number(input[1]);
    let judges = Number(input[3]);
    let finalPoints = startPoints;
    for (let i = 3; i < input.length; i++){
        let name = String(input[i])
        i++
        let points = Number(input[i])
        finalPoints = finalPoints + ((name.length * points) / 2);
        if (finalPoints > 1250.5){
            break;
        }
}if (1250.5 > finalPoints){
    console.log(`Sorry, ${actor} you need ${((1250.5 - finalPoints).toFixed(1))} more!`)
}else {
    console.log(`Congratulations, ${actor} got a nominee for leading role with ${finalPoints.toFixed(1)}!`)
}
}
