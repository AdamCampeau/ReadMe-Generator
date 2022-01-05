// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache_2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "BSD-2-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  }
  if (license === "BSD-3-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  if (license === "BSD-4-Clause") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "GPL-3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license === "MIT") {
    return "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "None") {
    return "No license"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
--------------------------------------
[Description](#Description)

[License](#License)

[Installation](#Installation)

[Demo](#Demo)

[Testing](#Testing)

[Future Development](#Future_Development)

[Contributors](#Contributors)

[GitHub](#GitHub)

[Contact](#Contact)


--------------------------------------

## Description
${data.description}

## License
${renderLicenseBadge(data.licenses)}

## Installation
${data.installation}

## Demo
${data.demo}

## Testing
${data.test}

## Future_Development
${data.development}

## Contributors
${data.credits}

## GitHub
https://github.com/${data.github}

## Contact
${data.email}

`;
}

module.exports = generateMarkdown;