const modification = document.querySelector('#lastModified');

const options = {
    month: "short",
    day: "numeric",
    year: "numeric"
};

const date = new Date().toLocaleDateString("en-US", options);
modification.innerHTML = `Last Modification: ${date}`

const info = document.querySelector('#info');
const year = new Date().toLocaleDateString("en-US", {year: "numeric"});

info.insertAdjacentHTML('beforebegin', `<p> &copy ${year} </p>`);
info.insertAdjacentHTML('afterend', '<p>UAE</p>');
