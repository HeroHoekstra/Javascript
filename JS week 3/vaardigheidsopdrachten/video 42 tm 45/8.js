const persoon1 = {
    name: 'Hero',
    birthYear: 2006,
    job: 'PGB',
    place: 'Almere',
    age: function() {
        const currentYear = 2022;
        return currentYear - this.birthYear;
    }
}

const persoon2 = {
    name: 'Thomas',
    birthYear: 2007,
    job: 'Vakken vuller',
    place: 'Almere',
    age: function() {
        const currentYear = 2022;
        return currentYear - this.birthYear;
    }
}

function writeAge() {
  console.log(persoon1.age());
  console.log(persoon2.age());
}

writeAge();
console.log(persoon1.age >= persoon2.age ? persoon1.age() : persoon2.age());
console.log(persoon1.place === 'Almere' ? persoon1.name : '');
console.log(persoon2.place === 'Almere' ? persoon2.name : '');