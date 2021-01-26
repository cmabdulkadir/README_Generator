// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink('MIT')})`
  } else if(license === 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]${renderLicenseLink('Mozilla')})`
  }else if(license === 'GNU GPLv3'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]${renderLicenseLink('GNU GPLv3')})`
  } else {
    return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return "https://opensource.org/licenses/MIT";
  } else if (license === 'Mozilla') {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (license === 'GNU GPLv3'){
    return "https://www.gnu.org/licenses/gpl-3.0"
  }
  else {
    return ''
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license) {

  if(license) {
    return `## License
  ${license}
  
  ## Badge
  ${renderLicenseBadge(license)}`
  } else {
    return ""
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# [Description]
${data.description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Question](#question)
    
 
# Installation
The following necessary dependencies must be installed to run this application, ${data.installation} 
#Usage
In order to run this application, ${data.usage}
#License
This project is licensed under the ${renderLicenseSection(data.license)} license.
#Contributing
Contributors: ${data.contributing}
#Test
The following is needed to run the test: ${data.test}
#Question
For more detailed information about this repo you can visit my github page (https://github.com/${data.username}/${data.title} or contact me directly at ${data.email}

`;
}

module.exports = generateMarkdown;
