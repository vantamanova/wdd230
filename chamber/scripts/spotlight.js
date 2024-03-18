const baseURL = "https://vantamanova.github.io/wdd230/chamber/";
const directoryURL = "https://vantamanova.github.io/wdd230/chamber/data/members.json";

const card = document.querySelector(".card");

async function getData(directoryURL) {
    const response = await fetch(directoryURL);
    const data = await response.json();

    console.log(data.companies);
    filterData(data.companies);
}

function filterData(companies) {
    // filter only those with Gold and Silver membership
    const result = companies.filter((company) => (company.membership == "Gold") || (company.membership == "Silver"));

    // New array for three random companies
    const companiesList = [];

    // Loop until get 3 different companies in the array
    while (companiesList.length < 3) {
        const randomCompany = companies[Math.floor(Math.random() * result.length)];
        console.log(randomCompany);

        // Checking if the company is in array
        if (companiesList.includes(randomCompany)) {
            continue;
        }
        else {
            companiesList.push(randomCompany)
        }
        
    }
    displayData(companiesList);
}

getData(directoryURL);


function displayData(companies) {
    companies.forEach(company => {
        const newSection = document.createElement("section");
        const name = document.createElement("h3");
        const newHr = document.createElement("hr");
        const newDiv = document.createElement("div");
        const membership = document.createElement("p");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");

        name.textContent = `${company.name}`;
        membership.textContent = `${company.membership}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        website.textContent = `${company.website}`;

        newDiv.appendChild(membership);
        newDiv.appendChild(address);
        newDiv.appendChild(phone);
        newDiv.appendChild(website);

        newSection.appendChild(name);
        newSection.appendChild(newHr);
        newSection.appendChild(newDiv);

        card.appendChild(newSection);
    });
}
