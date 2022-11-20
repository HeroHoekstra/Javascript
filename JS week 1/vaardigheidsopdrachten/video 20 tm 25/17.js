//17. Voeg aan je code de logica toe. Als je meer studiefinanciering krijgt dan wordt er geprint “Whieee veel stufi”, anders blijft de bestaande tekst gelden.
function studieFin(age, followsStudie, livesAlone) {
    let msg;
    if (age >= 18 && followsStudie) {
        msg = "Whieee stufi!";
        if (livesAlone) {
            msg = "Whieee veel stufi";
        }
    } else {
        msg = "Helaas geen studiefinanciering :(";
    }
    return msg;
}