//12. Bereken het gemiddelde cijfer dat Sarah gehaald heeft voor haar rekentoetsen (alle cijfers tellen even zwaar).
const cijfer = [7.7, 7.6, 7.3, 5.8, 6.9];
let cijferAll;
for (let i = 0; i < cijfer.length; i++) {
  cijferAll += cijfer[i];
}
let avarage = cijferAll / cijfer.length;
console.log(avarage);
//print 7.0600000000000005