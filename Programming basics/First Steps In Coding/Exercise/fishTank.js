function fishTank(input) {
    let legth = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let volumeAquarium = legth * width * height;
    let volumeLiters = volumeAquarium / 1000;
    let occupiedspace = percent / 100;
    //1 liter water = 1 cubic decimeter
    let neededLiters = volumeLiters * (1 - occupiedspace);
    console.log(neededLiters);
}
