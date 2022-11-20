//20. Bereken de verwachtte lengte van een kind van het mannelijke geslacht wiens ouders 183 centimeter (vader) en 178 centimeter (moeder) lang zijn. De verwachtte lengte van een kind
//bereken je door drie keer de lengte van de ouder met hetzelfde geslacht als het kind te nemen en één keer de lengte van de ouder van het andere geslacht. Dit deel je door vier.
const heightDad = 183;
const heightMom = 178;
let heightChild = ((heightDad * 3) + heightMom) / 4;
console.log(heightChild);