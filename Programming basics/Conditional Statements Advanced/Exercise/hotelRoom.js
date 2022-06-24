function hotelRoom (input) {
    let month = String(input[0]);
    let nights = Number(input[1]);
    let studio = 0 ;
    let apartment = 0;
    switch(month){
        case "June":
        case "September":
            studio = nights * 75.20;
            apartment = nights * 68.70;
            if (nights > 14){
                studio = studio - (studio * 20 / 100);
                apartment = apartment - (apartment * 10 / 100);
            }
        break;
        case "July":
        case "August":
            studio = nights * 76;
            apartment = nights * 77;
            if (nights > 14){
                apartment = apartment - (apartment * 10 / 100);
            }
        break;
        case "October":
        case "May":
            studio = nights * 50;
            apartment = nights * 65
            if (nights > 7 && nights <= 14){
                studio = studio - (studio * 5 / 100);
            }else if (nights > 14){
                studio = studio - (studio * 30 / 100);
                apartment = apartment - (apartment * 10 / 100);
            }
        break;   
    }
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`)
    console.log(`Studio: ${studio.toFixed(2)} lv.`)
}
