const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayTwo = []
for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] % 2 == 0) {
        arrayTwo[i] = arrayOne[i];
    }
}
