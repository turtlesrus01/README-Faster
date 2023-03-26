//Module intiation
const fs = require('fs');
const inquirer = require('inquirer');

//Inquirer function to ask for user input
inquirer
  //User entry prompt
  .prompt([
      {
        type: 'input',
        message: 'What is the title of your application?',
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
        message: 'Please describe the usage of your application.',
        name: 'usage',
      },
      {
        type: 'rawlist',
        message: 'What license have you chosen for your application?',
        name: 'license',
        choices: ['Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense']
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

    //README template literal string as variable
    const readMeTxt = `# ${response.title} ${licenseImg()}
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
${licenseImg()} This application is registered under the ${response.license}.
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
  //function to determine and place license images
  function licenseImg() {
    switch (response.license) {
      case 'Apache License 2.0':
        return ('[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
      case 'MIT License':
        return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
      case 'BSD 2-Clause "Simplified" License':
        return ('[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)');
      case 'BSD 3-Clause "New" or "Revised" License':
        return ('[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)');
      case 'Boost Software License 1.0':
        return ('[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)');
      case 'Creative Commons Zero v1.0 Universal':
        return ('[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)');
      case 'Eclipse Public License 2.0':
        return ('[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)');
      case 'GNU General Public License v3.0':
        return ('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
      case 'GNU Affero General Public License v3.0':
        return ('[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)');
      case 'GNU General Public License v2.0':
        return ('[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)');
      case 'GNU Lesser General Public License v2.1':
        return ('[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)');
      case 'Mozilla Public License 2.0':
        return ('[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)');
      case 'The Unlicense':
        return ('[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)');
    }
  };
  //Create README file in root
  fs.writeFile('README-Faster.md',readMeTxt, (err) => {
    if (err) {
      console.error(err);
    }
  //File written successfully
  console.log('Successly created README!')
  });

});
