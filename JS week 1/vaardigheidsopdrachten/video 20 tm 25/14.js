//14. Bepaal wie het hoogste gemiddelde cijfer heeft gehaald en print de naam van de persoon met het hoogste cijfer in de console.
function calAv(cijfer) {
    let cijferAll = 0;
    for (let i = 0; i < cijfer.length; i++) {
      cijferAll += cijfer[i];
    }
    let cijferAv = cijferAll / cijfer.length
    return cijferAv;
}

const cijferSofie = [9.4, 3.8, 2.7, 6.7, 8.9];
const cijferSarah = [7.7, 7.6, 7.3, 5.8, 6.9];
  
let avCijferSofie = calAv(cijferSofie);
let avCijferSarah = calAv(cijferSarah);
  
if (avCijferSofie > avCijferSarah) {
    console.log(`Sofie heeft een hoger gemiddeld cijfer van ${avCijferSofie}`);
} else if (avCijferSarah > avCijferSofie) {
    console.log(`Sarah heeft een hoger gemiddeld cijfer van ${avCijferSarah}`);
}