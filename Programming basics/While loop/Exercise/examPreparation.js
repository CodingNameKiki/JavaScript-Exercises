function examPreparation(input) {
    let index = 1;
    let badGrades = Number(input[0]);
    let scoreSum = 0;
    let problems = 0;
    let lastProblem = "";
    let badGradesGiven = 0;
    let command = input[index];
    index++;
    let enough = true;
    while (command !== "Enough") {
        let score = Number(input[index])
        index++
        problems++;
        scoreSum += score;

        lastProblem = command;

        if (score <= 4) {
            badGradesGiven++;
        }

        if (badGrades == badGradesGiven) {
            console.log(`You need a break, ${badGradesGiven} poor grades.`)
            enough = false;
            break;
        }
        command = input[index];
        index++;

    }if (enough){
        console.log(`Average score: ${(scoreSum / problems).toFixed(2)}`)
        console.log(`Number of problems: ${problems}`);
        console.log(`Last problem: ${lastProblem}`)
    }
}
