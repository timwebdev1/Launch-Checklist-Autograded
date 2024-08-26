// Write your JavaScript code here!

window.addEventListener("load", function () {
    // window prompt to fill in all fields
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");

    if (
      pilotNameInput.value === "" ||
      copilotNameInput.value === "" ||
      fuelLevelInput.value === "" ||
      cargoMassInput.value === ""
    ) {
      alert("All fields are required!");

      event.preventDefault();
    }

      
    //   formSubmission
    // {pass in parameters:
    //  1. document: as submitted from eventlistener
    //  2. the list of faulty items
    //  3. intended to be string values from the input fields themselves (access them and pass into function when called from other file)} => THESE ARE ALL PASSED IN FROM OTHER FILE WHEN CALLED
  });

  // let listedPlanets;
  // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  // let listedPlanetsResponse;
  // listedPlanetsResponse.then(function (result) {
  //     listedPlanets = result;
  //     console.log(listedPlanets);
  // }).then(function () {
  //     console.log(listedPlanets);
  //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  // })
});

// add listeners here!!!
