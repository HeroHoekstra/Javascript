//10. Bereken het gemiddelde cijfer dat Sofie gehaald heeft voor haar rekentoetsen.
const cijfer = [9.4, 3.8, 2.7, 6.7, 8.9];
let cijferAll;
for (let i = 0; i < cijfer.length; i++) {
  cijferAll += cijfer[i];
}
let avarage = cijferAll / cijfer.length;
console.log(avarage);
//print 6.3