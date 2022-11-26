const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/template.js");
const path = require("path");
const distDir = path.resolve(__dirname, "dist");
const htmlFile = path.join(distDir, "index.html");

const employees = [];

const managerQuestions = [
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
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
];

const engQuestions = [
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
];

const internQuestions = [
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
    name: "school",
    message: "Where is your Intern completing their education?",
  },
];

const roleQuestion = [
  {
    type: "list",
    name: "role",
    message: "Which role would you like to add to your team? (Use arrow keys to select an option)",
    choices: ["Engineer", "Intern", "I am done adding team members"],
  },
];

function roleSurvey() {
  inquirer.prompt(roleQuestion).then((response) => {
    if (response.role === "Engineer") {
      engSurvey();
    }
    if (response.role === "Intern") {
      internSurvey();
    } else {
      writeHtml();
    }
  });
}

function engSurvey() {
  inquirer.prompt(engQuestions).then((response) => {
    employees.push(response);
    console.log(employees);
    roleSurvey();
  });
}

function internSurvey() {
  inquirer.prompt(internQuestions).then((response) => {
    employees.push(response);
    roleSurvey();
  });
}

function initialize() {
  inquirer.prompt(managerQuestions).then((response) => {
    employees.push(response);
    roleSurvey();
  });
}

function writeHtml() {
  fs.writeFile(htmlFile, generateTeam(employees), "utf-8");
  console.log("Team Profile Generated!");
}

initialize();
