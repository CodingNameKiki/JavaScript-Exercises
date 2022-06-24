function cinema (input) {
    let projection = String(input[0]);
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let price = 0;
    switch(projection){
        case "Premiere":
            price = 12 * (rows * columns);
            break;
        case "Normal":
            price = 7.50 * (rows * columns);
            break;
        case "Discount":
            price = 5 * (rows * columns);
            break;
    }
    console.log(`${price.toFixed(2)} leva`)
}
