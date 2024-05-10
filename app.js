const PI =3.1415;
const radius = 5;
const area = PI * radius * radius;
const plantSpace = 0.8;
let initialPlantcount = 20;
const startingarea = initialPlantcount*plantSpace
const plantMaxcapacity = area/plantSpace;
const week1growth = initialPlantcount*2;
const week2growth = week1growth*2;
const week3growth = week2growth*2;

console.log(startingarea)
