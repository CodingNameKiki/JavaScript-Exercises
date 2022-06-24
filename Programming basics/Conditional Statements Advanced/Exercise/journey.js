function journey (input) {
    let budget = Number(input[0]);
    let season = String(input[1]);
    let destination = ""
    let placeToSleep = ""
    switch(season){
        case "summer":
            if (budget <= 100){
                budget = (budget * 30 / 100);
                destination = "Bulgaria";
                placeToSleep = "Camp"
            }else if (budget > 100 && budget <= 1000){
                budget = (budget * 40 / 100);
                destination = "Balkans"
                placeToSleep = "Camp"
            }else {
                budget = (budget * 90 / 100)
                destination = "Europe"
                placeToSleep = "Hotel"
            }
            break;
        case "winter":
            if (budget <= 100){
            budget = (budget * 70 / 100);
            destination = "Bulgaria";
            placeToSleep = "Hotel"
        }else if (budget > 100 && budget <= 1000){
            budget = (budget * 80 / 100);
            destination = "Balkans"
            placeToSleep = "Hotel"
        }else {
            budget = (budget * 90 / 100)
            destination = "Europe"
            placeToSleep = "Hotel"
        }
        break;
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${placeToSleep} - ${(budget.toFixed(2))}`)
}
