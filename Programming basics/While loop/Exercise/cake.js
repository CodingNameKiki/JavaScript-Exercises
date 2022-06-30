function cake (input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;

    let cakeSize = w * l;
    let command = input[index];
    index++;
    let stop = true;
    while (command !== "STOP"){
        let pieces = Number(command);
        cakeSize -= pieces;

        if (cakeSize < 0){
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)
            stop = false;
            break;
        }
        command = input[index];
        index++;

    }if (stop){
    console.log(`${cakeSize} pieces are left.`)
    } 
}
