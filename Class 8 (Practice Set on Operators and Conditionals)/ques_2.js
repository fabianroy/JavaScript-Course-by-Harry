// Question 2 **
// Demonstrate the use of switch case statements in JavaScipt. 

let age = prompt("Which class do you read in? (Class 6 - Class 10)");
age = Number.parseInt(age);
switch(age){
  case 6:
    console.log("Hm.. You're a Kid!!");
    break
  case 7:
    console.log("You're 13 years olg ig..");
    break
  case 8:
    console.log("You're growing up. That's good...");
    break
  case 9:
    console.log("Yeah! You are 15!!");
    break
  case 10:
    console.log("Good Luck for you SSC exam");
    break
  default:
    console.log("You class is not between class 6 to class 10");
}
