function projectsCreation(input) {
    let name = String(input[0]);
    let projectsCount = Number(input[1]);
    let hoursToMakeProject = 3 * projectsCount;
    console.log(`The architect ${name} will need ${hoursToMakeProject} hours to complete ${projectsCount} project/s.`)
}
