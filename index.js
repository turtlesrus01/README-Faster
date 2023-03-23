//Module intiation
const fs = require('fs');
const inquirer = require('inquirer');

//Inquirer function to ask for user input
inquirer
  //User entry prompt
  .prompt([{}])
  //User entry response handler
  .then(response => {
    console.log(response);

    //README template as variable
    const readMeTxt = ``
  //Create README file in root
  fs.writeFile('README.md',readMeTxt, (err) => {
    if (err) {
      console.error(err);
    }
  //File written successfully
  console.log('Successly created README!')
  });

});
