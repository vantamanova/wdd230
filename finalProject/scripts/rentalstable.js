const baseURL = "https://vantamanova.github.io/wdd230/finalProject/";
const directoryURL = "https://vantamanova.github.io/wdd230/finalProject/data/rentals.json";

//const cards = document.querySelector(".cards");

async function getData(directoryURL) {
    const response = await fetch(directoryURL);
    const data = await response.json();

    console.log(data.rentals);
    //displayData(data.companies);
}

getData(directoryURL);