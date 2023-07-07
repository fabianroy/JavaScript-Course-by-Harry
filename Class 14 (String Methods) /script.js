let name = "Fabian";
console.log(name.length);

console.log(name[0]);
console.log(name[2]);
console.log(name[5]);

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2,4)); // (From 2 to 4. but 4 is not included)
console.log(name.slice(2,6)); // (From 2 to 6. but 5 is not include)
console.log(name.slice(1)); // (From 2 to last)
console.log(name.replace("Fabian", "Fahad")); //(To replace the value)
console.log(name.replace("Fa", "Dha")) //(To replace the value)

let friend1 = "Nasif";
console.log(name.concat(" is a friend of ", friend1)); //(to connect two string)

let friend2 = "    Mahir    ";
console.log(friend2);
console.log(friend2.trim()); // (to ignore the gaps)

let friends = "Nasif" + "Mahir" + "Mujtabir";
console.log(friends);
