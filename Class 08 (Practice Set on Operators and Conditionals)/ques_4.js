// Question 4 **
// Write a JavaScript program to find whether a number is divisivle by 2 or 3.

let num = prompt("Enter a number");
num = Number.parseInt(num);
if(num%2==0 && num%3==0){
  console.log("The number is divisible by both 2 and 3");
} 
else if(num%2==0){
  console.log("The number is divisible by 2");
} 
else if(num%3==0){
  console.log("The number is divisible by 3");
} 
else{
  console.log("The number is not divisible by 2 or 3") ;
}
