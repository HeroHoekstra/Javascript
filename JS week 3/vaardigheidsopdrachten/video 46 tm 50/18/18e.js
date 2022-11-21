const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < 9; i++) {
  arrayOne[i + 9] = arrayOne[i] * 2;
}

console.log(arrayOne.length);