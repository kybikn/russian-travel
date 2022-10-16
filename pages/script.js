const button = document.querySelector(".header__button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close");
const formSignIn = document.querySelector(".popup__form-signIn");
const formReg = document.querySelector(".popup__form-reg");
const reg = document.querySelector(".popup__button_type_reg");
const signIn = document.querySelector(".popup__button_type_signIn-active");
const entersignIn = document.querySelector(".popup__button_type_enter-signIn");
const enterReg = document.querySelector(".popup__button_type_enter-reg");
const enterReconstPass = document.querySelector(
  ".popup__button_type_enter-reconst"
);
const reconstLink = document.querySelector(".popup__check-link");
const reconstPass = document.querySelector(".popup__form-reconstPass");

function open() {
  popup.classList.add("popup_active");
  formSignIn.classList.add("popup__form-signIn_active");
  formReg.classList.remove("popup__form-reg_active");
  reconstPass.classList.remove("popup__form-reconstPass_active");
  popup.addEventListener("submit", (e) => handleSubmit(e));
}

function handleSubmit(e) {
  e.preventDefault();
}

function openSignIn() {
  popup.classList.add("popup_active");
  formReg.classList.remove("popup__form-reg_active");
  formSignIn.classList.add("popup__form-signIn_active");
}

function openReg() {
  popup.classList.add("popup_active");
  formSignIn.classList.remove("popup__form-signIn_active");
  formReg.classList.add("popup__form-reg_active");
}

function openReconst() {
  popup.classList.add("popup_active");
  formSignIn.classList.remove("popup__form-signIn_active");
  formReg.classList.remove("popup__form-reg_active");
  reconstPass.classList.add("popup__form-reconstPass_active");
}

function alertSignIn() {
  popup.classList.remove("popup_active");
  alert("Вы успешно вошли в систему !");
}

function alertReg() {
  popup.classList.remove("popup_active");
  alert("Вы успешно зарегистрировались !");
}

function alertReconst() {
  popup.classList.remove("popup_active");
  alert("Вы успешно сменили пароль !");
}

function close() {
  popup.classList.remove("popup_active");
  formSignIn.classList.remove("popup__form-signIn_active");
}

button.addEventListener("click", open);
closeButton.addEventListener("click", close);

// слушатель для закрытия попапа по затемненной области
popup.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("popup") &&
    e.target.classList.contains("popup_active")
  ) {
    close();
  }
});

reg.addEventListener("click", openReg);
signIn.addEventListener("click", openSignIn);
reconstLink.addEventListener("click", openReconst);

entersignIn.addEventListener("click", alertSignIn);
enterReg.addEventListener("click", alertReg);
enterReconstPass.addEventListener("click", alertReconst);
