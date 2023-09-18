const navbar = document.querySelector(".navbar")
const xmark = document.querySelector("#xmark")
const menu = document.querySelector("#menu")
const menu_button = document.querySelector(".menu_button")
const navbar_links = document.getElementsByClassName("navbar_links")[0]
const nav_div = document.getElementsByClassName("nav_div")[0]
const dark_mode = document.querySelector(".dark")
const light_mode = document.querySelector(".light")
const logo = document.getElementsByClassName("logo")[0]
const experiance_title = document.getElementById("title").querySelector("h1")
const home = document.getElementsByClassName("home")[0]
const experiance = document.getElementsByClassName("experiance")[0]
const about = document.getElementsByClassName("about")[0]
const contact_me = document.getElementsByClassName("contact_me")[0]


const body = document.body


    

    menu.addEventListener("click", ()=> {


        navbar.classList.toggle("open")
     
     
       
      
        
    })

   
    
    // xmark.addEventListener("click", ()=> {
    
    //     navbar.classList.toggle("close")
    //     xmark.style.display = "none"
    //     menu.style.display = "flex"
      
    // })
    





  

    

  


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