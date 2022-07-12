"use strict";
// basically writing ts with more attributes to catch or create more strict code, 
// this then get turned into js in the dist folder, which can then be read by the html or other frameworks
// Basic Types
let id = 5;
let company = 'Carlos Co';
let isCompany = true;
let x = 'hello';
// x = true // wont error bc value attribute is set to any
let age;
// age = true // will error bc attr set to number
let ids = [1, 2, 3, 4, 5]; // sets array attr to numbers only
// ids.push('joe') // err out bc attr set to numbers
let arr = [1, true, 'hello'];
// Tuple - specifies the exact types of the items in array
let person = [1, 'carlos', true]; // values err if not value set and if not in correct order
//Tuple array
let employee; // sets a tuple to be the item of an array with the set attr
employee = [
    [1, 'carlos'],
    [2, 'joe'],
    [3, 'momma'],
];
// Union
// variable to hold more than one type
let pid;
pid = '22';
pid = 22;
// Enum
// define set of named constants with number/string values
// defaults to start with 0 for first, but goes in order if first is set
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user 
// { // create a destructured obj to set keys and types or ^^
//     id: number,
//     name: string
// } 
= {
    id: 1,
    name: 'joe'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid // set the type attr
// customerId = true // errors out bc attr is set
let customerId = cid; // set the type
// Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 2))
function log(msg) {
    console.log(msg);
}
const user1 = {
    id: 1,
    name: 'joe'
};
const p1 = 1;
// given attr for the passed in values must match the interface
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    id; // private... can only access within class
    name; // protected... can only use in class or class than extends it
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
// console.log(brad)
// console.log(brad.id) // cant use bc its private/protected
// console.log(brad.register())
// Subclasses
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'joe', 'manager');
console.log(emp.register());
