
let getal = document.getElementById("teller")
let number = 0

function clicker() {
    number++


    if (number > 10) {
        number = 0
    }
    
    getal.innerText = number

}