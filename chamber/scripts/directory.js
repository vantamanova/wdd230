const baseURL = "https://vantamanova.github.io/wdd230/chamber/";
const directoryURL = "https://vantamanova.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector("#cards");

async function getData(directoryURL) {
    const response = await fetch(directoryURL);
    const data = await response.json();

    //console.log(data.companies);
    displayData(data.companies);
}

getData(directoryURL);

function displayData(companies) {

    companies.forEach(company => {
        let card = document.createElement("section");
        const logo = document.createElement("img");
        const name = document.createElement("p");
        const adress = document.createElement("p");
        const phone = document.createElement("p");
        const email = document.createElement("a");

        name.textContent = company.name;
        adress.textContent = company.adress;
        phone.textContent = company.phone;
        email.textContent = company.email;

        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `${company.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(adress);
        card.appendChild(phone);
        card.appendChild(email);

        cards.appendChild(card);
    });

}