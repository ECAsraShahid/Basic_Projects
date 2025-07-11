let calculation=localStorage.getItem('Calculation')|| '';

showCalculation();

function updateCalculation(number){
  calculation+=number;
  showCalculation();

  localStorage.setItem('Calculation',calculation);
}
function showCalculation(){
  document.querySelector('.js-result').innerHTML = calculation;
}