const objectOne = {
    firstName: 'Henk',
    lastName: 'de Vries',
    age: 2021 - 1988,
    job: 'teacher',
    friends: ['Koe', 'Vos'],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    },
};

console.log(`My friends are ${objectOne.friends[0]} and ${objectOne.friends[1]}`);