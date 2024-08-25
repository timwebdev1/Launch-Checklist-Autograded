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
     // validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.
     
     if (testInput === '') {
         return window.alert("Empty");
     } else if (isNaN(testInput)) {
         return window.alert("Not a Number");
     } else if (!isNaN(testInput)) {
         return window.alert("Is a Number");
     };
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
     // Using the values in those strings and the document parameter for your HTML document, update the shuttle requirements as described below. 
    //  Make sure to call your formSubmission() function at the appropriate time in your script.js file!
    //  need to access these items from validateInput
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