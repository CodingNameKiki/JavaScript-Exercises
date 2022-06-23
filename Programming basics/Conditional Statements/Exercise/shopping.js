function shopping (input) {
    let budget = Number(input[0]);
    let graphicCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);
    let graphicCardPrice = graphicCards * 250;
    let processorPrice = processors * (graphicCardPrice * 35 / 100);
    let ramPrice = ram * (graphicCardPrice * 10 / 100);
    let allSum = graphicCardPrice + processorPrice + ramPrice;
    if (graphicCards > processors){
        allSum = allSum - (allSum * 15 / 100);
    }
    if (budget >= allSum){
        console.log(`You have ${(budget - allSum).toFixed(2)} leva left!`)
    }else {
        console.log(`Not enough money! You need ${Math.abs(budget - allSum).toFixed(2)} leva more!`)
    }
}
