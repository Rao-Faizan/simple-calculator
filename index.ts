#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter your frist number", type: "number", name: "firstNumber" },
  { message: "enter your second number", type: "number", name: "secondNumber" },
  {
    message: "select  one of the opreators to perfom opreation",
    type: "list",
    name: "opreator",
    choices: ["Addition", "subtraction", "Multiplication", "Division"],
  },
]);
console.log(answer)
if (answer.opreator==="Addition") {
  console.log(answer.firstNumber+answer.secondNumber);
}
else if (answer.opreator==="subtraction") {
  console.log(answer.firstNumber-answer.secondNumber);
}
if (answer.opreator==="Multiplication") {
  console.log(answer.firstNumber*answer.secondNumber);
}
if (answer.opreator==="Division") {
  console.log(answer.firstNumber/answer.secondNumber);
}

console.log("THE END!");
















