let answer = document.getElementById("answer");

function add() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  
  if (num1 > 0 && num2 > 0) {
    const result = num1 + num2
    document.getElementById('answer').textContent = `antwoord: ${result}`;
  } else {
    document.getElementById('answer').textContent = `het getal is te laag`;
  }
    console.log(result);
    answer.textContent = "antwoord: " + result;
  }


function subtract() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  
  if (num1 > 0 && num2 > 0) {
    const result = num1 - num2
    document.getElementById('answer').textContent = `antwoord: ${result}`;
  } else {
    document.getElementById('answer').textContent = `het getal is te laag`;
  }
  console.log(result);
  answer.textContent = "antwoord: " + result;
}

function multiply() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  
  if (num1 > 0 && num2 > 0) {
    const result = num1 * num2
    document.getElementById('answer').textContent = `antwoord: ${result}`;
  } else {
    document.getElementById('answer').textContent = `het getal is te laag`;
  }
  console.log(result);
  answer.textContent = "antwoord: " + result;
}
function divide() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  
  if (num1 > 0 && num2 > 0) {
    const result = num1 / num2
    document.getElementById('answer').textContent = `antwoord: ${result}`;
  } else {
    document.getElementById('answer').textContent = `het getal is te laag`;
  }
  console.log(result);
  answer.textContent = "antwoord: " + result;
}