let menu = document.getElementById("menu")
let header = document.getElementById("header")
let nav = document.getElementById("nav")

function ajustarTamañoHeader(){
    header.style.height = "50px"
}

menu.addEventListener("click", function(){
    if(header.style.height == "50px" || header.offsetHeight == 50) {
        header.style.height = "100%";
    } else {
        ajustarTamañoHeader();
    }
    
})

document.getElementById("home").onclick = function(){
    if(header.style.height == "100%"){
        ajustarTamañoHeader();
    }
}

document.getElementById("bio").onclick = function(){
    if(header.style.height == "100%"){
        ajustarTamañoHeader();
    }
}

document.getElementById("references").onclick = function(){
    if(header.style.height == "100%"){
        ajustarTamañoHeader();
    }
}

document.getElementById("prices").onclick = function(){
    if(header.style.height == "100%"){
        ajustarTamañoHeader();
    }
}

window.addEventListener("resize", function(){
    let ancho = document.documentElement.clientWidth

    if(ancho > 480) {
        header.style = ""
    }
})