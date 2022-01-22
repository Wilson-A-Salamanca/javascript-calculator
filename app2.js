let num1 = "";
let num2 = "";
let operation;

/*answer space*/
const result = document.getElementById("result");

/*numbers */
const buttons = document.querySelectorAll(".btn__num");
/*events of the numbers */
buttons.forEach(i => i.addEventListener("click" , (e) =>{
  result.textContent = result.textContent + e.target.innerHTML
  if(!!operation){
    num2 = parseFloat(num2 + e.target.innerHTML);
  } else {
    num1 = parseFloat(num1 + e.target.innerHTML);
  }
}));


/*operators*/
const operators = document.querySelectorAll(".btn__op");
/*events of operators */
operators.forEach(op => op.addEventListener("click" , (e) =>{
  if (!!operation) {
    return;
  } else {
    operation = e.target.innerHTML;
  }
  result.textContent += operation;
}));


/*buttons of clear and equal*/
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

clear.addEventListener("click" , () =>{
  clean();
});

equal.addEventListener("click" , () => {
  solve(num1 , num2);
});
/*functions*/
/*clean, solve(operators), reset */

function clean(){
  result.textContent = "";
};

function reset(){
  num1 = "";
  num2 = "";
  operation = "";
  result.textContent = "";
}

function solve(number1 , number2){
  let res ;
  switch(operation){
    case "+":
    res = number1 + number2;
    break;
    case "-":
    res = number1 - number2;
    break;
    case "*":
    res = number1 * number2;
    break;
    case "/":
    res = number1 / number2;
    break;
    case "%":
    res = number1 * number2 / 100;
    break;
  };
  reset()
  result.textContent = res;
}