
const knop = document.getElementById("knop");
const tellerElement = document.getElementById("teller");

let teller = 0;


knop.addEventListener("click", function () {

    teller++;

    if (teller === 10) {
        teller = 0;
    }

    tellerElement.textContent = teller;
});