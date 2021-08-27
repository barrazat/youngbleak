let menu = document.getElementById("menu")
let header = document.getElementById("header")
let nav = document.getElementById("nav")
menu.addEventListener("click", function(){
    if(header.style.height == "50px" || header.offsetHeight == 50) {
        header.style.height = "100%";
    } else {
        header.style.height = "50px"
    }
    
})

window.addEventListener("resize", function(){
    let ancho = document.documentElement.clientWidth

    if(ancho > 480) {
        header.style = ""
    }
})