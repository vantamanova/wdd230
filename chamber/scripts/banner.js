const banner = document.querySelector(".banner");
const dateNow = new Date().getDay();


if ((dateNow == 1) || (dateNow == 2) || (dateNow == 3)) {
    banner.classList.add("show");
}

const closeButton = document.querySelector('#close');


closeButton.addEventListener('click', () => {
	banner.classList.toggle('hide');
	closeButton.classList.toggle('hide');
});