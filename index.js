//Module intiation
const fs = require('fs');
const inquirer = require('inquirer');

//Inquirer function to ask for user input
inquirer
//User entry prompt
  .prompt([{}])
//User entry response handler
  .then(response => {


//README template as variable

//Create README file in root
  fs.writeFile('README.md',readMeTxt, => {
  //File written successfully
  });

});
