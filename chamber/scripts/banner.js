const banner = document.querySelector(".banner");
const dateNow = new Date().getDay();

console.log(dateNow);

if ((dateNow == 0) || (dateNow == 2) || (dateNow == 3)) {
    banner.classList.add("show");
}