// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(userData) {
  return `# ${userData.Title}

  ## Description
  ${userData.Description}

  ## Table of Contents
  [Installation](#Installation)
  [Usage](#Usage)
  [Credits](#Credits)
  [License](#License)
  [Features](#Features)
  [Contribution](#Contribution)
  [Tests](#Tests)
  [Questions](#Questions)

  ## Installation
  ${userData.Installation}

  ## Usage
  ${userData.Usage}

  ## Credits
  ${userData.Credits}

  ## License
  ${userData.License}

  ## Features
  ${userData.Features}

  ## Contribution
  ${userData.Contribtion}

  ## Test
  ${userData.Tests}

  ## Questions
  [Link to my Github profile](https://github.com/${userData.Username})
  Any Questions? If so, you can reach out to me at ${userData.Email}.

`;
}

module.exports = generateMarkdown;
