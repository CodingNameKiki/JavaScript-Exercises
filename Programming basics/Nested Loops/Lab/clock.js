function clock(input) {
    for (let i = 0; i <= 23; i++) {
        for (let k = 0; k <= 59; k++) {
            if (k < 10) {
                console.log(`${i}:0${k}`)
            } else {
                console.log(`${i}:${k}`)
            }
        }
    }
}
