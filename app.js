const cardContainer = document.querySelector(".card-container");
const darkMode = document.querySelector(".site-header-right");

const api = "https://restcountries.com/v3.1/all";

async function sendRequest(url) {
  const req = await fetch(url);
  const data = await req.json();
  showData(data);
}

sendRequest(api);

function showData(data) {
  data.forEach((country) => {
    const cardLink = document.createElement("a");
    cardLink.setAttribute("href", "detail.html");
    cardLink.classList.add("card-link");
    cardLink.innerHTML = `
        <div class="card">
        <img class="card-img" src=${country.flags.svg} alt="germany">
        <div class="card-action">
            <h3 class="card-title">${country.name.common}</h3>
            <p class="card-text">Population: <span> ${
              country.population
            }</span></p>
            <p class="card-text">Region: <span>${country.region}</span></p>
            <p class="card-text">Capital: <span>${
              country.capital ? country.capital[0] : "No Capital"
            }</span></p>
        </div>
    </div>
        `;
    console.log(1);

    cardContainer.appendChild(cardLink);
  });
}
