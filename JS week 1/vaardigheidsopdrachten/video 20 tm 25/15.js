//15. Bepaal wie het hoogste gemiddelde cijfer heeft gehaald en print de naam van de persoon met het hoogste cijfer in de console. Als het gemiddelde cijfer van die persoon hoger was dan een 7 dan print je er bij “Goed gedaan, hoger dan een 7!”.
const cijferSofie = [9.4, 3.8, 2.7, 6.7, 8.9];
const cijferSarah = [7.7, 7.6, 7.3, 5.8, 6.9];

function calAv(cijfer) {
    let allCijfers = 0;
    for (let i = 0; i < cijfer.length; i++) {
        allCijfers += cijfer[i];
    }
    return allCijfers / cijfer.length;
}

let avCijferSofie = calAv(cijferSofie);
let avCijferSarah = calAv(cijferSarah);

let higherCijfer;

if (avCijferSofie > avCijferSarah) {
    higherCijfer = avCijferSofie;
    console.log("Sofie heeft een hoger cijfer")
}
else if (avCijferSarah > avCijferSofie) {
    higherCijfer = avCijferSarah;
    console.log("Sarah heeft een hoger cijfer")
}

if (higherCijfer >= 7) {
    console.log("Goed gedaan, hoger dan een 7!");
}