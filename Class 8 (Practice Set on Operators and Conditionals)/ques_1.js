// Question 1 **
// Use logical operators to find whether the age of a person lies between 10 ad 20. 

let age = prompt("What is your age?");
age = Number.parseInt(age);
if(age>10 && age<20){
  console.log("Your age lies between 10 and 20")
}
else{
  console.log("Your age doesn't lies between 10 and 20");
}
