// Uses REPL - Read Evaluate Print Loop

1
1
2
2
1+2
3

// Variables - name of the storage location

// Data Types - primitive -> Number, Boolean, String, Undefined, Null, BigInt, Symbol
// a = 10
// typeof a // -> number

// Numbers in JS
// Positive(1)& Negative(-14)
// integers(45,-50)
// Floating numbers - with decimals(4.6, -8.8)

// Operations in JS -> addition, substraction, multiplication, Division
// Modulo -> remainder operator(%)
// Exponentiation -> power operator (**)

// NaN -> when printing 0/0
// NaN 

// Operator Precedence -> (); ** ; *,/,% (left to right); +,- (left to right)
// for multiple powers operator -> precedence is Right to Left

// let keyword 
// let a = 5;
// let b;


const pi = 3.14
r = 3
area_of_circle = pi*r**2

// var keyword - old syntax of writing variables

var age = 23;
var cgpa = 8.9;

var num1 = 1;
var num2 = 2;
var sum = num1+num2;

// let age = 23
age +2 // after 2 years 
// still age = 23

let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi+eng+math)/3;

// Assignment operator
// =
age = age +2
age += 1
age -= 2

// Unary Operators 
age++
age--

// pre_increment(change, then use)
age = 10;
let nage = ++age

// post_increment(use, then change)

nage = age++

// practice qs
// let num = 5; // num = 5
// let newNum = num++; // -> newNum  = 5  num =6
// newNum = ++num   // newNum = 7 num = 7


// JAVASCRIPT IDENTIFIER RULES

//In JavaScript, an identifier is the name given to variables, functions, classes, or other user-defined items.

// Here are the rules for valid identifiers:

// ✅ Valid Identifier Rules
// Must start with:

// A letter (a-z or A-Z)
// An underscore (_)
// A dollar sign ($)
// Can contain:

// Letters (a-z, A-Z)
// Digits (0-9)
// Underscore (_)
// Dollar sign ($)
// Cannot start with a digit
// ❌ 1name → Invalid
// ✅ name1 → Valid

// Cannot be a reserved keyword
// Examples of reserved words:
// let, const, var, if, else, for, while, class, return, etc.

// Case-sensitive
// Name and name are different identifiers.

// Can use Unicode characters (including letters from other languages, but not recommended for code readability).

// CamelCase - way of writing identifiers

// Boolean in JS
// let age = 13;
let isAdult = false;
age = 25;
isAdult = true;
// console.log(isAdult); // -> true
// console.log(typeof isAdult); // -> boolean



// typescript
// static Typed, where JS is dynamic typed
// dynamic typed -> type can be changed
// static typed -> type can not be changed

// Practice qs
// a.)  let 1age = 5;       // identifiers error
//      lat 2age = 10;      // identifiers error

// b.)  let marks = 75;
//      lat isPass = True;  // small T in True

// c.)  let isPass = 'true';    // string data type

// String in JS - Strings are text or sequence of characters

// let name = "Tony Stark";
let role = 'Ironman';
let char = 'a';
let num = '23';
let empty = "";


let sentence = 'this is "apple"'

// String Indices
let hero = "Tony Stark"
// T -> index = 0
// o -> index = 1
// n -> index = 2
// y -> index = 3
//   -> index = 4
// S -> index = 5
// t -> index = 6
// a -> index = 7
// r -> index = 8
// k -> index = 9

hero[0] // -> T
hero[-1] // -> k

// null & undefined in JS
// undefined -> a variable that has not been assigned a value of type undefined
let n;
// console.log(n);  // undefined


// null -> the null value represents the intentional absence of any object value
// to be explicitly assigned 

let a = null;
// console.log(a);  // null

// Practice Question
let name = "Abhay Kumar"
console.log(typeof(name));

let firstName = "Abhay";
console.log(firstName[0]);

console.log(firstName[-1]);

let string = "apnacollege"+123

console.log((string));

// length of  empty string is 0 and with a space string length is 1
