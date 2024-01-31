function displayTrips(response) {
  new Typewriter("#trip-destination", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generateTrips(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-input");
  let apiKey = "1o630f4a9d3497230622bb9ffta16859";
  let context =
    "You are a trip advisor who has traveled the world. each destination is a new item on an ordered list using the <ol> and <li> tags";
  let prompt = `Give top 3 destinations about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let destinationElement = document.querySelector("#trip-destination");
  destinationElement.classList.remove("hidden");
  destinationElement.innerHTML = `<div class="blink">⏳ Generating top 3 places in ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayTrips);
}

let poemFormElement = document.querySelector("#trip-generator-form");
poemFormElement.addEventListener("submit", generateTrips);
