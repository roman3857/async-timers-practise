const alertEl = document.querySelector(".js-alert")
alertEl.classList.add("is-visible")

const hideAlert = () => {
    console.log("hide fn");
    
    alertEl.classList.remove("is-visible");
}

const id = setTimeout(hideAlert, 3000)

alertEl.addEventListener("click", () => { 
    hideAlert()
    clearTimeout(id)
})