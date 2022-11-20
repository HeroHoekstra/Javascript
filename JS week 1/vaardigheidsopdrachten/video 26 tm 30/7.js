//7. Verander onderstaande “if-else statement” in een “switch statement”.
const job = "Teacher";
switch(job) {
    case "Developer":
    case "Retired":
        console.log("Like!");
        break;
    case "Teacher":
    case "Consultant":
        console.log("Nice...");
        break;
    default:
        console.log("I don't know");
        break;
}