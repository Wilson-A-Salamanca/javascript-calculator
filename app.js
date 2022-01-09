/*variables que guardan los numeros a operar */

let op1;
let op2;
let operation;
/*botones de los numeros */
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let result = document.getElementById("result");

/*botones de operadores */
let add = document.getElementById("add");
let rest = document.getElementById("rest");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let porcent = document.getElementById("porcent");

let equal = document.getElementById("equal");
let clear = document.getElementById("clear");

/*EVENTOS DE OS NUMEROS*/
zero.addEventListener("click" , () => {
  result.textContent = result.textContent + "0"
});

one.addEventListener("click" , () => {
  result.textContent = result.textContent + "1"
});

two.addEventListener("click", () => {
  result.textContent = result.textContent + "2"
});

three.addEventListener("click" , () => {
  result.textContent = result.textContent + "3"
});

four.addEventListener("click" , () => {
  result.textContent = result.textContent + "4"
});

five.addEventListener("click" , () => {
  result.textContent = result.textContent + "5"
});

six.addEventListener("click" , () => {
  result.textContent = result.textContent + "6"
});

seven.addEventListener("click" , () => {
  result.textContent = result.textContent + "7"
});

eight.addEventListener("click" , () => {
  result.textContent = result.textContent + "8"
});

nine.addEventListener("click" , () => {
  result.textContent = result.textContent + "9"
});

/*eventos de operadores */


add.addEventListener("click" , () => {
  op1 = result.textContent
  operation = "+";
  clean();
});

rest.addEventListener("click" , () => {
  op1 = result.textContent;
  operation = "-";
  clean();
});

multiply.addEventListener("click" , () => {
  op1 = result.textContent;
  operation = "*";
  clean();
});

divide.addEventListener("click" , () => {
  op1 = result.textContent;
  operation = "/";
  clean();
});

porcent.addEventListener("click" , () => {
  op1 = result.textContent;
  operation = "%"
  clean();
})

clear.addEventListener("click" , () =>{
  clean()
})

equal.addEventListener("click" , () => {
  op2 = result.textContent;
  solve();
});


/* functions */

function clean(){
  result.textContent = "";
}

function reset(){
  result.textContent = "";
  op1 = 0;
  op2 = 0;
  operation = "";
}

function solve(){
  let res ;
  switch(operation){
    case "+":
    res = parseFloat(op1) + parseFloat(op2);
    break;

    case "-":
    res = parseFloat(op1) - parseFloat(op2);
    break;

    case "*":
    res = parseFloat(op1) * parseFloat(op2);
    break;

    case "/":
    res = parseFloat(op1) / parseFloat(op2);
    break;

    case "%":
    res = parseFloat(op1) * parseFloat(op2) / 100;
    break;
  }
  reset();
  result.textContent = res;
}