//javascript does not need an entry point in code like java and cpp need main class

//compiling order is top to down and left to right

console.log("Hello world");

//datatype => Number, Boolean, undefined, null, String, object
 
//in java or cpp we defined datatypes like
// int a = 12

//in JS ES6 syntax has only two keyword to define variables
// let. const

let a = 12;
let b = 12.2232;
let c = "variable";
let e = true;
let d = undefined;
let f = null;
let g = Object;
const h = 23;
const i = "hello";

console.log(a,b,c,d);

//i = "wold";  TypeError: Assignment to constant variable.

// let is block scope variable. let can be changed and modified.

// const is also a block scope variable and a constant. Once assigned the value will not be changed.

//What are block scoped variables?
//Block scoped variables: A block scoped variable means that the variable defined within a block will not be accessible from outside the block. 
//A block can reside inside a function, 
//and a block scoped variable will not be available outside the block even if the block is inside a function

let arr = [12,2,3,"ad",["sd"]];
console.log(arr);

// obj => key value pair

let obj = {
    id : '1',
    name : "name",
    movies : ["df","sd"]
}

console.log(obj.id);

// == & ===
// == checkes for value
// === checkes for values and datatype

