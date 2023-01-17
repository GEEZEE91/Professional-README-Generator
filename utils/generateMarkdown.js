// function to generate markdown for README
function renderLicenseBadge(license) {
  if (license !== 'No license') {
    switch (license) {
      case 'Apache 2.0':
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)]`;
        break;
      case 'BSD 3-Clause':
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)]`;
        break;
      case 'GNU GPLv3.0':
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
        break;
      case 'MIT': 
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
        break;
      case 'Mozilla Public 2.0':
        licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`;
        break;
      default:
        break;
      }
      return licenseBadge;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'No license') {
    switch (license) {
      case 'Apache 2.0':
        licenseLink = `(https://opensource.org/licenses/Apache-2.0)`;
        break;
      case 'BSD 3-Clause':
        licenseLink = `(https://opensource.org/licenses/BSD-3-Clause)`;
        break;
      case 'GNU GPLv3.0':
        licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      case 'MIT': 
      licenseLink = `(https://opensource.org/licenses/MIT)`;
        break;
      case 'Mozilla Public 2.0':
        licenseLink = `(https://opensource.org/licenses/MPL-2.0)`;
        break;
      default:
        break;
      }
      return licenseLink;
  }  else {
    return ' ';
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== 'No license') {
  return `
  The application is covered under the following license: **${renderLicenseBadge(license)}${renderLicenseLink(license)}**
    `;
  } else {
    return ' ';
  }
}


const generateMarkdown = data => {
  return `# ${data.title}
  
  
  ## License 
 


  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}


  This project is license under ${data.license}
 

  <br>

  ## Table of Contents

  #### [📝Description](#description)
  #### [📚Installation](#installation)
  #### [💻Usage](#usage)
  #### [🚀License ](#license)
  #### [👩🏻‍💻Contribution](#contribution)
  #### [🧩Test ](#test)
  #### [❓Questions](#questions)
<br>

---

  # Description 
  
  
  ${data.description}


  # Installation 

  
  ${data.install}


  # Usage      
 

  ${data.usage}


 # Contribution

  
 ${data.contributors}


# Test      
 
  ${data.test}


# Questions   

  If you have any questions about this projects, please contact me directly at ${data.email}. 
  
  You can view more of my projects at https://github.com/${data.github}.

`;
}


// use for importing Markdown in index 
module.exports = generateMarkdown;
