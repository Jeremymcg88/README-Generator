// function that returns a license badge based on which license is passed in
const renderLicenseBadge = (confirmLicense, license) => {
  // console.log('WE HIT THE RENDER lisecne badge part', confirmLicense, license)
  if (confirmLicense === false || license === 'none') {
      return '';
  } 
  if (license === 'Apache') {
      return `![Apache](https://img.shields.io/badge/license-Apache-blue.svg)
`;
  } else if (license === 'Apache 2.0') {
      return `![Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)
`;
  } else if (license === 'GNU GPLv3') {
    // console.log('WE HIT THE IFF FOR GNU GPLv3')
      return `![GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-red.svg)
`;
  }  else if (license === 'MIT') {
      return `![MIT](https://img.shields.io/badge/license-MIT-green.svg)
`;
  }  else if (license === 'ISC') {
      return `![ISC](https://img.shields.io/badge/license-ISC-yellow.svg)
`;
  }
}

// function that returns the license link
const renderLicenseLink = (confirmLicense, license) => {
  if (confirmLicense === false || license === 'none') {
      return '';
  }

  return `
* [License](#license)
`
}

// function that returns the license section of README
const renderLicenseSection = (confirmLicense, license) => {
  if (confirmLicense === false || license === 'none') {
      return '';
  }

  return `

## License

This project is licensed under the ${license} license.
`
}

// function to generate markdown for README
const generateMarkdown = (data) => {
return `# ${data.title}
${renderLicenseBadge(data.confirmLicense, data.license)}
## Description

${data.description}


## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.confirmLicense, data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

* [Repository](#Repository)

* [Walkthrough-Video](#Walkthrough-Video)

## Installation

To install necessary dependencies, run the following command:

${data.installation}


## Usage

To use this application, run the following command:

${data.usage}
${renderLicenseSection(data.confirmLicense, data.license)}

## Contributing

${data.contributions}


## Tests

To run tests, run the following command:

${data.test}


## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [Github](https://github.com/${data.username}).;

## Walkthrough-Video

Location of walkthrough can be found here https://drive.google.com/file/d/1BtISfQ0l8EuSFqbt8CXZJNvac1GJ87Vm/view?usp=sharing

## Repository

https://github.com/Jeremymcg88/README-Generator`

}

module.exports = generateMarkdown;


