#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold.italic("WELCOME TO OUR CLI CALCULATOR"))

const answer = await inquirer.prompt([
  { message: chalk.greenBright.bold.italic("Enter First Number"), type:  "number", name: "firstnumber" },
  { message: chalk.greenBright.bold.italic("Enter Second Number"), type: "number", name: "secondnumber" },
  {
    message: chalk.yellowBright.bold.italic("Select Any One Of The Operator"),
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Modulus",
    ],
  },
]);

// writing statement
if (answer.operator === "Addition") {
  console.log(chalk.magentaBright.bold.italic(answer.firstnumber + answer.secondnumber));
} else if (answer.operator === "Subtraction") {
  console.log(chalk.magentaBright.bold.italic(answer.firstnumber - answer.secondnumber));
} else if (answer.operator === "Multiplication") {
  console.log(chalk.magentaBright.bold.italic(answer.firstnumber * answer.secondnumber));
} else if (answer.operator === "Division") {
  console.log(chalk.magentaBright.bold.italic(answer.firstnumber / answer.secondnumber));
} else if (answer.operator === "Modulus") {
  console.log(chalk.magentaBright.bold.italic(answer.firstnumber % answer.secondnumber));
} else {
  console.log(chalk.redBright.underline("please check your code"));
}
