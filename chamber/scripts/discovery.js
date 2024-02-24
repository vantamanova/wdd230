// Initialization
const visits = document.querySelector(".visitsDiscovery");
const msToDays = 84600000;

// Setting the dates
let today = Date.now();
let lastVisit = new Date();
lastVisit = window.localStorage.getItem("lastVisit-ls") || today;


let daysSinceLastVisit = (today - lastVisit) / msToDays;

// Get value
let visitsNum = Number(window.localStorage.getItem("numVisits-ls")) || 0;


// If first visit
if (daysSinceLastVisit == 0) {
    visits.textContent = `Welcome! Let us know if you have any questions`;
    console.log(`Welcome! Let us know if you have any questions`);
}
// Less than one day
else if ((daysSinceLastVisit > 0) & (daysSinceLastVisit < 1)) {
    visits.textContent = `Back so soon! Awesome!`;
    console.log('Back so soon! Awesome!');
}
else {
    visits.textContent = `You last visited ${daysSinceLastVisit.toFixed(0)} days ago.`;
    console.log(`You last visited ${daysSinceLastVisit.toFixed(0)} days ago.`);
}

// number of vosots +1
visitsNum += 1;

// Store new value
localStorage.setItem('numVisits-ls', visitsNum);
localStorage.setItem('lastVisit-ls', lastVisit);



