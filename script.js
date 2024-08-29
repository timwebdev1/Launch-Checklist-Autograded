// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanets;
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
  }).then(function () {
    console.log(listedPlanets);
    let selectsPlanet = pickPlanet(listedPlanets);
    console.log(selectsPlanet);
    addDestinationInfo(document, selectsPlanet.name, selectsPlanet.diameter, selectsPlanet.star, selectsPlanet.distance, selectsPlanet.moons, selectsPlanet.image);
  })

  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    let list = document.getElementById("faultyItems");



    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoLevel = document.querySelector("input[name=cargoMass]").value;

   
    let isValid = formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    
    if (!isValid) {
      event.preventDefault();
    };
  });
});


