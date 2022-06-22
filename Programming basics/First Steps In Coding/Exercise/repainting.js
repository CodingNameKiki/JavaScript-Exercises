function repainting(input) {
    let amountNylon = Number(input[0]);
    let amountPaint = Number(input[1]);
    let amountThinner = Number(input[2]);
    let hoursToFinishWork = Number(input[3]);
    let priceNylon = 1.50;
    let pricePaint = 14.50;
    let priceThinner = 5.00;
    //10% more paint, 2 more nylon , 0.40 for paper bag
    let sum = ((amountNylon + 2) * priceNylon) + ((amountPaint + (amountPaint * 10 / 100)) * pricePaint) + (amountThinner * priceThinner) + 0.40;
    //30% of sum for the workers
    let priceForWorkers = (sum * 30 / 100) * hoursToFinishWork;
    let AllPayments = sum + priceForWorkers;
    console.log(AllPayments)
}
