function skiTrip (input) {
    let days = Number(input[0]);
    let room = String(input[1]);
    let review = String(input[2]);
    let nights = days - 1;
    let pricePerNight = 0;
    switch(room){
        case "room for one person":
            pricePerNight = nights * 18;
        break;
        case "apartment":
            pricePerNight = nights * 25;
            if (days < 10){
                pricePerNight = pricePerNight - (pricePerNight * 30 / 100);
            }else if (days >= 10 && days <= 15){
                pricePerNight = pricePerNight - (pricePerNight * 35 / 100);
            }else{
                pricePerNight = pricePerNight - (pricePerNight * 50 / 100);
            }
        break;
        case "president apartment":
            pricePerNight = nights * 35;
            if (days < 10){
                pricePerNight = pricePerNight - (pricePerNight * 10 / 100);
            }else if (days >= 10 && days <= 15){
                pricePerNight = pricePerNight - (pricePerNight * 15 / 100);
            }else{
                pricePerNight = pricePerNight - (pricePerNight * 20 / 100);
            }
        break;
    }switch(review){
        case "positive":
            pricePerNight = pricePerNight + (pricePerNight * 25 / 100);
        break;
        case "negative":
            pricePerNight = pricePerNight - (pricePerNight * 10 / 100);
    }
    console.log((pricePerNight.toFixed(2)))
}
