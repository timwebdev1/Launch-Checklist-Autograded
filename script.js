// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanets;
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
  }).then(function () {
    console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let selectsPlanet = pickPlanet(listedPlanets);
    console.log(selectsPlanet);
    addDestinationInfo(document, selectsPlanet.name, selectsPlanet.diameter, selectsPlanet.star, selectsPlanet.distance, selectsPlanet.moons, selectsPlanet.image);
  })

  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    // faulty item params
    let list = document.getElementById("faultyItems");


    // form item params
    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoLevel = document.querySelector("input[name=cargoMass]").value;

    // console.log(pilotStatus);
   
    let isValid = formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    
    if (!isValid) {
      event.preventDefault();
    };
  });
});


