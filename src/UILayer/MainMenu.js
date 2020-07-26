const { askQuestion } = require("./CommonFunctions");

async function mainMenu() {
    // Welcome message
    console.log("Welcome to the Student-Teacher Database");
    let shouldLoop = true;
    while(shouldLoop);
    // List Options
    console.log("MAIN MENU");
    console.log("[1] Student Menu");
    console.log("[2] Teacher Menu");
    console.log("[3] Exit Menu");
    let ans = await askQuestion("Please select from the above options: ");
    console.log();
    switch (ans) {
        case "1":
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
    // Goodbye message
    console.log("Cheers for using the program!");
}

module.exports = {
    mainMenu,
}