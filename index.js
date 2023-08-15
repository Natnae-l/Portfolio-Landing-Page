document.querySelector(".menu-bar").addEventListener("click", showMenu)
document.querySelector(".close").addEventListener("click", returnMenu)

function showMenu(){
    document.querySelector("nav").classList.toggle("show")
    document.querySelector(".close").classList.toggle("show-menu")
    document.querySelector(".menu-bar").classList.toggle("show-menu")
}
function returnMenu(){
    document.querySelector("nav").classList.toggle("show")
    document.querySelector(".close").classList.toggle("show-menu")
    document.querySelector(".menu-bar").classList.toggle("show-menu")
}