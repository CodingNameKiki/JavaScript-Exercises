function tradeCommissions (input) {
    let town = String(input[0]);
    let sales = Number(input[1]);
    let commissionPrice = 0;
    switch(town){
        case "Sofia":
        if(sales >= 0 && sales <= 500){
            commissionPrice = sales * 5 / 100;
        }else if (sales > 500 && sales <= 1000){
            commissionPrice = sales * 7 / 100;
        }else if (sales > 1000 && sales <= 10000){
            commissionPrice = sales * 8 / 100;
        }else if (sales > 10000){
            commissionPrice = sales * 12 / 100
        }
        break;
        case "Varna":
            if(sales >= 0 && sales <= 500){
                commissionPrice = sales * 4.5 / 100;
            }else if (sales > 500 && sales <= 1000){
                commissionPrice = sales * 7.5 / 100;
            }else if (sales > 1000 && sales <= 10000){
                commissionPrice = sales * 10 / 100;
            }else if (sales > 10000){
                commissionPrice = sales * 13 / 100;
            }
            break;
        case "Plovdiv":
            if(sales >= 0 && sales <= 500){
                commissionPrice = sales * 5.5 / 100;
            }else if (sales > 500 && sales <= 1000){
                commissionPrice = sales * 8 / 100;
            }else if (sales > 1000 && sales <= 10000){
                commissionPrice = sales * 12 / 100;
            }else if (sales > 10000){
                commissionPrice = sales * 14.5 / 100;
            }
            break;
        }if(!(sales < 0) && (commissionPrice !== 0)){
            console.log(commissionPrice.toFixed(2));
        }else {
            console.log("error")
        }
    }
