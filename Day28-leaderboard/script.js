const addPlayerBtn = document.getElementById("addPlayer");
const leaderboard = document.getElementById("leaderboard");
const errorMsg = document.getElementById("error");

addPlayerBtn.addEventListener("click", () => {
  // reading input values
  const firstName = document.getElementById("firstName").value.trim(); // trim: removes any accidental spaces from the beginning or end
  const lastName = document.getElementById("lastName").value.trim();
  const country = document.getElementById("country").value.trim();
  const score = document.getElementById("score").value.trim();

  // validating inputs

  if (!firstName || !lastName || !country || !score) {
    errorMsg.textContent = "All fields are required";
    return;
  }

  errorMsg.textContent = "";
  createPlayer(firstName, lastName, country, Number(score)); // Number(score) converts the string input into a numeric value

  // clearing the input boxes
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("country").value = "";
  document.getElementById("score").value = "";
});

function createPlayer(firstName, lastName, country, score) {
  const playerDiv = document.createElement("div");
  playerDiv.classList.add("player");

  const playerInfo = document.createElement("div");
  playerInfo.classList.add("player-info");
  const now = new Date().toLocaleString(); // gives nicely formatted current date and time

  playerInfo.innerHTML = `
        <span> ${firstName.toUpperCase()} ${lastName.toUpperCase()}</span>
        <small>${now}</small>`;

  // create country and score boxes

  const playerCountry = document.createElement("div");
  playerCountry.textContent = country.toUpperCase();
  playerCountry.classList.add("player-country");

  const playerScore = document.createElement("div");
  playerScore.textContent = score;
  playerScore.classList.add("player-score");

  const buttonsDiv = document.createElement("div");
  buttonsDiv.innerHTML = `
        <button class="delete">Delete</button>
        <button class="plus">+5</button>
        <button class="minus">-5</button>
        `;

  buttonsDiv.querySelector(".delete").addEventListener("click", () => {
    leaderboard.removeChild(playerDiv);
  });

  buttonsDiv.querySelector(".plus").addEventListener("click", () => {
    playerScore.textContent = Number(playerScore.textContent) + 5;
  });

  buttonsDiv.querySelector(".minus").addEventListener("click", () => {
    playerScore.textContent = Number(playerScore.textContent) - 5;
  });

  playerDiv.appendChild(playerInfo);
  playerDiv.appendChild(playerCountry);
  playerDiv.appendChild(playerScore);
  playerDiv.appendChild(buttonsDiv);

  leaderboard.appendChild(playerDiv);
}
