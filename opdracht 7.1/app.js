function checkBudget() {
    
    let product = 60;
  
   
    let budgetInput = document.getElementById("numbudget");
    let budget = parseFloat(budgetInput.value);
  
    
    let asnwerElement = document.getElementById("answer");
   
    if (!isNaN(budget)) {
     
      if (budget >= product) {
        asnwerElement.style.color = "green";
        asnwerElement.textContent = "U heeft genoeg geld!";
      } else {
        asnwerElement.style.color = "red";
        asnwerElement.textContent = " U heeft te weinig geld!";
      }
    }
  }