function basketballEquipment (input) {
    let yearlyTrainingPrice = Number(input[0]);
    //shoes 40% below the yearly price
    //equipment 20% below the shoes price
    //ball 1/4 of the euipment price
    //accessories 1/5 of the ball price
    let trainingShoes = yearlyTrainingPrice - (yearlyTrainingPrice * 40 / 100);
    let trainingEquipment = trainingShoes - (trainingShoes * 20 / 100);
    let trainingBall = trainingEquipment * (1/4);
    let trainingAccessories = trainingBall * (1/5);
    let priceForAll = yearlyTrainingPrice + trainingShoes + trainingEquipment + trainingBall + trainingAccessories;
    console.log (priceForAll)
}
