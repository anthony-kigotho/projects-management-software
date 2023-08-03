const regLink = document.querySelector(".regLink");

const logLink = document.querySelector(".logLink");

const regForm = document.querySelector("#register");

const logForm = document.querySelector("#login");


regLink.addEventListener("click", () => {
    logForm.classList.remove("mainContainer")
    regForm.classList.add("mainContainer")
    logForm.classList.add("hide")
})

logLink.addEventListener("click", () => {
    regForm.classList.remove("mainContainer")
    logForm.classList.add("mainContainer")
    regForm.classList.add("hide")
})