function smallShop (input) {
    let product = String(input[0]);
    let town = String(input[1]);
    let amount = Number(input[2]);
    let price = 0;
    switch(town){
        case "Sofia":
            if(product == "coffee"){
                price = 0.50;
            }else if (product == "water"){
                price = 0.80;
            }else if (product == "beer"){
                price = 1.20;
            }else if (product == "sweets"){
                price = 1.45;
            }else {
                price = 1.60
            }
            break;
        case "Plovdiv":
            if(product == "coffee"){
                price = 0.40;
            }else if (product == "water"){
                price = 0.70;
            }else if (product == "beer"){
                price = 1.15;
            }else if (product == "sweets"){
                price = 1.30;
            }else {
                price = 1.50
            }
            break;
        case "Varna":
            if(product == "coffee"){
                price = 0.45;
            }else if (product == "water"){
                price = 0.70;
            }else if (product == "beer"){
                price = 1.10;
            }else if (product == "sweets"){
                price = 1.35;
            }else {
                price = 1.55
            }
            break;
    }
    console.log((price * amount))
}
