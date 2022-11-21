const arrayOne = [5, 2, 3, 45, 5, 7, 'Koe'];
const arrayTwo = [7, 'Dier', 'tje', 'rt', 12, 5, 6];

let arrayCombine = []

for (let i = 0; i < arrayOne.length; i++) {
  for (let j = 0; j < arrayTwo.length; j++) {
    arrayCombine.push(`${arrayOne[i]}${arrayTwo[j]}`);
  }
}

console.log(arrayCombine);