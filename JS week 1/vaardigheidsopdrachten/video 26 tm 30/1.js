/*Benjamin Spock is een man van rust, reinheid en regelmaat. Hij eet daarom iedere week hetzelfde. Op
maandag, donderdag en vrijdag eet hij falafel met salade. Op dinsdag en woensdag eet hij spinazie. Op
zaterdag en zondag eet hij linzensoep.
1. Gebruik een “switch statement” om naar de console het juiste gerecht te loggen.*/

let day = "Monday";
let meal = "";
switch(day) {
    case "Monday":
    case "Thursday":
    case "Friday":
        meal = "falafel met salade";
        break;
    case "Tuesday":
    case "Wednessday":
        meal = "spinazie";
        break;
    case "Saturday":
    case "Sunday":
        meal = "linzensoep";
        break;
}

console.log(meal);