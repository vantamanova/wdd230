const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

password2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (password.value !== password2.value) {
		message.textContent = "❗Password DO NOT MATCH!";
		message.style.visibility = "show";
		password.value = "";
		password2.value = "";
		password.focus();
	} else {
		message.style.display = "none";
		password2.style.color = "#000";
	}
}



const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}