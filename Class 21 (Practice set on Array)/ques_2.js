// Question 2 : 0 value will end the loop

let x = [1,2,3,4,5,6,7,8];
let y;
do{
  y = prompt("Enter a number");
  y = Number.parseInt(y);
  x.push(y);
}while(y!=0);
console.log(x);
