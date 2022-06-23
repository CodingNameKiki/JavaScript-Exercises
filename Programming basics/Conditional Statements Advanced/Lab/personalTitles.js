function personalTitles (input) {
    let age = Number(input[0]);
    let gender = String(input[1]);
    switch (gender){
        case "f":
            if(age >= 16){
                console.log("Ms.");
            }else{
                console.log("Miss");
            }
            break;
        case "m":
            if(age >= 16){
                console.log("Mr.");
            }else {
                console.log("Master");
            }
            break;
    }
}
