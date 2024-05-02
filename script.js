let showMenu = document.getElementById("show-menu");
let containerList = document.getElementById("container-list");

showMenu.addEventListener("click",()=>{
    containerList.style.left = "50%",
    containerList.style.display = "block"
})

let closeMenu = document.getElementById("close-menu");

closeMenu.addEventListener("click",()=>{
    containerList.style.left = "200%",
    containerList.style.display = "none"
})