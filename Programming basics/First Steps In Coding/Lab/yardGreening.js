function yardGreening(input) {
    let squareMeters = Number(input[0]);
    let priceOneSquareMeter = 7.61;
    //discount 18%
    let finalPrice = (squareMeters * priceOneSquareMeter)
    let discountPrice = finalPrice * 0.18;
    console.log (`The final price is: ${finalPrice - discountPrice} lv.`)
    console.log (`The discount is: ${discountPrice} lv.`)
}
