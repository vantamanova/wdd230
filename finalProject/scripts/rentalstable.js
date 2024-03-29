const baseURL = "https://vantamanova.github.io/wdd230/finalProject/";
const directoryURL = "https://vantamanova.github.io/wdd230/finalProject/data/data.json";

const tbody = document.querySelector("tbody");

async function getData(directoryURL) {
    const response = await fetch(directoryURL);
    const data = await response.json();

    console.log(data.rentals);
    displayData(data.rentals);
}

function displayData(data) {
    data.forEach(item => {
        const newTr = document.createElement("tr");

        const type = document.createElement("td");
        const maxNum = document.createElement("td");
        const priceResHalf = document.createElement("td");
        const priceResFull = document.createElement("td");
        const priceWalkHalf = document.createElement("td");
        const priceWalkFull = document.createElement("td");

        type.innerHTML = `${item.type}`;
        maxNum.innerHTML = `${item.maxPerson}`;
        priceResHalf.innerHTML = `${item.price[0].halfDay}`;
        priceResFull.innerHTML = `${item.price[0].fullDay}`;
        priceWalkHalf.innerHTML = `${item.price[1].halfDay}`;
        priceWalkFull.innerHTML = `${item.price[1].fullDay}`;

        newTr.appendChild(type);
        newTr.appendChild(maxNum);
        newTr.appendChild(priceResHalf);
        newTr.appendChild(priceResFull);
        newTr.appendChild(priceWalkHalf);
        newTr.appendChild(priceWalkFull);

        tbody.appendChild(newTr);
    });

}

getData(directoryURL);