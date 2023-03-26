//Module intiation
const fs = require('fs');
const inquirer = require('inquirer');

//Inquirer function to ask for user input
inquirer
  //User entry prompt
  .prompt([
      {
        type: 'input',
        message: 'What is the title of your repository?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please write a description of your application.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please write installation instructions.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please describe how your application can be used.',
        name: 'usage',
      },
      {
        type: 'choice',
        message: 'What license have you chosen for your application?',
        name: 'license',
      },
      {
        type: 'input',
        message: 'What are your contribution guidelines?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'What are your test instructions?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'profile',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },])
  //User entry response handler
  .then(response => {
    console.log(response);

    //README template as variable
    const readMeTxt = `# ${response.title}

## Description {#Description}
${response.description}

## Table of Contents 
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing Guidelines](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

## Installation {#Installation}
${response.installation}

## Usage {#Usage}
${response.usage}

## License {#License}
This application is registered under the ${response.license} license.

## Contributing Guidelines {#Contributing}
${response.contribution}

## Test instructions
${response.tests}

## Questions {#Questions}
Reach out to me if you have any questions at:

[My GitHub page](https://github.com/${response.profile})
or
[My email](${response.email})

`;
  //Create README file in root
  fs.writeFile('README-Faster.md',readMeTxt, (err) => {
    if (err) {
      console.error(err);
    }
  //File written successfully
  console.log('Successly created README!')
  });

});
