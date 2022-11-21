const arrayOne = [];
let totalArray = 0;
for (let i = 0; i < 15; i++) {
  arrayOne[i] = i + 1;
  totalArray += arrayOne[i];
  console.log(arrayOne[i])
}

if (totalArray < 100) {
  console.log(totalArray * 2);
}