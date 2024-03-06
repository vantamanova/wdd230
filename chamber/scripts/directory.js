const baseURL = "https://vantamanova.github.io/wdd230/chamber/";
const directoryURL = "https://vantamanova.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector("#cards");

async function getLinks(directoryURL) {
    const response = await fetch(directoryURL);
    const data = await response.json();

    displayLinks(data);
}

getLinks(directoryURL);