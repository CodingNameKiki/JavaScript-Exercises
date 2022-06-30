function moving (input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let houseSize = w * l * h;
    let done = true;
    while(command !== "Done"){
        let meters = Number(command);
        houseSize -= meters;

        if (houseSize < 0){
            console.log(`No more free space! You need ${Math.abs(houseSize)} Cubic meters more.`)
            done = false;
            break;
        }
        command = input[index];
        index++;
    
    
    }if (done){
    console.log(`${houseSize} Cubic meters left.`)

    }
}
