//7. Schrijf de volgende zinnen in code. Als het regent, neem ik een paraplu mee naar buiten, als de zon schijnt neem ik een zonnebril mee naar buiten, anders neem ik mijn goede humeur mee naar buiten.
const regen = false;
const deZonSchijnt = false;
if (regen) {
  console.log("Ik neem een paraplu mee naar buiten");
} else if (deZonSchijnt) {
  console.log("Ik neem mijn zonnebril mee naar buiten");
} else if (!regen && !deZonSchijnt) {
  console.log("Ik neem mijn goede humeur mee naar buiten")
}