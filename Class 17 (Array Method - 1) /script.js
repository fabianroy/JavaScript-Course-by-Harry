let num = [1, 2, 3, 4, 5];

let b = num.toString(); //String Method
console.log(b); 

let c = num.join(" - ") // Join Method
console.log(c, typeof c);

let d = num.pop() //Pop Method
console.log(num, d);

let e = num.push(6) //Push Method
console.log(num, e);

let f = num.shift();
console.log(f, num) // Shift Method removes the first element of the array 
