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
// console.log(msg);

// slice ->  Returns a part of the original string as a new string

str.slice(0,3);

// replace -> replace the first occurance of the string

str.replace("he","HE");

// repeat -> repeat the string

let fruit = "Mango";
fruit.repeat(2);


// ++++++++++++++++++++++++         Practice Question       ++++++++++++++++++++++++

// qes - > the "help" message should be trimed and in uppercase
let js3msg = "help!";
// console.log(js3msg.trim().toUpperCase());

// ques -> for the string let name = "ApnaCollege" predict the output 
let name = "ApnaCollege"
// name.slice(4,9) -> Colle
// name.indexOf("na") -> 2
//name.replace("Apna","Our")  -> "OurCollege"

// Ques - > Separate the "College" part in above string and replace 'l' with 't' in it.

// console.log(name.slice(4).replace('l','t').replace('l','t'));

// Array -> Linear Collection of things

let students = ["Abhay","Rahul","Rajat"];

// VISUALISATION OF ARRAY
let nums = [2,4,6,8] // in this 2 is at 0 and 4 is at 1 and so on
// console.log(typeof(nums)); // Output -> object

// creating  an array
let info = ["Abhay", 23, 89.9];
// creating empty array
let empArray = [];

// console.log(empArray.length)        // gives 0

// console.log(info[0][0]);

info[1]=22

// console.log(info);
info[7]="Gurgaon"
// console.log(info);

// ARRAY METHODS -> push(add to end), pop(delete from end and return it), unshift(add to start),shift(delete from start and return it)

let cars = ["Audi","Ferrari","Maruti"];

cars.push("Ford");
cars.pop();
cars.shift();
cars.unshift("Toyota");

// +++++++++++++++++++++++      Practice Question    ++++++++++++++

// Ques-> for the given start state of an array , change it to final form using methods
let start = ['january', 'july', 'march', 'august']
let final = ['july', 'june','march','august']

start.shift()
start.shift()
start.unshift("june")
start.unshift("july")
// console.log(start);


// More array methods
// indexOf ->  return index of something
// includes -> serach for values 

let primary = ["red","yellow","blue"];

// console.log(primary.includes("yellow"));  // true
// console.log(primary.includes("green"));  // -> false
// console.log(primary.indexOf("green"));   // ->-1
// console.log(primary.indexOf("yellow"));  // -> 1
// console.log(primary.indexOf("Yellow")); // -> -1

let secondary = ["orange","green","violet"];

// concat -> merge 2 arrays
// reverse -> reverse an array

// console.log(primary.concat(secondary)); // we have to direct print the cancat array or have to store that on other variable
// console.log(primary.reverse());  // this chnages in original array

// slice -> copies a portion of an array
let colors = primary.concat(secondary);
// console.log(colors);

// console.log(colors.slice())
// console.log(colors.slice(2))
// console.log(colors.slice(2,3))
// console.log(colors.slice(-2))

// splice -> removes/replaces/add elements in place from/in the original array
// Format - >splice(start,deleteCount,item0...itemN)

// console.log(colors.splice(4));
// console.log(colors);
// console.log(colors.splice(0,1));
// console.log(colors);
// console.log(colors.splice(0,1,"Black","Grey"));
// console.log(colors);

// sort -> sorts an array

// console.log(cars.sort());   // sort is done on characters and strings

// DOING THE SLICE QUESTION WITH SPLICE
// start.splice(0,2,"july","june")
// console.log(start);


// Ques 2 ->  Return the index of the Javascript from the given array,if it was reversed
let lang =['c','c++','html','javascript','python','java','c#','sql'];
// console.log(lang.reverse().indexOf("javascript"));

// ARRAY REFERENCES -> Address in Memory

console.log([1] == [1]);
// console.log([1] === [1]);  // This condition will always return 'false' since JavaScript compares objects by reference, not value.

let arr1 = [1, 2, 5]
let arr2 = arr1 // this will point to the same array reference that's why the change in  1 will be also done in other one.

const g = 10;
// g=9.8    // app.js:169 Uncaught TypeError: Assignment to constant variable.
console.log(g);

// IN ARRAYS
const arr = [1, 2, 3];
arr.push(4);
arr.pop(4);
// arr = [1,2,3];   // Uncaught TypeError: Assignment to constant variable.
// console.log(arr);

let nums2 = [[2,4],[3,6],[4,8]];
console.log(nums2[0][1]);

// ++++++++++++++++++++++++     Practice Question       +++++++++++++++++++++++
// Ques ->  Create a nested array to show the following tic-tac-toe game state
// 1st row -> 'X',null,'O'
// 2nd row -> null,'X',null
// 2nd row -> 'O',null, 'X'

let tic_tac_toe =[['X',null,'O'],[null,'X',null],['O',null,'X']];
console.log(tic_tac_toe);

// new question (additional) make the 1st row 2nd column "O"
tic_tac_toe[0][1] = 'O';
console.log(tic_tac_toe);


