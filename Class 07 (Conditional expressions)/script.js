let a = prompt("Hey what's your age? ");
a = Number.parseInt(a); //converting a string to a number
if(a>=18 && a<=100){
  console.log("You're eligible to vote.");
}
else if(a>100){
  console.log("I think you're DEAD!! Rest in peace.");
}
else{
  console.log("You're ineligible to vote.");
}
