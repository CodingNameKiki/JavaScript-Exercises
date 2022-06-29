function vacation (input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;
    let ownMoney = money;
    let spendingDays = 0;
    let days = 0;
    let isSaveMoney = true;
    while (neededMoney > ownMoney){
        let command = (input[index]);
        index++;
        let tempMoney = Number(input[index]);
        index++;
        if (command){
            days++
        }
        if (command === "spend"){
            ownMoney -= tempMoney;
            spendingDays++
        }else {
            ownMoney += money;
            spendingDays = 0;
            if(ownMoney < 0){
                ownMoney = 0;
            }
        }
        if (spendingDays == 5){
            console.log(`You can't save money.`);
            console.log(spendingDays)
            isSaveMoney = false;
            break;
        }
    }if(isSaveMoney){
        console.log(`You saved the money for ${days} days.`)
}
}
