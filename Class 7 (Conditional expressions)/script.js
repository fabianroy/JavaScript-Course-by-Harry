let a = prompt("Hey what's your age? ");
a = Number.parseInt(a); //converting a string to a number
if(a>=18 && a<=100){
  alert("You're eligible to vote.");
}
else if(a>100){
  alert("I think you're DEAD!! Rest is peace.");
}
else{
  alert("You're ineligible to vote.");
}
