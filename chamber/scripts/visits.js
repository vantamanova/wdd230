// Initialization
const visits = document.querySelector(".visits");

// Get value
let visitsNum = Number(window.localStorage.getItem("numVisits-ls")) || 0;


// If first visit
if (visitsNum == 0) {
    visits.textContent = `This is your first visit! Welcome!`;

}
else {
    visits.textContent = visitsNum +1;
    // The number of visits on the page was different from the information in the 
    // Applications panel so I've disided to add 1 so it would look correct.
    // Might be wrong
}

// number of vosots +1
visitsNum += 1;

// Store new value
localStorage.setItem('numVisits-ls', visitsNum);

