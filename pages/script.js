const button = document.querySelector(".header__button");
const popup = document.querySelector(".overlay");
const closeButton = document.querySelector(".close");

button.addEventListener("click", open);
closeButton.addEventListener("click", close);

popup.classList.remove("active");

function open() {
  popup.classList.add("active");
}

function close() {
  popup.classList.remove("active");
}
