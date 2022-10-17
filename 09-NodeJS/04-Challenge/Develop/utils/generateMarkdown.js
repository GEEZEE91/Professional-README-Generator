// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  
  ## License 
  ![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)
 
  This project is license under ${data.license}
 
  ## Table of Contents
  * [Description](#Description)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Description 
  ${data.description}

  ## Installation 
      ${data.install}

  ## Usage 
  ${data.usage}

  ## Contributing 
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}


// use for importing Markdown in index 
module.exports = generateMarkdown;