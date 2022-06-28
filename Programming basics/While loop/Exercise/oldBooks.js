function oldBooks (input) {
    let book = String(input[0]);
    let index = 0;
    let count = 0;
    let search = String(input[index]);
    index++;
    while (search !== "No More Books"){
        search = String(input[index]);
        index++;
        count++;
        if (book == search){
            count--
            break;
        }
    }
    if (book == search){
        console.log(`You checked ${count} books and found it.`);
    }else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${count - 1} books.`);
    }
}
