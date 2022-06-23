function worldSwimmingRecord (input) {
    let recordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timeToSwimMeter = Number(input[2]);
    let needToSwim = distanceMeters * timeToSwimMeter;
    let timeAdded = (Math.floor(distanceMeters / 15)) * 12.5;
    let finalTime = needToSwim + timeAdded;
    if (recordSeconds > finalTime){
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`)
    }else {
        console.log(`No, he failed! He was ${Math.abs(recordSeconds - finalTime).toFixed(2)} seconds slower.`)
    }
}
