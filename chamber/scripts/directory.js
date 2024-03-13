const baseURL = "https://vantamanova.github.io/wdd230/chamber/";
const directoryURL = "https://vantamanova.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector(".cards");

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
        card.setAttribute("class", "company");

        const logo = document.createElement("img");
        const name = document.createElement("h3");
        const adress = document.createElement("p");
        const phone = document.createElement("p");
        const membership = document.createElement("p");
        const email = document.createElement("a");

        name.textContent = company.name;
        adress.textContent = company.address;
        phone.textContent = company.phone;
        email.textContent = company.website;
        membership.textContent = company.membership;

        logo.setAttribute('src', `images/${company.image}`);
        logo.setAttribute('alt', `${company.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(adress);
        card.appendChild(phone);
        card.appendChild(email);
        card.appendChild(membership);

        cards.appendChild(card);
    });

}