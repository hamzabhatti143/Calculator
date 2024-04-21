#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "firstNumber",
        message: "Enter First Number",
        type: "number"
    },
    {
        name: "secondNumber",
        message: "Enter Second Number",
        type: "number"
    },
    {
        name: "operator",
        message: "Select Your Operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "sin", "cos", "tan"]
    }
]);
if (answer.operator === "Addition") {
    let addresult = answer.firstNumber + answer.secondNumber;
    console.log(`Your answer is ${addresult}`);
}
else if (answer.operator === "Subtraction") {
    let addresult = answer.firstNumber - answer.secondNumber;
    console.log(`Your answer is ${addresult}`);
}
else if (answer.operator === "Multiplication") {
    let addresult = answer.firstNumber * answer.secondNumber;
    console.log(`Your answer is ${addresult}`);
}
else if (answer.operator === "Division") {
    let addresult = answer.firstNumber / answer.secondNumber;
    console.log(`Your answer is ${addresult}`);
}
else if (answer.operator === "sin") {
    let addresultsin1 = Math.sin(answer.firstNumber);
    console.log(`Your answer of first sin is ${addresultsin1}`);
    let addresultsin2 = Math.sin(answer.secondNumber);
    console.log(`Your answer of second sin is ${addresultsin2}`);
}
else if (answer.operator === "cos") {
    let addresultcos1 = Math.cos(answer.firstNumber);
    console.log(`Your answer of first cos is ${addresultcos1}`);
    let addresultcos2 = Math.cos(answer.secondNumber);
    console.log(`Your answer of second cos is ${addresultcos2}`);
}
else if (answer.operator === "tan") {
    let addresulttan1 = Math.tan(answer.firstNumber);
    console.log(`Your answer of first Tan is ${addresulttan1}`);
    let addresulttan2 = Math.tan(answer.secondNumber);
    console.log(`Your answer of second Tan value is ${addresulttan2}`);
}
else {
    console.log(`Check Your Code!`);
}
