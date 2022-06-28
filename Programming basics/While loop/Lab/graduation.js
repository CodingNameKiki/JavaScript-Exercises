function graduation (input) {
    let name = String(input[0])
    let index = 0;
    let count = 0;
    let badGrades = 0;
    let averageGrade = 0;
    let assessments = Number(input[index])
    index++
    while (index != 13){
        assessments = Number(input[index]);
        index++
        count++;
        averageGrade += assessments;
        if (assessments < 4){
            badGrades++;
        }
        if (badGrades > 1){
            count
            break;
        }
    }if (badGrades > 1){
        console.log(`${name} has been excluded at ${count - 1} grade`)
    }else {
        console.log(`${name} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`)
}
}
