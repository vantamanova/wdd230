const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const map = document.querySelector('.map');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

hamButton.addEventListener('click', ()=>{
	map.classList.toggle('close');
});



