const baseURL = "https://vantamanova.github.io/wdd230/";
const linksURL = "https://vantamanova.github.io/wdd230/data/links.json";

async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayLinks(data.weeks);
}

const card = document.querySelector(".card");
const newUl = document.createElement("ul");

function displayLinks(weeks) {

    weeks.forEach(week => {
        const newLi = document.createElement("li");
        const lessonNum = document.createElement("a");
        lessonNum.classList.add("sectiontext");
        lessonNum.textContent = `Week ${week.lesson}:`;
        console.log(lessonNum);

        newLi.appendChild(lessonNum);
        
        week.links.forEach(link => {
            const assignment = document.createElement("a");
            assignment.classList.add("sectiontext");

            assignment.textContent = `${link.title} |`;
            assignment.setAttribute("href", link.url);

            newLi.appendChild(assignment);
            console.log(assignment);
        })

        newUl.appendChild(newLi);
    });

   card.appendChild(newUl);

    

}

getLinks(linksURL);