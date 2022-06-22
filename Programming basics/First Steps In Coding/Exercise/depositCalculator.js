function depositCalculator(input) {
    let deposit = Number(input[0]);
    let monthsToPay = Number(input[1]);
    let yearlyInterestRate = Number(input[2])
    let sum = deposit + monthsToPay * ((deposit * yearlyInterestRate / 100) / 12);
    console.log(sum)
}
