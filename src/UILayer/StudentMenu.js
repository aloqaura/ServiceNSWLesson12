const { askQuestion } = require("./CommonFunctions");
const { Student } = require("../Models");

module.exports = async function StudentMenu() {
let shouldLoop = true;
while(shouldLoop){
// List Options
console.log("MAIN MENU");
console.log("[1] Student Menu");
console.log("[2] Teacher Menu");
console.log("[3] Return to Main Menu");
let ans = await askQuestion("Please select from the above options: ");
console.log();
switch (ans) {
    case "1":
        await StudentMenu
        //call StudentMenu
        case "2":
            //call TeacherMenu
            case "3":
                shouldLoop = false;
                break;
                default:
                    console.log("Please enter a valid number");
                    console.log();
                    break;
}
}
// Goodbye message
console.log("Going back to main menu");
}
