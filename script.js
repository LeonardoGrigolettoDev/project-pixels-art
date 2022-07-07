let black = document.getElementById('black');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let blue = document.getElementById('blue');

let td1 = document.getElementById('td1');
let td2 = document.getElementById('td2');
let td3 = document.getElementById('td3');
let td4 = document.getElementById('td4');
let td5 = document.getElementById('td5');
let td6 = document.getElementById('td6');
let td7 = document.getElementById('td7');
let td8 = document.getElementById('td8');
let td9 = document.getElementById('td9');
let td10 = document.getElementById('td10');
let td11 = document.getElementById('td11');
let td12 = document.getElementById('td12');
let td13 = document.getElementById('td13');
let td14 = document.getElementById('td14');
let td15 = document.getElementById('td15');
let td16 = document.getElementById('td16');
let td17 = document.getElementById('td17');
let td18 = document.getElementById('td18');
let td19 = document.getElementById('td19');
let td20 = document.getElementById('td20');
let td21 = document.getElementById('td21');
let td22 = document.getElementById('td22');
let td23 = document.getElementById('td23');
let td24 = document.getElementById('td24');
let td25 = document.getElementById('td25');

function clicked (eventoDeOrigem) {
    black.classList.remove("selected")
    red.classList.remove("selected")
    yellow.classList.remove("selected")
    blue.classList.remove("selected")
    eventoDeOrigem.target.classList.add("selected")
}

function paint (eventoDeOrigem){
    let verify = document.getElementsByClassName("selected")[0];
    if (verify === black) {
        eventoDeOrigem.target.style.backgroundColor = "black"
        }
    if (verify === red) {
        eventoDeOrigem.target.style.backgroundColor = "red"
        }
    if (verify === yellow) {
        eventoDeOrigem.target.style.backgroundColor = "yellow"
        }       
    if (verify === blue) {
        eventoDeOrigem.target.style.backgroundColor = "blue"
        }
}

window.onload = function (){
    black.classList.add("selected")
}

black.addEventListener("click", clicked);
red.addEventListener("click", clicked);
yellow.addEventListener("click", clicked);
blue.addEventListener("click", clicked);

td1.addEventListener("click", paint);
td2.addEventListener("click", paint);
td3.addEventListener("click", paint);
td4.addEventListener("click", paint);
td5.addEventListener("click", paint);
td6.addEventListener("click", paint);
td7.addEventListener("click", paint);
td8.addEventListener("click", paint);
td9.addEventListener("click", paint);
td10.addEventListener("click", paint);
td11.addEventListener("click", paint);
td12.addEventListener("click", paint);
td13.addEventListener("click", paint);
td14.addEventListener("click", paint);
td15.addEventListener("click", paint);
td16.addEventListener("click", paint);
td17.addEventListener("click", paint);
td18.addEventListener("click", paint);
td19.addEventListener("click", paint);
td20.addEventListener("click", paint);
td21.addEventListener("click", paint);
td22.addEventListener("click", paint);
td23.addEventListener("click", paint);
td24.addEventListener("click", paint);
td25.addEventListener("click", paint);

