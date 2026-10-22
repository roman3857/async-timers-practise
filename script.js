const button = document.querySelector(".button")
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

setTimeout(() => {
    console.log("всім привіт");
    
}, 3000)

const greet = (name) => {
    setTimeout(() => {
        console.log(name);
        
    }, 2000)
}

greet("Roma")

const timeOut = setTimeout(() => {
    console.log("boom")
    clearTimeout(timeOut)
}, 5000)

let counter = 5
const id2 = setInterval(() => {
    counter-=1
    console.log(counter);
    
    if (counter === 0) {
        clearTimeout(id2)
        console.log("start")
    }
}, 1000)



button.addEventListener("click", () => {
    setTimeout(() => {
        alert("hello world!")
    }, 2000)
})