// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
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
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  // declare variables using validateInput function return string
  const pilotValidation = validateInput(pilot);
  const copilotValidation = validateInput(copilot);
  const fuelLevelValidation = validateInput(fuelLevel);
  const cargoLevelValidation = validateInput(cargoLevel);

  //  HERE: 1): check if things are valid on the basis of being empty,
  //  2): then, if they are the proper type
  if (
    pilotValidation === "Empty" ||
    copilotValidation === "Empty" ||
    fuelLevelValidation === "Empty" ||
    cargoLevelValidation === "Empty"
  ) {
    alert("All fields are required!");
    return false;
  } else if (
    pilotValidation === "Is a Number" ||
    copilotValidation === "Is a Number" ||
    fuelLevelValidation === "Not a Number" ||
    cargoLevelValidation === "Not a Number"
  ) {
    alert("Make sure to enter valid information for each field.");
    return false;

    //  3): then, update the faulty items section

    //  4): and, launch status h2 section
  } else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    if (fuelLevel < 10000) {
      list.style.visibility = "visible";
      fuelStatus.innerHTML = "Fuel level too low for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
    } else if (cargoLevel > 10000) {
      list.style.visibility = "visible";
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
    } else {
      launchStatus.innerHTML = "Shuttle is Ready for Launch";
      launchStatus.style.color = "green";
    }
    return false;
  }
}
async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
