const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75304441731797&lon=6.633323630794887&units=imperial&appid=cad5eaa216f35c54c3fcd27ec71d8954';

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
    });
    
}

apiFetch();