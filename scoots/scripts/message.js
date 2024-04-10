const banner = document.querySelector(".message");

const closeButton = document.querySelector('#close');
const menu = document.querySelector(".menu");


closeButton.addEventListener('click', () => {
	banner.classList.toggle('hide');
	closeButton.classList.toggle('hide');
	menu.classList.toggle('messageClosed');

});