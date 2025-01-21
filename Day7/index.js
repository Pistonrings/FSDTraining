function main(m, n) {
    for (let i = m; i <= n; i++) {
        console.log(i);
    }
}
main(1, "10a");

function demo() {
    console.log("Number's printed");
}
demo();

//asynchrous functions
//--> making a way for other fun to execute first.

//two-methods
//1) set Timeout(cbf,dely-time)
//2)setInterval(cbf , delay-time)
//prent inside widow object.

// window.setTimeout( () => {
//     console.log("I am SetTimeout");
// }, 5000);

// window.setInterval( () => {
//     console.log("I am SetInterval");
// }, 5000);


// promise 
      
// --> it is an object 
// -->used to look after async function.

// 3-phase
// 1)pending phase
// 2)resolve / fulfill phase 
// 3)reject phase

let online = window.navigator.onLine

new Promise((resolve , reject)=>{
    
})