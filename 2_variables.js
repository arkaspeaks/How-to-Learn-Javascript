// there are 3 ways to write a variable in JS
// 1. the var
// 2. the let
// 3. the const

// NOTE FOR MYSELF: IT IS BETTER NOT TO USE var IN THE LATEST JS CODE

// the let :
let a = 10 
// console.log (a)
// this prints the value of a variable as 10
a = 20 
//now lets declare the value of a as 20 without changing the let statement 
console.log (a)
//the output comes out as 20 
// the let way of declaring variables is just a way of declaring variables,
// the value can be changed later

// the const :
const b = 12
console.log ("the value of b is", b) 
// this prints out the value of b as 12 
// the bigger feature of this is thou the value cannot be changed once it is assigned


// b = 13
// console.log (b)
// the output to this is always going to be an error
// this is because the value of b is assigned through const and so the value is now a constant and cannot be changed.