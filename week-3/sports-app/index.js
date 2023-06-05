// Name: Justin Barlowe
// Title: index.js
// Date: 6/5/2023
// Description: index.js file for assignment 3.2


"use strict";

const teamManager = require('./team-manager');

// Display array of team objects
const teamsArray = teamManager.getTeams();
console.log('-- DISPLAYING TEAMS -- ');
teamsArray.forEach(team => {
  const viewTeam = teamManager.displayTeam(team);
  console.log(viewTeam);
  console.log();
});

// Variables to retrieve single team objects.
const singleTeam1 = teamManager.getTeam('Arizona Cardinals');
const singleTeam2 = teamManager.getTeam('Chicago Bears');

// First single team object displayed
console.log('\n-- DISPLAYING A SINGLE TEAM --');
if (singleTeam1) {
  const viewTeam1 = teamManager.displayTeam(singleTeam1);
  console.log(viewTeam1);
} 

// Second single team object displayed 
console.log('\n-- DISPLAYING A SINGLE TEAM --');
if (singleTeam2) {
  const viewTeam2 = teamManager.displayTeam(singleTeam2);
  console.log(viewTeam2);
}

