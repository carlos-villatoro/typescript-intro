// basically writing ts with more attributes to catch or create more strict code, 
// this then get turned into js in the dist folder, which can then be read by the html or other frameworks

// Basic Types
let id:number = 5
let company:string = 'Carlos Co'
let isCompany:boolean = true
let x:any = 'hello'
// x = true // wont error bc value attribute is set to any
let age: number
// age = true // will error bc attr set to number

let ids:number[] = [1,2,3,4,5] // sets array attr to numbers only
// ids.push('joe') // err out bc attr set to numbers
let arr: any[] = [1, true, 'hello']

// Tuple - specifies the exact types of the items in array
let person: [number, string, boolean] = [1, 'carlos', true] // values err if not value set and if not in correct order

//Tuple array
let employee: [number, string][] // sets a tuple to be the item of an array with the set attr

employee = [ 
    [1, 'carlos'],
    [2, 'joe'],
    [3, 'momma'],
]


// Union
// variable to hold more than one type
let pid:string | number 
pid = '22'
pid = 22

// Enum
// define set of named constants with number/string values
// defaults to start with 0 for first, but goes in order if first is set
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// console.log(Direction1.Up)
// console.log(Direction2.Down)


// Objects
type User = { // create the attr and reuse
    id: number,
    name:string
}

const user:User
// { // create a destructured obj to set keys and types or ^^
//     id: number,
//     name: string
// } 
= {
    id: 1,
    name: 'joe'
}

// Type Assertion
let cid:any = 1
// let customerId = <number>cid // set the type attr
// customerId = true // errors out bc attr is set
let customerId = cid as number // set the type

// Functions
function addNum(x:number, y:number):number { // will err the variables if not given a type attr, ():return value attr
    return x + y
}

// console.log(addNum(1, 2))

function log(msg:string | number):void { //if the return isnt going to be explicitly a type
    console.log(msg)
}

// log(true) // err out

// Interfaces
interface UserInt { // create the attr and reuse
    readonly id: number, // sets value to be read only
    name:string,
    age?: number //  lets the value be opt
}

const user1:UserInt = {
    id: 1,
    name: 'joe'
}

type Point = number | string // cannot use interface like this
const p1: Point = 1

// user1.id = 5 // err bc value is read only

interface MathFunc {
    (x:number, y:number):number
}
// given attr for the passed in values must match the interface
const add: MathFunc = (x: number, y:number):number => x + y 
const sub: MathFunc = (x: number, y:number):number => x - y

// Classes

interface personInt { // create the attr and reuse
    id: number, // sets value to be read only
    name:string,
    register():string // sets the atrr of the return on this method
}

class Person implements personInt {
    id: number // private... can only access within class
    name: string // protected... can only use in class or class than extends it

    constructor(id:number, name:string){
        this.id = id,
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad')
// console.log(brad)
// console.log(brad.id) // cant use bc its private/protected
// console.log(brad.register())

// Subclasses
class Employee extends Person {
    position:string
    
    constructor(id:number, name:string, position:string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'joe', 'manager')
// console.log(emp.register())

// Generics
function getArray<T>(items:T[]):T[]{ // sets attr with T generic
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['a', 'b', 'c'])

// numArray.push('hello') // array set to anything, can take in anything without generic
// strArray.push(2) // will both err since they dont match generic type 
strArray.push('joe')

