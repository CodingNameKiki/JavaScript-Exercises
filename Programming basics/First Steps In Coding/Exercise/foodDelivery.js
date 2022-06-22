function foodDelivery(input) {
    let chickenDishes = Number(input[0]);
    let fishDishes = Number(input[1]);
    let vegetarianDishes = Number(input[2]);
    let chickenPrice = 10.35;
    let fishPrice = 12.40;
    let vegetarianPrice = 8.15;
    //price for delivery = 2.50
    //extra 20% of the sum for the dessert
    let sum = (chickenDishes * chickenPrice) + (fishDishes * fishPrice) + (vegetarianDishes * vegetarianPrice);
    let dessertprice = (sum * 20 / 100);
    let finalPriceEveryting = sum + dessertprice + 2.50;
    console.log(finalPriceEveryting)
}
