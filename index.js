const toggle_button = document.getElementsByClassName("toggle_button")[0]
const navbar_links = document.getElementsByClassName("navbar_links")[0]
const nav_div = document.getElementsByClassName("nav_div")[0]
const dark_mode = document.getElementsByClassName("dark_mode")[0]
const light_mode = document.getElementsByClassName("light_mode")[0]
const logo = document.getElementsByClassName("logo")[0]
const experiance_title = document.getElementById("title").querySelector("h1")
const home = document.getElementsByClassName("home")[0]
const experiance = document.getElementsByClassName("experiance")[0]
const about = document.getElementsByClassName("about")[0]
const contact_me = document.getElementsByClassName("contact_me")[0]


const body = document.body


toggle_button.addEventListener("click", () => {

    navbar_links.classList.toggle("active")

})


function enable_light_mode(){

        body.classList.add("light_mode")

}

function disable_light_mode(){

    body.classList.remove("light_mode")

}

dark_mode.addEventListener("click", () => {

    disable_light_mode()
    body.style.color = "white"
    experiance_title.style.color = "rgb(250, 218, 54)"
    home.style.color = "rgb(250, 218, 54)"
    experiance.style.color = "rgb(250, 218, 54)"
    about.style.color = "rgb(250, 218, 54)"
    contact_me.style.color = "rgb(250, 218, 54)"

})

light_mode.addEventListener("click", () => {

    enable_light_mode()
    body.style.color = "black"
    experiance_title.style.color = "black"
    home.style.color = "black"
    experiance.style.color = "black"
    about.style.color = "black"
    contact_me.style.color = "black"
    
})