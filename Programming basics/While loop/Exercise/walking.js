function walking (input) {
    let index = 0;
    let goal = 10000;
    let command = input[index];
    index++;
    while (command !== "Going home"){
        let num = Number(command);
        goal -= num;
        if (goal < 0){
            console.log(`Goal reached! Good job!`);
            console.log(`${Math.abs(goal)} steps over the goal!`);
            break;
        }
        command = input[index];
        index++;
    
}if (command == "Going home"){
    let num = Number(input[index]);
    index++;
    goal -= num;
    if (goal < 0){
        console.log(`Goal reached! Good job!`);
        console.log(`${Math.abs(goal)} steps over the goal!`);
    }else {
        console.log(`${goal} more steps to reach goal.`)
    }
}


}
