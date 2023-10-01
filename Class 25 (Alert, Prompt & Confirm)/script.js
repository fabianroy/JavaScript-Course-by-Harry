alert("Welcome to JS Practice"); 

let a = prompt("Enter your age");
a = Number.parseInt(a);
let write = confirm("Do you want to write your age on the document?");
if(write){
  document.write("Your age is : " + a);
}else{
  document.write("Please allow me to write");
}
