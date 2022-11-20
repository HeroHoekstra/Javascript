//13. Bepaal wie het hoogste cijfer heeft gehaald en print de naam van de persoon met het hoogste cijfer in de console.
const cijferSofie = [9.4, 3.8, 2.7, 6.7, 8.9];
const cijferSarah = [7.7, 7.6, 7.3, 5.8, 6.9];

const hoogsteCijfer = [Math.max(...cijferSofie), Math.max(...cijferSarah)];
console.log(Math.max(...hoogsteCijfer));