const toggle_button = document.getElementsByClassName("toggle_button")[0]
const navbar_links = document.getElementsByClassName("navbar_links")[0]

toggle_button.addEventListener("click", () => {

    navbar_links.classList.toggle("active")

})


navbar_links.addEventListener("click", () => {

    if (navbar_links.classList.toggle("active")){

        navbar_links.style.display = "none"

    }

})