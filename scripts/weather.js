const currentTemp = document.querySelector('#current-temp');
//const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const figure = document.querySelector('figure');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=25.22270902874263&lon=55.26662674339113&units=imperial&appid=cad5eaa216f35c54c3fcd27ec71d8954';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResultes(data);
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
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    data.weather.forEach(event => {
        const weatherIcon = document.createElement("img");
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

        figure.appendChild(weatherIcon);
    });
    
}

apiFetch();