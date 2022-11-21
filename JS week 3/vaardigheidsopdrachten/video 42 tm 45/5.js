const objectOne = {
    firstName: 'Piet',
    lastName: 'Janssens',
    job: 'Fighter',
    getFullName: function() {
      return `My name is ${this.firstName} and I am a ${this.job}`
    },
};

console.log(objectOne.getFullName());