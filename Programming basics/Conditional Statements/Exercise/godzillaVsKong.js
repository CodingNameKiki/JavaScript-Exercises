function godzillaVsKong (input) {
    let budget = Number(input[0]);
    let workers = Number(input[1]);
    let clothesWorker = Number(input[2]);
    let decorationPrice = (budget * 10 / 100);
    let clothesPrice = workers * clothesWorker;
    if (workers > 150){
        clothesPrice = clothesPrice - (clothesPrice * 10 / 100)
    }
    let allPriceFilm = decorationPrice + clothesPrice;
    if (budget >= allPriceFilm){
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(budget - allPriceFilm).toFixed(2)} leva left.`)
    }else {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${Math.abs(budget - allPriceFilm).toFixed(2)} leva more.`)
    }
}
