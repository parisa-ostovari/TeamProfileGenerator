# TeamProfileGenerator

## Demonstration
https://watch.screencastify.com/v/bpoekSzmCLAzoeRfTHOT

## Description
This application was created to function as a Team Profile Generator, through the use of node.js and npm packages. The user is prompted to enter information about employees, in order to create a team consisting of a manager, engineer and intern. Once the information has been completed, the application will create an html file displaying the full team profile. 

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation 
First git clone the repo to your local device. Install node.js, inquirer, and jest npm for usage of this generator.

## Usage
Begin with installing the inquirer and jest packages by way of ‘npm install’. After installation, initialize the questions by inputting ‘node index.js’. Once the prompts are answered a new index.html file will be created within the dist folder.