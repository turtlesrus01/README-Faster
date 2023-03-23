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
      },])
  //User entry response handler
  .then(response => {
    console.log(response);

    //README template as variable
    const readMeTxt = `# ${Title}

    ## Subtitle 

    ## Description

    ## Usage 
   
    ## Here is an image of the finished site:
    
    ![photo of website]()
    
    The deployed website can be reached at this link: https://turtlesrus01.github.io/horiseon-solutions/
    
    ## Support
    Reach out to me if you have any questions or if you have questions at:
    
    [GitHub discussions]()
    or
    [My GitHub page]()
    
    ## License
    [MIT]()`
  //Create README file in root
  fs.writeFile('README.md',readMeTxt, (err) => {
    if (err) {
      console.error(err);
    }
  //File written successfully
  console.log('Successly created README!')
  });

});
