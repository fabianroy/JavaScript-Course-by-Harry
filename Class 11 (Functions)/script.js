function calc(x, y){
  return (x+y)/2;
}

//Arrow Function
const hello = ()=>{
  console.log("Welcome to the function of JavaScript");
  return;
}

let a = 5;
let b = 10;
let c = 15;

hello();
console.log("Average of a & b = " + calc(a, b));
console.log("Average of a & b = " + calc(b,c));
console.log("Average of a & b = " + calc(a, c));
