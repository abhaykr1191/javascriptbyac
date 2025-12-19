// console.log("Hello World");
// let a = 10;
// let b = 5;
// console.log(a+b);

let pencilPrice = 10;
let erasorPrice = 5;
// console.log("The total price is :", pencilPrice + erasorPrice," Rupees. ");

let output = "The total price is : " + (pencilPrice + erasorPrice) + " Rupees.";
// console.log(output);


//  Template Literals -> Thet are used to add embedded expression in a string.

let a = 10;
let b = 10;
// console.log(`You pay ${a+b} rupees`);
// console.log("Price is", a+b, "rupees");

// Comparison Operator -> > , < , >= , <= , == , !=

5 == '5' // -> true
5 === '5' // -> flase

// comparison of non-numbers 

// console.log('A' == 'a');

// Conditional statement -> if-else, nested if-else , switch

// IF STATEMENT
// console.log("before if statement");

// let age = 17
// if(age >= 18){
//     console.log("You can Vote");
//     console.log("You can Drive");
// }
// if(age < 18){
//     console.log("You can not Vote");
//     console.log("You can not Drive");
// }
// console.log("after if statement");




// +++++++++++++++              Practice Question              ++++++++++++++++++++++++++

// Traffic Light
let color = "red"
// if (color === "red") {
//     console.log("Stop! Light Color is red");   
// }
// if (color === "yellow") {
//     console.log("Slow Down! Light Color is yellow");   
// }
// if (color === "green") {
//     console.log("Go! Light Color is green");   
// }


// else-if statement 

// if (condition1) {
//     do something
// } else if (condition2) {
//     do something else
// } else if (condition3) {
//     do something else
// }

// else statement

// if (condition) {
//     do something
// } else {
//     do something else 
// }

// if (color === "red") {
//     console.log("Stop! Light Color is red");   
// }
// if (color === "yellow") {
//     console.log("Slow Down! Light Color is yellow");   
// }
// if (color === "green") {
//     console.log("Go! Light Color is green");   
// }
// else{
//     console.log("Light is broken");
// }

// +++++++++++++++      Practice Question       ++++++++++++++++++++

// popcorn price
size = "XL"
// if (size === "XL") {
//     console.log("Price is Rs. 250");
// } else if(size === "L"){
//     console.log("Price is Rs. 200");
// } else if (size === "M"){
//     console.log("Price is Rs. 100");
// }else if(size === "S"){
//     console.log("Price is Rs. 50");
// }else{
//     console.log("Give the Correct Size from (S, M, L, XL)");
// }

// LOGICAL OPERATOR -> && (and), || (or), ! (not)


// LOGICAL AND OPERATOR
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// LOGICAL OR OPERATOR
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// LOGICAL NOT OPERATOR
// console.log(!true)
// console.log(!false)

// Logical Operators can be solved from left to right

// +++++++++++++++      Practice Question       +++++++++++++++++++++

// Ques -> A "good string" is a string that starts with the letter 'a' & has a length>3. WAP(Write a Program) to find if a string is good or not.

str = "abcd"

// if (str.length > 3 && str[0] === 'a') {
//     console.log("Good String");
// }else{
//     console.log("Not Good String");
// }

// Ques -> 
let num = 12;

// if ((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))) {
//     console.log("safe");
// }else{
//     console.log("unsafe");
// }

// Truthy Falsy Value

// Flasy Value
// false, 0, -0, 0n (BigInt), ""(empty String), null , undefined, NaN

// Truthy Vlaues 
// Everything Else 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// switch (color) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "red":
//         console.log("Slow Down");
//         break;
//     case "red":
//         console.log("Go");
//         break;

//     default:
//         console.log("Broken Light");
//         break;
// }

// +++++++++++++++      Practice Question       +++++++++++++++++++++

// Ques  -> Use switch statement to print the day of the week using a number variable 'day' with values 1-7
// 1-> Monday, 2-> Tuesday & so on
let day = 1
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Wrong Day");
//         break;
// }

// alert("Something is Wrong");
// console.error("This is an error message")
// console.warn("This is an warning message")

let firstName= prompt("Enter Your First Name");
let lastName= prompt("Enter Your Last Name");
msg = firstName+" "+ lastName;
alert(msg);
