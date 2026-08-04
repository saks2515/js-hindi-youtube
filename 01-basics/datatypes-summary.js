// primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 6543225887657n

// non premetive / refernce type

// Arrays, Objects, Functions

const fruits = ["appple","mango","banana"];

let myObj = {
    name : "sakshi",
    age : 22,

}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber)