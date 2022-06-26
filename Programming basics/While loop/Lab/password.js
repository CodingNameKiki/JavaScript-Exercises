function password (input) {
    let username = input[0];
    let password = input[1];
    let index = 1;
    let typePass = input[index];
    index++
    while(true){
        typePass = input[index];
        index++;
        if (password == typePass){
            console.log(`Welcome ${username}!`)
            break;
        }
    }
}
