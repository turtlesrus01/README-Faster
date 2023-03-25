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
        message: 'One sentence of about your application?',
        name: 'subtitle',
      },
      {
        type: 'input',
        message: 'Please write a description of your application.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please describe how your application can be used.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please link an image of your application.',
        name: 'image',
      },
      {
        type: 'input',
        message: 'Submit a link to your deployed application.',
        name: 'link',
      },
      {
        type: 'confirm',
        message: 'Does your application have a GitHub Discussions page?',
        name: 'discussions',
      },
      {
        type: 'input',
        message: 'Please include a link to your GitHub profile.',
        name: 'profile',
      },
      {
        type: 'choice',
        message: 'What license have you chosen for your application?',
        name: 'license',
      },])
  //User entry response handler
  .then(response => {
    console.log(response);

    //README template as variable
    const readMeTxt = `# ${response.title}

## Subtitle 
${response.subtitle}
## Description
${response.description}
## Usage 
${response.usage}
## Here is an image of the finished site:

![photo of website](${response.image})

The deployed website can be reached at this link: ${response.link}

## Support
Reach out to me if you have any questions or if you have questions at:

[GitHub discussions](${response.discussions})
or
[My GitHub page](${response.profile})

## License
${response.license}`;
  //Create README file in root
  fs.writeFile('README-Faster.md',readMeTxt, (err) => {
    if (err) {
      console.error(err);
    }
  //File written successfully
  console.log('Successly created README!')
  });

});
