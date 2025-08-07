const menu = document.getElementById("menu")
const navBar = document.querySelector('nav')

let count = 1;
menu.addEventListener('click', ()=>{
    if (count == 1){
        navBar.style.display = "flex";
        count = 0;
    } else if (count == 0){
        navBar.style.display = "none";
        count = 1;
    }
})

