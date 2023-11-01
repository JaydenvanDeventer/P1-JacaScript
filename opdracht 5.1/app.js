function changetext()
{
document.getElementById("titel").innerHTML = "Dit is DOM manipulatie"   
}

function changecolor()
{
document.getElementById("titel").style.color = "red"; 
console.log("de functie werkt");
}



changecolor();
changetext();