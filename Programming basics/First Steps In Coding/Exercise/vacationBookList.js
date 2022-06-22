function vacationBookList(input) {
    let pages = Number(input[0]);
    let pagesReadPerHour = Number(input[1]);
    let daysToReadTheBook = Number(input[2]);
    let result = (pages / pagesReadPerHour) / daysToReadTheBook;
    console.log(result)
}
