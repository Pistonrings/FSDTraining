// (generic - multiple task)

// -------- function programming ---------
// ● Higher order function  
// ● Call back function

function main(task) {
    console.log(task);
    console.log(task(10, 10));
}

main(function(a, b) {
    return a + b;
});

main(function(a, b) {
    return a - b;
});

main(function(a, b) {
    return a * b;
});

// -------- arrow fuction ---------
// introduced in ES-6 version(ECMA-script) 2015
// ECMA - European Computr Manufacture Association - created by "Netscape"
// used to reduce the number of lines

// two types of return
// 1. Implicit return arrow fuction
// --> no need to using return keyword

() => console.log("hello");  // it is like anonymous fuction and can be used as a value

let a = () => console.log("hello");
console.log(a);
console.log(a());

// => fat arrow

// 2. Explicit return arrow fuction
// --> return keyword is mandatory

() => { return "Hello"; }  // here -->  { ... . } block mandatory

let b = () => { return "Hello"; };
console.log(b);
console.log(b());



function main(task) {
    console.log(task);
    console.log
