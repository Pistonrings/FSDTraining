console.log("Start");

// global-scope

var a = 10;
console.log(10);

// local-scope

let b = 20;
console.log(b);

const c = 30;
console.log(c);

// block-scope
{
    var m = 200; // as it is "var" it is global
    console.log(m);

    let n = 400;
    console.log(n);

    var o = 600;
    console.log(o);
}

console.log("Stop");