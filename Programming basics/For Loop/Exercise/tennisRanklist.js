function tennisRanklist (input) {
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let points = startingPoints;
    let wonTournamets = 0;
    for (let i = 0; i <= tournaments + 1; i++){
        let level = String(input[i]);
        switch(level){
            case "W":
                points += 2000;
                wonTournamets++;    
            break;
            case "F":
                points += 1200;
            break;
            case "SF":
                points += 720;
            break;
        }
    }
    let averagePoints = (points - startingPoints) / tournaments;
    let percentWonTournamets = (wonTournamets / tournaments) * 100;
    console.log(`Final points: ${points}`)
    console.log(`Average points: ${Math.floor(averagePoints)}`)
    console.log(`${percentWonTournamets.toFixed(2)}%`)
}
