//21. Bereken de verwachtte lengte van een kind van het vrouwelijke geslacht wiens ouders 192 centimeter (vader) en 153 centimeter (moeder) lang zijn.
const heightDad = 192;
const heightMom = 153;
let heightChild = ((heightMom * 3) + heightDad) / 4;
console.log(heightChild);