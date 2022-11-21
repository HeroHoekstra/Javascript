function checkAnimal(animal) {
    if (!animal) {
        return 'Ik ben een Koe';
    } else {
        return `Ik ben een ${animal}`;
    }
}

const Schaap = checkAnimal('Schaap');
console.log(Schaap);