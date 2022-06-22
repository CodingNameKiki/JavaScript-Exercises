function suppliesForSchool(input) {
    let penPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let cleaningChemical = Number(input[2]);
    let discount = Number(input[[3]]);
    let pricePenPack = penPacks * 5.80;
    let priceMarkerPack = markerPacks * 7.20;
    let priceCleaningChemical = cleaningChemical * 1.20;
    let sum = pricePenPack + priceMarkerPack + priceCleaningChemical;
    let sumWithDiscount = sum - (sum * (discount / 100))
    console.log(sumWithDiscount)
}
