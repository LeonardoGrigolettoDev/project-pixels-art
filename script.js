const black = document.getElementById('black');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');

function clicked (letid) {
    let list = document.getElementsByClassName("selected")
    for (let i=0; i>list.length; i += 1){
        list[i].classList.remove("selected")
    }
    letid.classList.add("selected")
}

window.onload = function (){
    let inicial = document.getElementById("black")
    inicial.classList.add("selected")
}

black.addEventListener("click", clicked)
red.addEventListener("click", clicked)
yellow.addEventListener("click", clicked)
blue.addEventListener("click", clicked)

