//8. Als het vandaag maandag is eet ik patat, anders eet ik pannenkoeken. Schrijf de code met
//een “if-else statement” en met behulp van de “ternary operator”.
function getFries(day) {
    return day === "Monday" ? "Ik eet patat" : "Ik eet pannenkoekn";
}

console.log(getFries("Monday"));