// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink('MIT')})`
  } else if(license === 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]${renderLicenseLink('Mozilla')})`
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
    return "https://opensource.org/licenses/MPL-2.0"
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
  
## Table of Contents
    
1. [Description](#description)
2. [Installation](#installation)
3. [License](#license)
    
<hr/>

## Description
    
${data.description}
        
    
## Installation
    
${data.installation}

${renderLicenseSection(data.license)}

## Questions

Github username: ${data.username}
Email address: ${data.email}

`;
}

module.exports = generateMarkdown;
