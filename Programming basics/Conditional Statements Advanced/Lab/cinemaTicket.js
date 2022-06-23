function cinemaTicket (input) {
    let day = String(input[0]);
    let priceTicket = 0;
    switch(day){
        case "Monday":
        case "Tuesday":
        case "Friday":
            priceTicket = 12;
            break;
        case "Wednesday":
        case "Thursday":
            priceTicket = 14;
            break;
        case "Saturday":
        case "Sunday":
            priceTicket = 16;
            break;
    }
    console.log(priceTicket)
}
