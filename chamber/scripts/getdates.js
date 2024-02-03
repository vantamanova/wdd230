const modification = document.querySelector('#lastModified');

const options = {
    month: "short",
    day: "numeric",
    year: "numeric"
};

const date = new Date().toLocaleDateString("en-US", options);
modification.innerHTML = `Last Modification: ${date}`


