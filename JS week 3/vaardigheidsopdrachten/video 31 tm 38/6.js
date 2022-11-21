const numbers = [1, 3, 4, 7, 1, 6, 3, 9, 2, 3, 4];

function getHighest(numbers) {
    return Math.max(...numbers);
}

const highestNumber = getHighest(numbers);
console.log(highestNumber);