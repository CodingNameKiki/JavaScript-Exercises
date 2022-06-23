function toyShop (input) {
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let cars = Number(input[5]);
    let priceAll = (puzzles * 2.60) + (dolls * 3) + (bears * 4.10) + (minions * 8.20) + (cars * 2);
    let toysNumber = puzzles + dolls + bears + minions + cars;
    // if toys are more than 50 - store gives 25% off from the final price
    // from the won money Petq own 10% for rent from the final price 
    if (toysNumber >= 50){
        priceAll = priceAll - (priceAll * 25/ 100);
    }
    let rent = priceAll * 10 / 100;
    let profit = priceAll - rent
    if (profit >= tripPrice){
        console.log(`Yes! ${(profit - tripPrice).toFixed(2)} lv left.`);
    }else {
        console.log(`Not enough money! ${Math.abs(profit - tripPrice).toFixed(2)} lv needed.`)
    }
}
