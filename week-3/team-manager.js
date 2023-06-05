// Name: Justin Barlowe
// Title: index.js
// Date: 6/5/2023
// Description: team-manager.js file for assignment 3.2

"use strict";

const Team = require("./team"); //Import team file. 

//Teams array created.
const teams = [
  new Team("Arizona Cardinals", "Cardinal", 40),
  new Team("Atlanta Falcons", "Falcon", 44),
  new Team("Carolina Panthers", "Panther", 43),
  new Team("Chicago Bears", "Bear", 49),
  new Team("Detroit Lions", "Lion", 52),
];

//Function to return array of team objects. 
function getTeams() {
    return teams;
  }

  function getTeam(name) {
    return teams.find(team => team.name === name);
  }
  //Display function for team objects. 
  function displayTeam(team) {
    const { name, mascot, playerCount } = team;
    return `Team: ${name}\nMascot: ${mascot}\nPlayer Count: ${playerCount}`;
  }
  
  //Exporting functions.
  module.exports = {
    getTeams,
    getTeam,
    displayTeam
  };
