//16. Schrijf de code die bepaalt of je recht hebt op studiefinanciering. Als je recht hebt op studiefinanciering wordt in de console geprint “Whieee stufi!”, is dat niet het geval dan verschijnt in de console “Helaas geen studiefinanciering =(”.
function studieFin(age, followsStudie) {
    let msg;
    if (age >= 18 && followsStudie) {
        msg = "Whieee stufi!";
    } else {
        msg = "Helaas geen studiefinanciering :(";
    }
    return msg;
}