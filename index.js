const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email address?",
  },
  {
    type: "input",
    name: "office",
    message: "What is the manager's office number?",
  },
  {
    type: "list",
    name: "role",
    message: "Which role would you like to add to your team? (Use arrow keys to select an option)",
    choices: ["Engineer", "Intern", "I am done adding team members"],
  },
  {
    type: "input",
    name: "name",
    message: "What is your Engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your Engineer's ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Engineer's email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Engineer's GitHub username?",
  },
  {
    type: "list",
    name: "role",
    message: "Which role would you like to add to your team? (Use arrow keys to select an option)",
    choices: ["Engineer", "Intern", "I am done adding team members"],
  },
  {
    type: "input",
    name: "name",
    message: "What is your Intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your Intern's ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Intern's email address?",
  },
  {
    type: "input",
    name: "education",
    message: "Where is your Intern completing their education?",
  },
  {
    type: "list",
    name: "role",
    message: "Which role would you like to add to your team? (Use arrow keys to select an option)",
    choices: ["Engineer", "Intern", "I am done adding team members"],
  },
];
