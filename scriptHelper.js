// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
     let userInput = testInput.toLowerCase();
     
     if (userInput === '') {
         return "Empty";
     } else if (isNaN(userInput)) {
         return "Not a Number";
     } else {
         return "Is a Number"
     }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // declare variables using validateInput function return string
     const pilotStatus = validateInput(pilot);
     const copilotStatus = validateInput(copilot);
     const fuelLevelStatus = validateInput(fuelLevel);
     const cargoLevelStatus = validateInput(cargoLevel);
     
     //  HERE: 1): check if things are valid on the basis of being empty,
     //  2): then, if they are the proper type
     //  3): then, update the faulty items section
    //  4): and, launch status h2 section
     if (pilotStatus === "Empty" || copilotStatus === "Empty" || fuelLevelStatus === "Empty" || cargoLevelStatus === "Empty") {
           alert("All fields are required!");
     }
     
     
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;