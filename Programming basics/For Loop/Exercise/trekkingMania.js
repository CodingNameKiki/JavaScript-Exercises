function trekkingMania (input) {
    let groups = Number(input[0])
    let allPeople = 0;
    let musala = 0
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    for (let i = 1; i < groups + 1; i++){
        people = Number(input[i]);
        allPeople += people;
        if (people <= 5){
            musala += people;
        }else if (people >= 6 && people <= 12){
            monblan += people;
        }else if (people >= 13 && people <= 25){
            kilimandjaro += people;
        }else if (people >= 26 && people <= 40){
            k2 += people;
        }else {
            everest += people;
        }
    }if (musala > 0){
        console.log(`${((musala / allPeople) * 100).toFixed(2)}%`)
    }else {
        console.log(`0.00%`)
    }if (monblan > 0){
        console.log(`${((monblan / allPeople) * 100).toFixed(2)}%`)
    }else {
        console.log(`0.00%`)
    }if (kilimandjaro > 0){
        console.log(`${((kilimandjaro / allPeople) * 100).toFixed(2)}%`)
    }else {
        console.log(`0.00%`)
    }if (k2 > 0){
        console.log(`${((k2 / allPeople) * 100).toFixed(2)}%`)
    }else {
        console.log(`0.00%`)
    }if (everest > 0){
        console.log(`${((everest / allPeople) * 100).toFixed(2)}%`)
    }else {
        console.log(`0.00%`)
    }
}
