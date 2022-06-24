function newHouse (input) {
    let flowers = String(input[0]);
    let amountFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    switch(flowers){
        case "Roses":
            price = amountFlowers * 5;
            if (amountFlowers > 80){
                price = price - (price * 10 / 100);
            }
        break;
        case "Dahlias":
            price = amountFlowers * 3.80;
            if (amountFlowers > 90){
                price = price - (price * 15 / 100);
            }
        break;
        case "Tulips":
            price = amountFlowers * 2.80;
            if (amountFlowers > 80){
                price = price - (price * 15 / 100);
            }
        break;
        case "Narcissus":
            price = amountFlowers * 3;
            if (amountFlowers < 120){
                price = price + (price * 15 / 100);
            }
        break;
        case "Gladiolus":
            price =amountFlowers * 2.50;
            if (amountFlowers < 80){
                price = price + (price * 20 / 100);
            }
        break;
    }if (budget >= price){
        console.log(`Hey, you have a great garden with ${amountFlowers} ${flowers} and ${(budget - price).toFixed(2)} leva left.`)
    }else {
        console.log(`Not enough money, you need ${Math.abs(budget - price).toFixed(2)} leva more.`)
    }
}
