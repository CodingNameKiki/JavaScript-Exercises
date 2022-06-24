function fishingBoat (input) {
    let budget = Number(input[0]);
    let season = String(input[1]);
    let fishers = Number(input[2]);
    let boatRent = 0;
    switch(season){
        case "Spring":
            boatRent = 3000;
        break
        case "Summer":
        case "Autumn":
            boatRent = 4200;
        break;
        case "Winter":
            boatRent = 2600;
        break
    }if (fishers <= 6){
        boatRent = boatRent - (boatRent * 10 / 100);
    }else if (fishers > 6 && fishers <= 11){
        boatRent = boatRent - (boatRent * 15 / 100);
    }else {
        boatRent = boatRent - (boatRent * 25 / 100);
    }
    if (fishers % 2 == 0 && season != "Autumn"){
        boatRent = boatRent - (boatRent * 5 / 100);
    }
    if (budget >= boatRent){
        console.log (`Yes! You have ${(budget - boatRent).toFixed(2)} leva left.`)
    }else {
        console.log(`Not enough money! You need ${Math.abs(budget - boatRent).toFixed(2)} leva.`)
    }
}
