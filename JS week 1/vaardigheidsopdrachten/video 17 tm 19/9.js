//9. Schrijf de volgende zinnen in code; wat ik doe log ik naar de console. Als het regent, dan doe ik als het keihard regent een regenpak aan, anders neem ik een paraplu mee. Als het helemaal niet regent, dan zet ik mijn zonnebril op.
const weather = "regen";
if (weather === "keihard regen") {
  console.log("Ik doe mijn regenjas aan");
} else if (weather === "regen") {
  console.log("Ik neem een paraplu mee");
} else {
  console.log("Ik zet mijn zonnebril op");
}