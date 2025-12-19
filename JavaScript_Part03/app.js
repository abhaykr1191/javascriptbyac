// String Method 
// Methods - actions that can be performed on objects

//Format
// stringName.method()

// let password = prompt("Enter Password")
// let npass = password.trim();
// console.log(password);

// Strings are Immutable in JS
// No changes can be made to strings.
// Whenever we try to make a change, a new string is created and old one remains same.

// password.toUpperCase()
// password.toLowerCase()

// String method with argument -> Argument is some value that we pass to the metod.
// stringName.method(arg)
let str = "hcfgvjlgcgh.ds  "
str.indexOf("s") // first index of the arg

// method chaining
let msg = "   hello "

// let newMsg = msg.trim();
// newMsg = newMsg.toUpperCase();
// console.log(newMsg);

msg = msg.trim().toUpperCase()
console.log(msg);

// slice ->  Returns a part of the original string as a new string




