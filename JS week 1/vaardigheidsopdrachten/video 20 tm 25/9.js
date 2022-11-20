//9. Schrijf de volgende zinnen in code. Als het maandag is ga ik kickboksen, als het dinsdag is ga ik boksen, als het donderdag is ga ik BJJ’en en als het vrijdag is ga ik ook BJJ’en. Op alle andere dagen ga ik patat halen en thuis opeten.
const dayOfTheWeek = "Monday";
if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday") {
  console.log("Ik ga kickboxen");
} else if (dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday") {
  console.log("Ik ga BJJ'");
} else {
  console.log("Ik ga patat eten");
}