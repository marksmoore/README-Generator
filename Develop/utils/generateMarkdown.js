// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if(license === 'None'){
    return ''
  }
  if(license === 'MIT License'){
  return `![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)`
  }
  if(license === 'Apache License 2.0'){
    return `![GitHub license](https://img.shields.io/badge/License-Apache%202.0-red.svg)`
  }
  if(license === 'ISC License'){
    return `![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)`
  }
  if(license === 'GNU General Public License v3'){
    return `![GitHub license](https://img.shields.io/badge/License-GPL%203.0-yellow.svg)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if(license === 'None'){
    return ''
  }
  if(license === 'MIT License'){
  return `[Click here for MIT License information.](https://mit-license.org/)`
  }
  if(license === 'Apache License 2.0'){
    return `[Click here for Apache License 2.0 information.](https://www.apache.org/licenses/LICENSE-2.0.html)`
  }
  if(license === 'GNU General Public License v3'){
    return `[Click here for General Public 3.0 License information.](https://www.gnu.org/licenses/gpl-3.0.en.html)`
  }
  if(license === 'ISC License'){
    return `[Click here for ISC License information.](https://opensource.org/licenses/ISC)`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return "None"
  }
  return `This project is licensed under the ${license} license.`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.ProjectTitle}
  # ${answers.Name}
  E-mail: ${answers.email}
  ${renderLicenseBadge(answers.license)}
---
## Description 
${answers.ProjectDescription}
---
## Table of Contents
---
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Badges](#Badges)
* [Contributing](#Contributors)
* [Tests](#Tests)
* [Questions](#Questions)
---
## Installation
${answers.Installation}
---
## Usage 
${answers.Usage}
---
## License
${renderLicenseSection(answers.license)}
${renderLicenseLink(answers.license)}
---
## Badges
${renderLicenseBadge(answers.license)}
---
## Contributing
${answers.Contributors} Contributor(s)
---
## Tests
${answers.Tests}
---
## Questions
Please see my GitHub at (https://github.com/${answers.github}) or by email at ${answers.email}

`
;
}

module.exports = generateMarkdown;
