const weatherDiv = document.querySelector(".weatherDiv");
20.437745416071856, -86.94327185778864

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.437745416071856&lon=-86.94327185778864&units=imperial&appid=cad5eaa216f35c54c3fcd27ec71d8954';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResultes(data.list[0]);
            getMaxTemp(data.list[0]);
            getForecast(data.list[0])
            getForecast(data.list[8]) 
            getForecast(data.list[16]) 
        }
        else {
            throw Error(await response.text());  
        }
    }
    catch(error) {
        console.log(error);
    }
}

function displayResultes(data) {
    data.weather.forEach(event => {
        const weatherIcon = document.createElement("img");
        const captionDesc = document.createElement('figcaption');
        const figure = document.createElement('figure');
        const currentTemp = document.createElement('p');
        const humidity = document.createElement('p');

        currentTemp.innerHTML = `Temperature: ${data.main.temp.toFixed(0)}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/w/${event.icon}.png`;
        let desc = event.description;
        let words = desc.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        words = words.join(" ");
    
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
        captionDesc.textContent = `${words}`;
        humidity.textContent = `Humidity: ${data.main.humidity}`;
       
        figure.appendChild(weatherIcon);
        figure.appendChild(captionDesc);
        figure.appendChild(currentTemp);
        figure.appendChild(humidity);
        

        weatherDiv.appendChild(figure);
    }); 
}

const forecastDiv = document.querySelector(".forecastDiv");

function getForecast(data) {
    const newP = document.createElement("p");

    const temp = data.main.temp.toFixed(0);

    newP.textContent = `${temp}°F`;
    forecastDiv.appendChild(newP);

}

function getMaxTemp(data) {
    var maxTemp = document.querySelector(".maxTemp");

    maxTemp.innerHTML = `Temperature: ${data.main.temp_max.toFixed(0)}&deg;F`;

}

apiFetch();