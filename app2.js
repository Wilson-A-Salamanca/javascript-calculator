let num1;
let num2;
let operation;

/*answer space*/
let result = document.getElementById("result");

/*numbers */
let buttons = document.querySelectorAll(".btn__num");
/*events of the numbers */
buttons.forEach(i => i.addEventListener("click" , (e) =>{
  num1 = e.target.innerHTML;
  result.textContent = result.textContent + num1;
}));


/*operators*/
let operators = document.querySelectorAll(".btn__op");
/*events of operators */
operators.forEach(op => op.addEventListener("click" , (e) =>{
  operation = e.target.innerHTML;
  result.textContent += operation;
  clean();
}));


/*buttons of clear and equal*/
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");

clear.addEventListener("click" , () =>{
  clean();
});

equal.addEventListener("click" , () => {
  num2 = result.textContent;
  solve();
});
/*functions*/
/*clean, solve(operators), reset */

function clean(){
  result.textContent = "";
};

function reset(){
  num1 = "";
  num2 = "";
  result.textContent = "";
}

function solve(){
  let res ;
  console.log(num1);
  console.log(num2);
  switch(operation){
    case "+":
    res = num1 + num2;
    break;
    case "-":
    res = num1 - num2;
    break;
    case "*":
    res = num1 * num2;
    break;
    case "/":
    res = num1 / num2;
    break;
    case "%":
    res = num1 * num2 / 100;
    break;
  };
  result.textContent = res;
}