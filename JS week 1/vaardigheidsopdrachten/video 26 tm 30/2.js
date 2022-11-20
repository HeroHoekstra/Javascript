/*Benjamin Spock is een man van rust, reinheid en regelmaat. Hij eet daarom iedere week hetzelfde. Op
maandag, donderdag en vrijdag eet hij falafel met salade. Op dinsdag en woensdag eet hij spinazie. Op
zaterdag en zondag eet hij linzensoep.

Benjamin heeft echter één afwijking: als het Kerst is, dan eet hij – ongeacht de dag – kalkoen.
2. Pas je code aan zodat ook met Kerst het juiste gerecht wordt weergegeven.*/

let day = "Monday";
let christmas = true;
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

switch(christmas) {
    case christmas:
        meal = "kalkoen";
        break;
}

console.log(meal);